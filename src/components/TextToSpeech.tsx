import React, { useState, useEffect, useRef } from "react";
import { IconVolume, IconVolumeOff, IconLoader2 } from "@tabler/icons-react";

export const TextToSpeech = ({ textSelector = "acu" }: { textSelector: string; }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const findWordStart = (text: string, index: number): number => {
    while (index > 0 && /\S/.test(text[index - 1])) {
      index--;
    }
    return index;
  };

  const findWordEnd = (text: string, index: number): number => {
    while (index < text.length && /\S/.test(text[index])) {
      index++;
    }
    return index;
  };

  const highlightWord = (charIndex: number) => {
    const container = document.getElementById(textSelector);
    if (!container) return;

    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null
    );
    let currentIndex = 0;

    clearHighlight();

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.nodeValue || "";
      const nextIndex = currentIndex + text.length;

      if (charIndex >= currentIndex && charIndex < nextIndex) {
        const relativeIndex = charIndex - currentIndex;

        // Now: find full word boundaries that surround relativeIndex
        const wordStart = findWordStart(text, relativeIndex);
        const wordEnd = findWordEnd(text, relativeIndex);
        const before = text.slice(0, wordStart);
        const word = text.slice(wordStart, wordEnd);
        const after = text.slice(wordEnd);

        const span = document.createElement("span");
        span.textContent = word;
        span.style.backgroundColor = "#d3d3d3";
        highlightRef.current = span;

        const frag = document.createDocumentFragment();
        if (before) frag.appendChild(document.createTextNode(before));
        frag.appendChild(span);
        if (after) frag.appendChild(document.createTextNode(after));

        node.parentNode?.replaceChild(frag, node);
        break;
      }

      currentIndex = nextIndex;
    }
  };

  const clearHighlight = () => {
    if (highlightRef.current) {
      const parent = highlightRef.current.parentNode;
      if (parent) {
        parent.replaceChild(
          document.createTextNode(highlightRef.current.textContent || ""),
          highlightRef.current
        );
        highlightRef.current = null;
      }
    }
  };

  const speak = () => {
    const container = document.getElementById(textSelector);
    if (!container) return;

    const text = container.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    const selectedVoice = voices.find(
      (v) => v.name === "Microsoft Zira - English (United States)"
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      // console.log(Using voice: ${selectedVoice.name} (${selectedVoice.lang}));
    } else {
      console.warn(
        "Microsoft Zira voice not found. Using browser default voice."
      );
    }

    utterance.onstart = () => setIsSpeaking(true);

    utterance.onend = () => {
      setIsSpeaking(false);
      clearHighlight();
    };

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        highlightWord(event.charIndex);
      }
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    clearHighlight();
  };

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      console.log(
        "Voices:",
        voices.map((v) => v.name)
      );
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  useEffect(() => {
    speechSynthesis.cancel();
  }, []);

  return (
    <button
      onClick={isSpeaking ? stop : speak}
      aria-label={isSpeaking ? "Pause" : "Play"}
      className={`p-2 rounded-md text-gray-500 ${
        isSpeaking ? "text-blue-500" : ""
      } transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {isSpeaking ? <IconVolumeOff className="w-5 h-5"/> : <IconVolume className="w-5 h-5" />}
    </button>
  );
};
export default TextToSpeech;