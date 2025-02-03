import { QuestionStepType } from "./types";

const QUESTION_STEPS = {
  INTRO: "INTRO",
  NAME: "NAME",
  GOAL: "GOAL",
  FINISH: "FINISH",
} as const;

const TEXT_VALUE_TYPE = {
  TITLE: "title",
  CAPTION: "caption",
  TEXT: "text",
} as const;

interface Content {
  title: string;
  handleNext?: () => void;
}

const QUESTION_STEP_LIST = Object.keys(QUESTION_STEPS) as QuestionStepType[];

const CONTENT_BY_STEP: Record<QuestionStepType, Content> = {
  [QUESTION_STEPS.INTRO]: {
    title: "안녕하세요.\n저는 당신의 목표를 이루는데 도움을 줄 Pomodori입니다.",
  },
  [QUESTION_STEPS.NAME]: {
    title: "이름이 어떻게되세요?",
  },
  [QUESTION_STEPS.GOAL]: {
    title: "목표가 있으실까요?\n되도록 큰 범위의 목표를 생각해보세요.",
  },
  [QUESTION_STEPS.FINISH]: {
    title: "지금 잘하고 있어요!\n앞으로도 계속해봐요.",
  },
};

export { QUESTION_STEPS, TEXT_VALUE_TYPE, QUESTION_STEP_LIST, CONTENT_BY_STEP };
