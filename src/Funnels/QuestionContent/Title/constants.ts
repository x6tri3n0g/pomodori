import { QUESTION_STEPS } from "../../constants";
import type { QuestionStepType } from "../../types";
import type { TextItem } from "./types";

const TITLE_BY_STEP: Record<QuestionStepType, TextItem> = {
  [QUESTION_STEPS.INTRO]: {
    type: "title",
    value: "안녕하세요!\n저는 당신의 목표를 이루는데 도움을 줄 Pomodori입니다.",
  },
  [QUESTION_STEPS.NAME]: {
    type: "title",
    value: "이름이 뭐에요?",
  },
  [QUESTION_STEPS.GOAL]: {
    type: "title",
    value: "목표가 있으세요?",
  },
  [QUESTION_STEPS.FINISH]: {
    type: "title",
    value: "지금 잘하고 있어요!\n앞으로도 계속해봐요.",
  },
};

export { TITLE_BY_STEP };
