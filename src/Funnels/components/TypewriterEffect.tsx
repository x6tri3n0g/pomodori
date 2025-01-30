import { useState, useEffect } from "react";
import { TextItem } from "../QuestionContent/Title/types";

interface Props {
  textList: TextItem[];
  typeSpeed?: number;
  delaySpeed?: number;
}

function TypewriterEffect({
  textList,
  typeSpeed = 100,
  delaySpeed = 2000,
}: Props) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const currentStep = textList[currentStepIndex] ?? [];

  useEffect(() => {
    if (charIndex < currentStep[currentTextIndex]?.text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(
          (prev) => prev + currentStep[currentTextIndex]?.text[charIndex]
        );
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else {
      // 문장 출력이 끝나면 다음으로 이동
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        if (currentTextIndex < currentStep.length - 1) {
          setCurrentTextIndex((prev) => prev + 1);
        } else if (currentStepIndex < textList.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
          setCurrentTextIndex(0);
        }
      }, delaySpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTextIndex, currentStepIndex]);

  return (
    <h1 className="text-2xl font-mono text-gray-900">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
}

export default TypewriterEffect;
