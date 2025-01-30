import { QUESTION_STEPS, TEXT_VALUE_TYPE } from "./constants";

type QuestionStepType = (typeof QUESTION_STEPS)[keyof typeof QUESTION_STEPS];

type TextValueType = (typeof TEXT_VALUE_TYPE)[keyof typeof TEXT_VALUE_TYPE];

export type { QuestionStepType, TextValueType };
