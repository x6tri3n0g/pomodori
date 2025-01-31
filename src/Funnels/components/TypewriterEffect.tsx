import { useState, useEffect } from "react";

interface Props {
  text: string;
  typeSpeed?: number;
}

function TypewriterEffect({ text, typeSpeed = 100 }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text, typeSpeed]);

  return (
    <p className="text-2xl font-mono text-gray-900 whitespace-pre-line">
      {displayText}
      <span className="animate-blink">|</span>
    </p>
  );
}

export default TypewriterEffect;
