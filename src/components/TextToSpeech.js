import React, { useState, useEffect, useRef } from "react";
import { IconVolume, IconVolumeOff, IconLoader2 } from "@tabler/icons-react";

const TextToSpeech = ({ textSelector }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [isVoicesLoaded, setIsVoicesLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const textRef = useRef(null);
  const isMounted = useRef(true);
  const wordSpans = useRef([]);
  const wordList = useRef([]);

  // Fixed settings
  const volume = 1;
  const rate = 0.75;
  const pitch = 0;

  // Expanded list of preferred natural-sounding voices (female where possible)
  const preferredVoices = [
    "Microsoft Hazel - English (United Kingdom)", // Female, en-GB, Windows
    "Google UK English Female", // Female, en-GB, Chrome
    "Samantha", // Female, en-US, macOS
    "Microsoft Zira - English (United States)", // Female, en-US, Windows
    "Google US English", // Female, en-US, Chrome
  ];

  // Function to wrap text nodes in spans while preserving DOM structure
  const wrapTextInSpans = (element) => {
    if (!element || !isMounted.current) return;
    textRef.current.originalContent = element.innerHTML;
    wordSpans.current = [];
    wordList.current = [];
    let wordIndex = 0;

    const processNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        if (text) {
          const words = text.split(/(\s+)/);
          const spanContainer = document.createElement("span");
          let spanContent = "";
          words.forEach((word) => {
            if (/\S+/.test(word)) {
              spanContent += `<span class="word transition-colors duration-200" data-index="${wordIndex}">${word}</span>`;
              wordList.current.push(word);
              wordSpans.current.push(wordIndex);
              wordIndex++;
            } else {
              spanContent += word;
            }
          });
          spanContainer.innerHTML = spanContent;
          node.replaceWith(spanContainer);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() !== "img") {
        Array.from(node.childNodes).forEach(processNode);
      }
    };

    try {
      Array.from(element.childNodes).forEach(processNode);
    } catch (error) {
      console.error("Error wrapping text in spans:", error);
      restoreOriginalContent();
    }
  };

  // Function to restore original content
  const restoreOriginalContent = () => {
    if (textRef.current && textRef.current.originalContent) {
      textRef.current.innerHTML = textRef.current.originalContent;
      delete textRef.current.originalContent;
      wordSpans.current = [];
      wordList.current = [];
    }
  };

  // Function to extract text for speech synthesis
  const getAllText = (element) => {
    if (!element) return "";
    let text = "";
    element.childNodes.forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node.tagName.toLowerCase() === "img" ||
          node.classList.contains("bg-white"))
      ) {
        return;
      }
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent.trim() + " ";
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        text += getAllText(node);
      }
    });
    return text.trim();
  };

  // Check browser support and load voices
  useEffect(() => {
    isMounted.current = true;
    if ("speechSynthesis" in window) {
      setIsSupported(true);
      const loadVoices = () => {
        if (!isMounted.current) return;
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          console.log(
            "Available voices:",
            availableVoices.map((v) => ({ name: v.name, lang: v.lang }))
          );
          setVoices(availableVoices);
          setIsVoicesLoaded(true);
        } else {
          // Retry loading voices after a short delay if none are available
          setTimeout(loadVoices, 100);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
      };

      return () => {
        isMounted.current = false;
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      setIsSupported(false);
    }
  }, []);

  // Prepare text for highlighting and handle cleanup
  useEffect(() => {
    isMounted.current = true;
    const container = document.querySelector(textSelector);
    if (container) {
      textRef.current = container;
      wrapTextInSpans(container);
    }

    return () => {
      isMounted.current = false;
      if (textRef.current) {
        restoreOriginalContent();
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setCurrentWordIndex(-1);
      }
    };
  }, [textSelector]);

  // Handle speech with highlighting
  const speak = () => {
    if (!isMounted.current) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentWordIndex(-1);
      const spans = document.querySelectorAll(`${textSelector} .word`);
      spans.forEach((span) => span.classList.remove("bg-yellow-300"));
      return;
    }

    if (!isVoicesLoaded) {
      console.warn("Voices are still loading. Please wait.");
      return;
    }

    requestAnimationFrame(() => {
      if (!isMounted.current) return;
      const container = document.querySelector(textSelector);
      if (!container) {
        console.error("Container not found for selector:", textSelector);
        return;
      }
      const text = getAllText(container);
      if (!text) {
        console.error("No text found for the given selector:", textSelector);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.volume = volume;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Select the first available voice from the preferred list
      let selectedVoice = voices.find((v) => preferredVoices.includes(v.name));

      // Fallback to high-quality en-GB or en-US voices
      if (!selectedVoice) {
        console.warn(
          "No preferred voice found. Falling back to en-GB or en-US voice."
        );
        selectedVoice = voices.find(
          (v) =>
            (v.lang === "en-GB" || v.lang === "en-US") &&
            (v.name.toLowerCase().includes("female") ||
              v.name.toLowerCase().includes("natural"))
        ) || voices.find((v) => v.lang === "en-GB" || v.lang === "en-US");
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log(
          `Using voice: ${selectedVoice.name} (${selectedVoice.lang})`
        );
      } else {
        console.warn(
          "No suitable voice found. Using browser default voice."
        );
      }

      // Highlight words as they are spoken
      utterance.onboundary = (event) => {
        if (!isMounted.current || event.name !== "word") return;
        let charCount = 0;
        let wordIndex = -1;
        for (let i = 0; i < wordList.current.length; i++) {
          charCount += wordList.current[i].length + 1;
          if (event.charIndex <= charCount) {
            wordIndex = i;
            break;
          }
        }
        if (wordIndex >= 0 && wordIndex < wordSpans.current.length) {
          setCurrentWordIndex(wordIndex);
          const spans = document.querySelectorAll(`${textSelector} .word`);
          spans.forEach((span, index) =>
            span.classList.toggle("bg-yellow-300", index === wordIndex)
          );
        }
      };

      utterance.onend = () => {
        if (!isMounted.current) return;
        setIsSpeaking(false);
        setCurrentWordIndex(-1);
        const spans = document.querySelectorAll(`${textSelector} .word`);
        spans.forEach((span) => span.classList.remove("bg-yellow-300"));
      };

      utterance.onerror = (e) => {
        if (!isMounted.current) return;
        console.error("Speech synthesis error:", e);
        setIsSpeaking(false);
        setCurrentWordIndex(-1);
        const spans = document.querySelectorAll(`${textSelector} .word`);
        spans.forEach((span) => span.classList.remove("bg-yellow-300"));
      };

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    });
  };

  return (
    <button
      id="speak"
      onClick={speak}
      disabled={!isSupported || !isVoicesLoaded}
      className={`p-2 rounded-md text-gray-500 dark:text-[#FFFFFF] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-1`}
      title={isSpeaking ? "Stop reading" : isVoicesLoaded ? "Read aloud" : "Preparing voices"}
    >
      {isSpeaking ? (
        <IconVolumeOff className="w-5 h-5" />
      ) : isVoicesLoaded ? (
        <IconVolume className="w-5 h-5" />
      ) : (
        <IconLoader2 className="w-5 h-5 animate-spin" />
      )}
      <span className="sr-only">
        {isSpeaking ? "Stop reading" : isVoicesLoaded ? "Read aloud" : "Preparing voices"}
      </span>
    </button>
  );
};

export default TextToSpeech;