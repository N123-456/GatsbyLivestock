import React, { useState, useEffect, useRef } from "react";
import { IconVolume, IconVolumeOff, IconLoader2 } from "@tabler/icons-react";

const TextToSpeech = ({ textSelector }) => {
  // Move all hooks to the top level, unconditionally
  const [isClient, setIsClient] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [isVoiceLoading, setIsVoiceLoading] = useState(true);
  const wordRefs = useRef([]);
  const currentWordIndex = useRef(-1);
  const containerRef = useRef(null);

  const volume = 1;
  const rate = 0.7;
  const pitch = 0;

  const femaleVoiceNames = [
    "Google US English Female",
    "Google UK English Female",
    "Microsoft Zira Desktop",
    "Samantha",
    "Tessa",
    "Victoria",
    "Fiona",
    "Karen",
    "Siri Female",
    "Amalia",
    "Emma",
    "Isabella",
    "Google español de Estados Unidos",
    "Google français",
    "Microsoft Hazel Desktop",
    "Microsoft Susan",
    "Microsoft Linda",
  ];

  console.log(
    "TextToSpeech rendered, isSpeaking:",
    isSpeaking,
    "isVoiceLoading:",
    isVoiceLoading,
    "isSupported:",
    isSupported,
    "isClient:",
    isClient
  );

  // Handle client-side detection
  useEffect(() => {
    setIsClient(true); // Set to true after mount
  }, []);

  const wrapTextInSpans = (element, wordIndex = { index: 0 }) => {
    if (!element) {
      console.error("No element provided to wrapTextInSpans");
      return null;
    }

    const allowedTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI"];

    const processNode = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const newElement = document.createElement(node.tagName);
        for (let attr of node.attributes) {
          newElement.setAttribute(attr.name, attr.value);
        }

        if (
          node.tagName.toUpperCase() === "UL" ||
          node.tagName.toUpperCase() === "SPAN"
        ) {
          node.childNodes.forEach((child) => {
            const processedChild = processNode(child);
            if (processedChild) newElement.appendChild(processedChild);
          });
          return newElement;
        }

        if (allowedTags.includes(node.tagName.toUpperCase())) {
          node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
              const text = child.textContent.trim();
              if (text) {
                const words = text
                  .split(/\s+/)
                  .filter((word) => word.length > 0);
                words.forEach((word) => {
                  const span = document.createElement("span");
                  span.dataset.wordIndex = wordIndex.index++;
                  span.textContent = word + " ";
                  span.className = "inline";
                  wordRefs.current[span.dataset.wordIndex] = span;
                  newElement.appendChild(span);
                });
              }
            } else {
              const processedChild = processNode(child);
              if (processedChild) newElement.appendChild(processedChild);
            }
          });
          return newElement;
        }

        node.childNodes.forEach((child) => {
          const processedChild = processNode(child);
          if (processedChild) newElement.appendChild(processedChild);
        });
        return newElement.childNodes.length > 0
          ? newElement
          : node.cloneNode(true);
      } else if (node.nodeType === Node.TEXT_NODE) {
        if (
          node.parentElement &&
          allowedTags.includes(node.parentElement.tagName.toUpperCase())
        ) {
          const text = node.textContent.trim();
          if (text) {
            const words = text.split(/\s+/).filter((word) => word.length > 0);
            const fragment = document.createDocumentFragment();
            words.forEach((word) => {
              const span = document.createElement("span");
              span.dataset.wordIndex = wordIndex.index++;
              span.textContent = word + " ";
              span.className = "inline";
              wordRefs.current[span.dataset.wordIndex] = span;
              fragment.appendChild(span);
            });
            return fragment;
          }
        }
        return node.cloneNode(true);
      }
      return node.cloneNode(true);
    };

    const clonedElement = element.cloneNode(true);
    return processNode(clonedElement);
  };

  const getAllText = (element) => {
    if (!element) {
      console.error("No element provided to getAllText");
      return "";
    }
    let text = "";
    const allowedTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI"];

    element.childNodes.forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        (node.tagName.toLowerCase() === "img" ||
          node.classList.contains("bg-white") ||
          node.classList.contains("gatsby-image-wrapper"))
      ) {
        return;
      }

      if (
        node.nodeType === Node.ELEMENT_NODE &&
        allowedTags.includes(node.tagName.toUpperCase())
      ) {
        node.childNodes.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            const textContent = child.textContent.trim();
            if (textContent) text += textContent + " ";
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            text += getAllText(child);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        text += getAllText(node);
      }
    });

    return text.trim();
  };

  useEffect(() => {
    if (!isClient || !("speechSynthesis" in window)) {
      setIsSupported(false);
      setIsVoiceLoading(false);
      console.log("Speech synthesis not supported or not client-side");
      return;
    }

    setIsSupported(true);
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log(
        "Available voices:",
        availableVoices.map((v) => ({
          name: v.name,
          lang: v.lang,
          default: v.default,
        }))
      );
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        setIsVoiceLoading(false);
        const femaleVoice = availableVoices.find((v) =>
          femaleVoiceNames.some((name) =>
            v.name.toLowerCase().includes(name.toLowerCase())
          )
        );
        if (femaleVoice) {
          console.log(
            `Female voice selected: ${femaleVoice.name} (${femaleVoice.lang})`
          );
        } else {
          console.warn(
            "No female voice matched, using first English voice or default"
          );
        }
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = null;
    };

    const timeout = setTimeout(() => {
      console.warn("Voice loading timed out, proceeding with available voices");
      setIsVoiceLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [isClient]);

  useEffect(() => {
    console.log(
      "State updated: isSpeaking=",
      isSpeaking,
      "isVoiceLoading=",
      isVoiceLoading,
      "isSupported=",
      isSupported
    );
  }, [isSpeaking, isVoiceLoading, isSupported]);

  const speak = () => {
    if (!isClient) {
      console.warn("Cannot speak, not on client-side");
      return;
    }

    console.log("Speak button clicked, current isSpeaking:", isSpeaking);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      resetHighlighting();
      restoreOriginalContent();
      console.log("Speech stopped, isSpeaking:", false);
      return;
    }

    if (isVoiceLoading) {
      console.warn("Voices not yet loaded, please wait...");
      return;
    }

    setTimeout(() => {
      setIsSpeaking(true);
      console.log("setIsSpeaking(true) inside timeout");
    }, 0);

    const container = document.querySelector(textSelector);
    console.log("Container element:", container);
    if (!container) {
      console.error("Container not found for selector:", textSelector);
      setIsSpeaking(false);
      return;
    }

    containerRef.current = container;
    containerRef.current.originalContent = container.cloneNode(true);

    wordRefs.current = [];
    currentWordIndex.current = -1;
    const newContent = wrapTextInSpans(container);
    if (newContent) {
      container.innerHTML = "";
      container.appendChild(newContent);
      void container.offsetHeight;
    } else {
      console.error("Failed to wrap text in spans");
      setIsSpeaking(false);
      restoreOriginalContent();
      return;
    }

    const text = getAllText(containerRef.current.originalContent);
    if (!text) {
      console.error("No text found for selector:", textSelector);
      setIsSpeaking(false);
      restoreOriginalContent();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = volume;
    utterance.rate = rate;
    utterance.pitch = pitch;

    let voice = voices.find((v) =>
      femaleVoiceNames.some((name) =>
        v.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    if (!voice) {
      voice = voices.find((v) => v.lang.startsWith("en"));
      console.warn(
        `No female voice found, falling back to: ${
          voice ? voice.name : "browser default"
        }`
      );
    }
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
      console.log("Selected voice:", voice.name, `(${voice.lang})`);
    } else {
      console.warn("No suitable voice found, using browser default");
    }

    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const wordBoundaries = [];
    let charCount = 0;
    words.forEach((word) => {
      wordBoundaries.push({ start: charCount, end: charCount + word.length });
      charCount += word.length + 1;
    });

    let lastHighlightTime = 0;
    const highlightNextWord = () => {
      const now = Date.now();
      if (now - lastHighlightTime < 100) return;
      lastHighlightTime = now;

      const elapsed = now - (utterance.startTime || now);
      let wordIndex = Math.floor((elapsed / 1000) * utterance.rate * 4);
      wordIndex = Math.min(
        wordIndex,
        words.length - 1,
        wordRefs.current.length - 1
      );

      if (wordIndex >= 0 && wordRefs.current[wordIndex]) {
        if (
          currentWordIndex.current >= 0 &&
          wordRefs.current[currentWordIndex.current]
        ) {
          wordRefs.current[currentWordIndex.current].classList.remove(
            "bg-gray-200",
            "dark:bg-gray-400"
          );
        }
        wordRefs.current[wordIndex].classList.add(
          "bg-gray-200",
          "dark:bg-gray-400"
        );
        currentWordIndex.current = wordIndex;
        console.log(
          `Highlighting word: ${words[wordIndex] || "N/A"}, index=${wordIndex}`
        );
      }
    };

    utterance.onstart = () => {
      console.log("Utterance onstart fired");
      utterance.startTime = Date.now();
      const interval = setInterval(() => {
        if (!isSpeaking) {
          clearInterval(interval);
          return;
        }
        highlightNextWord();
      }, 200);
      utterance.interval = interval;
    };

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const charIndex = event.charIndex;
        let wordIndex = wordBoundaries.findIndex(
          (boundary) => charIndex >= boundary.start && charIndex < boundary.end
        );
        if (wordIndex >= 0 && wordRefs.current[wordIndex]) {
          if (
            currentWordIndex.current >= 0 &&
            wordRefs.current[currentWordIndex.current]
          ) {
            wordRefs.current[currentWordIndex.current].classList.remove(
              "bg-gray-200",
              "dark:bg-gray-400"
            );
          }
          wordRefs.current[wordIndex].classList.add(
            "bg-gray-200",
            "dark:bg-gray-400"
          );
          currentWordIndex.current = wordIndex;
          console.log(
            `Boundary-based highlight: wordIndex=${wordIndex}, word=${
              words[wordIndex] || "N/A"
            }`
          );
        }
      }
    };

    utterance.onend = () => {
      console.log("Utterance onend fired");
      if (utterance.interval) {
        clearInterval(utterance.interval);
      }
      setIsSpeaking(false);
      resetHighlighting();
      restoreOriginalContent();
      console.log("Speech ended, isSpeaking:", false);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error:", e.error, e.message);
      if (utterance.interval) {
        clearInterval(utterance.interval);
      }
      setIsSpeaking(false);
      resetHighlighting();
      restoreOriginalContent();
      console.log("Speech error, isSpeaking:", false);
    };

    console.log("About to start speech synthesis");
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    console.log(
      "Speech synthesis triggered with voice:",
      voice ? voice.name : "default"
    );
  };

  const resetHighlighting = () => {
    if (
      currentWordIndex.current >= 0 &&
      wordRefs.current[currentWordIndex.current]
    ) {
      wordRefs.current[currentWordIndex.current].classList.remove(
        "bg-gray-200",
        "dark:bg-gray-400"
      );
    }
    currentWordIndex.current = -1;
  };

  const restoreOriginalContent = () => {
    if (containerRef.current && containerRef.current.originalContent) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(
        containerRef.current.originalContent.cloneNode(true)
      );
      containerRef.current.originalContent = null;
      console.log("Original DOM restored");
    }
  };

  useEffect(() => {
    return () => {
      if (isClient) {
        window.speechSynthesis.cancel();
        resetHighlighting();
        restoreOriginalContent();
      }
    };
  }, [isClient]);

  // Conditionally render button content, not the entire component
  if (!isClient) {
    return null; // Render nothing during SSR
  }

  return (
    <button
      id="speak"
      onClick={speak}
      disabled={!isSupported || isVoiceLoading}
      className={`p-2 rounded-md text-gray-500 ${
        isSpeaking ? "text-blue-500" : ""
      } transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50`}
      title={
        isSpeaking ? "Stop" : isVoiceLoading ? "Loading voices..." : "Speak"
      }
      aria-label={
        isSpeaking
          ? "Stop text-to-speech"
          : isVoiceLoading
          ? "Loading text-to-speech"
          : "Start text-to-speech"
      }
    >
      {console.log(
        "Rendering button, isSpeaking:",
        isSpeaking,
        "isVoiceLoading:",
        isVoiceLoading,
        "Icon to show:",
        isVoiceLoading ? "Loader" : isSpeaking ? "Volume" : "VolumeOff"
      )}
      {isVoiceLoading ? (
        <IconLoader2 className="w-5 h-5 animate-spin" aria-label="Loading" />
      ) : isSpeaking ? (
        <IconVolume className="w-5 h-5 text-blue-500" aria-label="Speaking" />
      ) : (
        <IconVolumeOff className="w-5 h-5" aria-label="Not speaking" />
      )}
    </button>
  );
};

export default TextToSpeech;
