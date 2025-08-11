import React, { useState, useEffect } from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

// Define props interface
interface TextToSpeechProps {
  textSelector: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ textSelector }) => {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isVoicesLoaded, setIsVoicesLoaded] = useState<boolean>(false);

  // Fixed settings
  const volume: number = 1;
  const rate: number = 0.75;
  const pitch: number = 0;

  // Hardcoded list of preferred female voices in order of priority
  const preferredVoices: string[] = [
    "Microsoft Hazel - English (United Kingdom)", // Female, en-GB, Windows
    // Female, en-GB, Google Cloud
  ];

  // Function to recursively extract text from an element and its children, excluding images
  const getAllText = (element: HTMLElement | null): string => {
    if (!element) return "";
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (
          !parent ||
          parent.tagName.toLowerCase() === "img" ||
          parent.closest("img") || // inside image wrapper
          parent.closest(".gatsby-image-wrapper") || // inside GatsbyImage
          parent.hasAttribute("aria-hidden") ||
          getComputedStyle(parent).display === "none" ||
          parent.classList.contains("bg-white") ||
          node.textContent?.trim() === ""
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let text = "";
    while (walker.nextNode()) {
      const nodeText = walker.currentNode.textContent?.trim();
      if (nodeText) {
        text += nodeText + " ";
      }
    }
    return text.trim();
  };

  // Check browser support and load voices
  useEffect(() => {
    if ("speechSynthesis" in window) {
      setIsSupported(true);
      const loadVoices = () => {
        const availableVoices: SpeechSynthesisVoice[] =
          window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          console.log(
            "Available voices:",
            availableVoices.map((v) => ({ name: v.name, lang: v.lang }))
          );
          setVoices(availableVoices);
          setIsVoicesLoaded(true); // Mark voices as loaded
        }
      };

      // Try loading voices immediately
      loadVoices();
      // Listen for voice changes
      window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
      };

      // Cleanup on unmount
      return () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      setIsSupported(false);
    }
  }, []);

  // Handle speech
  const speak = (): void => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      // Clear any existing highlights
      document.querySelectorAll(".highlight-word").forEach((span) => {
        const parent = span.parentNode;
        if (parent && span.textContent) {
          parent.replaceChild(document.createTextNode(span.textContent), span);
        }
      });
      return;
    }

    if (!isVoicesLoaded) {
      console.warn("Voices not loaded yet. Please wait and try again.");
      return;
    }

    requestAnimationFrame(() => {
      const container: HTMLElement | null =
        document.querySelector(textSelector);
      const text: string = getAllText(container);
      if (!text) {
        console.error("No text found for the given selector:", textSelector);
        return;
      }

      // Split text into words for tracking
      const words = text.split(/\s+/).filter((word) => word.length > 0);
      let charIndexToWordIndex: { charIndex: number; wordIndex: number }[] = [];
      let currentCharIndex = 0;

      // Map character indices to word indices
      words.forEach((word, index) => {
        charIndexToWordIndex.push({
          charIndex: currentCharIndex,
          wordIndex: index,
        });
        currentCharIndex += word.length + 1; // +1 for the space
      });

      const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
        text
      );
      utterance.volume = volume;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Select the first available voice from the preferred list
      let selectedVoice: SpeechSynthesisVoice | undefined = voices.find((v) =>
        preferredVoices.includes(v.name)
      );

      // Fallback to any en-GB or en-US voice if no preferred voice is found
      if (!selectedVoice) {
        console.warn(
          "No preferred female voice found. Falling back to en-GB or en-US voice."
        );
        selectedVoice = voices.find(
          (v) => v.lang === "en-GB" || v.lang === "en-US"
        );
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log(
          `Using voice: ${selectedVoice.name} (${selectedVoice.lang})`
        );
      } else {
        console.warn(
          "No en-GB or en-US voice found. Using browser default voice."
        );
      }

      // Function to find and highlight the current word
      const highlightWord = (index: number) => {
        if (!container || index < 0 || index >= words.length) return;

        // Clear previous highlight
        document.querySelectorAll(".highlight-word").forEach((span) => {
          const parent = span.parentNode;
          if (parent && span.textContent) {
            parent.replaceChild(
              document.createTextNode(span.textContent),
              span
            );
          }
        });

        const walker = document.createTreeWalker(
          container,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) =>
              node.parentElement?.tagName.toLowerCase() !== "img" &&
              !node.parentElement?.classList.contains("bg-white") &&
              !node.parentElement?.closest(".gatsby-image-wrapper")
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT,
          }
        );

        let currentWordCount = 0;
        let found = false;

        while (walker.nextNode() && !found) {
          const node = walker.currentNode as Text;
          const nodeText = node.textContent || "";
          const wordsInNode = nodeText.match(/\S+/g) || [];

          for (let i = 0; i < wordsInNode.length; i++) {
            if (currentWordCount === index) {
              const word = wordsInNode[i];
              const wordStart = nodeText.indexOf(word);
              const wordEnd = wordStart + word.length;

              if (wordStart >= 0) {
                const range = document.createRange();
                range.setStart(node, wordStart);
                range.setEnd(node, wordEnd);

                const span = document.createElement("span");
                span.className = "highlight-word";
                span.style.backgroundColor = "#d1d5db"; // optional: yellow highlight
                range.surroundContents(span);
                found = true;
                break;
              }
            }
            currentWordCount++;
          }
        }
      };

      // Word boundary highlighting
      utterance.onboundary = (event: SpeechSynthesisEvent) => {
        if (event.name === "word" && event.charIndex !== undefined) {
          // Find the closest word index based on charIndex
          const wordEntry = charIndexToWordIndex.reduce((prev, curr) =>
            curr.charIndex <= event.charIndex! &&
            curr.charIndex > prev.charIndex
              ? curr
              : prev
          );
          highlightWord(wordEntry.wordIndex);
        }
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        // Clear highlights
        document.querySelectorAll(".highlight-word").forEach((span) => {
          const parent = span.parentNode;
          if (parent && span.textContent) {
            parent.replaceChild(
              document.createTextNode(span.textContent),
              span
            );
          }
        });
      };
      utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
        console.error("Speech synthesis error:", e);
        setIsSpeaking(false);
        // Clear highlights
        document.querySelectorAll(".highlight-word").forEach((span) => {
          const parent = span.parentNode;
          if (parent && span.textContent) {
            parent.replaceChild(
              document.createTextNode(span.textContent),
              span
            );
          }
        });
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
      className={`p-2 rounded-md text-gray-500 dark:text-white ${
        isSpeaking ? "" : ""
      } transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50`}
      title={
        isSpeaking ? "Stop" : isVoicesLoaded ? "Speak" : "Loading voices..."
      }
    >
      {isSpeaking ? (
        <IconVolume className="w-5 h-5" />
      ) : (
        <IconVolumeOff className="w-5 h-5" />
      )}
    </button>
  );
};

export default TextToSpeech;
