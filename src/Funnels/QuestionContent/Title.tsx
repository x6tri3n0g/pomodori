import TypewriterEffect from "../components/TypewriterEffect";
import { QUESTION_STEPS } from "../constants";
import { QuestionStepType } from "../types";
import { TITLE_BY_STEP } from "./Title/constants";

interface Props {
  step: QuestionStepType;
}

const Title = ({ step }: Props) => {
  const targetItemList =
    TITLE_BY_STEP[step] ?? TITLE_BY_STEP[QUESTION_STEPS.FINISH];

  return (
    <div className="inline-flex flex-col">
      <TypewriterEffect textList={targetItemList} />
    </div>
  );
};

export { Title };
