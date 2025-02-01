import { useMemo, useState } from "react";
import {
  CONTENT_BY_STEP,
  QUESTION_STEP_LIST,
  QUESTION_STEPS,
} from "./constants";
import { Title } from "./QuestionContent/Title";
import QuestionContentFooter from "./QuestionContent/Footer";
// import { SubmitHandler, useForm } from "react-hook-form";

// interface Inputs {
//   name: string;
//   goal: string;
// }

const RegisterQuestion = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);

  const currentStep = QUESTION_STEP_LIST[stepIndex];
  const currentContent = useMemo(
    () =>
      CONTENT_BY_STEP[currentStep] ?? CONTENT_BY_STEP[QUESTION_STEPS.FINISH],
    [currentStep]
  );
  const stepLength = Object.keys(QUESTION_STEPS).length;
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm<Inputs>();

  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col flex-1 space-between p-6">
      <div className="flex space-between w-full">
        <Title text={currentContent.title} />
        <span className="shrink-[50px] text-gray-500">{`${stepIndex} / ${stepLength}`}</span>
      </div>
      <div className="flex flex-1 shrink-0">there is content</div>
      <QuestionContentFooter
        handleNext={() => setStepIndex((prev) => prev + 1)}
      />
    </div>
  );
};

export default RegisterQuestion;
