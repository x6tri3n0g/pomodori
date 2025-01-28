import { ReactNode } from "react";
import { QUESTION_STEPS } from "./constants";
import { QuestionStepType } from "./types";
import { convertStepToTitle } from "./FunnelContents";

interface Props {
  step: QuestionStepType;
  contents: ReactNode;
  handleClickNext: () => void;
}

const Funnel = ({ step, contents, handleClickNext }: Props) => {
  const stepLength = Object.keys(QUESTION_STEPS).length;

  return (
    <div className="flex flex-col p-6">
      <div className="flex space-between">
        <h1>{convertStepToTitle(step)}</h1>
        <span>{`${step} / ${stepLength}`}</span>
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

export default Funnel;
