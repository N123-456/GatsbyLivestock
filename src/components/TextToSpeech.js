import React, { useState, useEffect } from "react";
import { IconVolume, IconX } from "@tabler/icons-react"; // Using correct Tabler Icons

const TextToSpeech = ({ textSelector }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  // Fixed settings as requested
  const volume = 1;
  const rate = 0.7;
  const pitch = 0;
  const selectedVoice = "Microsoft George - English (United Kingdom)";

  // Function to recursively extract text from an element and its children, excluding images
  const getAllText = (element) => {
    if (!element) return "";
    let text = "";
    element.childNodes.forEach((node) => {
      // Skip images and their alt text
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
        setVoices(availableVoices);
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;

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

    // Wait for DOM to be fully rendered
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

      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
      } else {
        console.warn(
          `Voice "${selectedVoice}" not found. Using default voice.`
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
      disabled={!isSupported}
      className={`p-2 rounded-md text-black ${
        isSpeaking
          ? ""
          : ""
      } lg:pl-10 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      title={isSpeaking ? "Stop" : "Speak"}
    >
      {isSpeaking ? (
        <IconX className="w-5 h-5" />
      ) : (
        <IconVolume className="w-5 h-5" />
      )}
    </button>
  );
};

export default TextToSpeech;
