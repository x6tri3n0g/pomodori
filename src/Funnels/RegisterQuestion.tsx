import { useState } from "react";
import { QUESTION_STEPS } from "./constants";
import { QuestionStepType } from "./types";
import QuestionStep from "./QuestionStep";
// import { SubmitHandler, useForm } from "react-hook-form";

// interface Inputs {
//   name: string;
//   goal: string;
// }

const RegisterQuestion = () => {
  const [step, setStep] = useState<QuestionStepType>(QUESTION_STEPS.INTRO);
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm<Inputs>();

  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <QuestionStep
      step={step}
      contents={<div>contents</div>}
      handleClickNext={() => setStep(QUESTION_STEPS.INTRO + 1)}
    />
  );
};

export default RegisterQuestion;
