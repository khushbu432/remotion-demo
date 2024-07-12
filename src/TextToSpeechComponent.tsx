import React, { useEffect, useState } from 'react';

const averageSpeakingRateWPM = 150; // Average words per minute
const msPerWord = 60000 / averageSpeakingRateWPM; // Milliseconds per word

const splitTextIntoParts = (text: string) => {
  const words = text.split(' ');
  const parts: { text: string; time: number }[] = [];
  let currentTime = 0;

  words.forEach((word, index) => {
    const part = { text: word, time: currentTime };
    parts.push(part);
    currentTime += msPerWord;
  });

  return parts;
};

const TextToSpeechComponent: React.FC<{ text: string }> = ({ text }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    const synthesizeSpeech = (text: string) => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';

      // Create a Blob URL for the speech
      utterance.onend = () => {
        const audioBlob = new Blob([utterance], { type: 'audio/mp3' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      synth.speak(utterance);
    };

    synthesizeSpeech(text);

    const parts = splitTextIntoParts(text);

    parts.forEach((part, index) => {
      setTimeout(() => {
        setDisplayedText((prev) => (prev ? `${prev} ${part.text}` : part.text));
      }, part.time);
    });
  }, [text]);

  return (
    <div>
      {audioUrl && <audio src={audioUrl} controls autoPlay />}
      <h4>{displayedText}</h4>
    </div>
  );
};

export default TextToSpeechComponent;
