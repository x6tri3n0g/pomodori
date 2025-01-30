import { ReactNode } from "react";
import { Title } from "./QuestionContent/Title";
import { QUESTION_STEPS } from "./constants";
import type { QuestionStepType } from "./types";

interface Props {
  step: QuestionStepType;
  contents: ReactNode;
  handleClickNext: () => void;
}

const QuestionStep = ({ step, contents, handleClickNext }: Props) => {
  const stepLength = Object.keys(QUESTION_STEPS).length;

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <div className="flex space-between">
        <Title step={step} />
        <span className="w-[100px] text-black-500">{`${step} / ${stepLength}`}</span>
      </div>
      {contents}
      <footer className="flex flex-end">
        <button type="button" onClick={handleClickNext}>
          Next
        </button>
      </footer>
    </div>
  );
};

export default QuestionStep;
