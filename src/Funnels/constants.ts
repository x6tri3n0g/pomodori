const QUESTION_STEPS = {
  INTRO: 1,
  NAME: 2,
  GOAL: 3,
  FINISH: 4,
};

const TEXT_VALUE_TYPE = {
  TITLE: "title",
  CAPTION: "caption",
  TEXT: "text",
} as const;

export { QUESTION_STEPS, TEXT_VALUE_TYPE };
