
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterEffect = ({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 1500 
}: TypewriterEffectProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, wordIndex, delta]);

  const tick = () => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;
    
    // Set the text based on whether we are deleting or typing
    setText(prev => {
      if (shouldDelete) {
        return prev.substring(0, prev.length - 1);
      } else {
        return currentWord.substring(0, prev.length + 1);
      }
    });

    // Set the typing speed
    if (shouldDelete) {
      setDelta(deletingSpeed);
    } else {
      setDelta(typingSpeed);
    }

    // If we've typed the full word and not deleting, set to delete after pause
    if (!shouldDelete && text === currentWord) {
      setTimeout(() => {
        setIsDeleting(true);
        setDelta(deletingSpeed);
      }, pauseDuration);
    }
    
    // If we've deleted the word, move to the next word or back to the first
    if (shouldDelete && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setDelta(500); // Pause slightly before starting next word
    }
  };

  return (
    <span className="pc">
      {text}
      <span className="inline-block w-1 pb ml-1 h-[1em] animate-blink"></span>
    </span>
  );
};

export default TypewriterEffect;
