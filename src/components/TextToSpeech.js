import React, { useState, useEffect } from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

const TextToSpeech = ({ textSelector }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [isVoicesLoaded, setIsVoicesLoaded] = useState(false);

  // Fixed settings
  const volume = 1;
  const rate = 0.75;
  const pitch = 0;

  // Hardcoded list of preferred female voices in order of priority
  const preferredVoices = [
    "Microsoft Hazel - English (United Kingdom)", // Female, en-GB, Windows
    // Female, en-GB, Google Cloud
  ];

  // Function to recursively extract text from an element and its children, excluding images
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
    if ("speechSynthesis" in window) {
      setIsSupported(true);
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
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
  const speak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!isVoicesLoaded) {
      console.warn("Voices not loaded yet. Please wait and try again.");
      return;
    }

    requestAnimationFrame(() => {
      const container = document.querySelector(textSelector);
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

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (e) => {
        console.error("Speech synthesis error:", e);
        setIsSpeaking(false);
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
      className={`p-2 rounded-md text-gray-500 ${
        isSpeaking ? "" : ""
      } transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50`}
      title={
        isSpeaking ? "Stop" : isVoicesLoaded ? "Speak" : "Loading voices..."
      }
    >
      {isSpeaking ? (
        <IconVolumeOff className="w-5 h-5" />
      ) : (
        <IconVolume className="w-5 h-5" />
      )}
    </button>
  );
};

export default TextToSpeech;
