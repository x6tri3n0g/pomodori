import { QUESTION_STEPS } from "./constants";

type QuestionStepType = (typeof QUESTION_STEPS)[keyof typeof QUESTION_STEPS];

export type { QuestionStepType };
