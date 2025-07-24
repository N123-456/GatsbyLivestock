import React, { useState, useEffect } from 'react';

const TextToSpeech = ({ textSelector }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  // Function to recursively extract text from an element and its children, excluding images
  const getAllText = (element) => {
    if (!element) return '';
    let text = '';
    element.childNodes.forEach((node) => {
      // Skip the TTS component itself to avoid reading its labels
      if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('tts-container')) {
        return;
      }
      // Skip images and their alt text
      if (node.nodeType === Node.ELEMENT_NODE && (node.tagName.toLowerCase() === 'img' || node.classList.contains('bg-white'))) {
        return;
      }
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent.trim() + ' ';
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        text += getAllText(node);
      }
    });
    return text.trim();
  };

  // Check browser support and load voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0].name); // Default to first voice
        }
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
        console.error('No text found for the given selector:', textSelector);
        return;
      }
      console.log('Text to be read:', text); // Debug the extracted text

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.volume = parseFloat(volume);
      utterance.rate = parseFloat(rate);
      utterance.pitch = parseFloat(pitch);

      if (selectedVoice) {
        utterance.voice = voices.find((voice) => voice.name === selectedVoice);
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (e) => {
        console.error('Speech synthesis error:', e);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    });
  };

  return (
    <div className="tts-container  max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500 mb-6">
      <h3 className="text-lg font-semibold mb-4">Text-to-Speech</h3>
      {/* <div id="msg" className="text-sm mb-4">
        {isSupported ? (
          <span>
            Your browser <strong>supports</strong> speech synthesis.
          </span>
        ) : (
          <span className="text-red-600">
            Sorry, your browser <strong>does not support</strong> speech synthesis. Try this in{' '}
            <a
              href="https://www.google.com/chrome/"
              className="text-blue-500 underline"
            >
              Google Chrome
            </a>.
          </span>
        )}
      </div> */}
      {isSupported && (
        <>
          <div className="mb-4">
            <label htmlFor="voice" className="block text-sm font-medium text-gray-700 mb-1">
              Voice
            </label>
            <select
              id="voice"
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              disabled={isSpeaking}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
              Volume: {volume}
            </label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              disabled={isSpeaking}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
              Rate: {rate}
            </label>
            <input
              id="rate"
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              disabled={isSpeaking}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 mb-1">
              Pitch: {pitch}
            </label>
            <input
              id="pitch"
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              disabled={isSpeaking}
              className="w-full"
            />
          </div>
          <button
            id="speak"
            onClick={speak}
            disabled={!isSupported}
            className={`w-full py-2 px-4 rounded-md text-white font-bold ${
              isSpeaking
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            } transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            {isSpeaking ? 'Stop' : 'Speak'}
          </button>
        </>
      )}
    </div>
  );
};

export default TextToSpeech;