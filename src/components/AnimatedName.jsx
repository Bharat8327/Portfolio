import React, { useState, useEffect } from 'react';

const AnimatedName = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const words = [
    "Bharat Patel",
    "Web Developer",
    "Software Engineer", 
    "Frontend Specialist",
    "React Expert"
  ];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const intervalSpeed = 150; // Speed of animation

    const interval = setInterval(() => {
      if (!isReversed) {
        // Left to right animation
        if (currentLetterIndex < currentWord.length) {
          setDisplayedText(currentWord.slice(0, currentLetterIndex + 1));
          setCurrentLetterIndex(prev => prev + 1);
        } else {
          // Word complete, wait then start reverse
          setTimeout(() => {
            setIsReversed(true);
          }, 1000);
        }
      } else {
        // Right to left animation (clearing)
        if (currentLetterIndex > 0) {
          setDisplayedText(currentWord.slice(0, currentLetterIndex - 1));
          setCurrentLetterIndex(prev => prev - 1);
        } else {
          // Word cleared, move to next word
          setIsReversed(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      }
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [currentWordIndex, currentLetterIndex, isReversed, words]);

  return (
      <div>
        {/* Changed text size to be smaller on all screens */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold items-start text-white tracking-wider text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {displayedText}
          </span>
          <span className="animate-pulse text-white">|</span>
        </h1>
      </div>
  );
};

export default AnimatedName;