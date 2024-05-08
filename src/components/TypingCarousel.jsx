import { useState, useEffect } from 'react';

const TypingCarousel = ({ phrases }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentString.length < phrases[currentStringIndex].length) {
          setCurrentString(phrases[currentStringIndex].slice(0, currentString.length + 1));
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentString.length > 0) {
          setCurrentString(phrases[currentStringIndex].slice(0, currentString.length - 1));
        } else {
          setIsTyping(true);
          setCurrentStringIndex((currentStringIndex + 1) % phrases.length);
        }
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentStringIndex, currentString, isTyping, phrases]);

  return (
    <div className='text-xl font-mono'>
      <span>{currentString}</span>
      <span className={`${isTyping ? 'animate-ping' : ''}`}>|</span>
      <span className='sr-only' aria-live='polite' aria-atomic='true'>{phrases[currentStringIndex]}</span>
    </div>
  )
};

export default TypingCarousel;
