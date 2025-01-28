import { ReactNode } from "react";
import { QUESTION_STEPS } from "./constants";
import { QuestionStepType } from "./types";

const convertStepToTitle = (step: QuestionStepType): ReactNode => {
  switch (step) {
    case QUESTION_STEPS.INTRO:
      return (
        <section>
          <p>안녕하세요!</p>
          <p>저는 당신의 목표를 이루는데 도움을 줄 Pomodori입니다.</p>
        </section>
      );
    case QUESTION_STEPS.NAME:
      return (
        <section>
          <p>이름이 뭐에요?</p>
        </section>
      );
    case QUESTION_STEPS.GOAL:
      return (
        <section>
          <p>목표가 있으세요?</p>
        </section>
      );
    default:
      return (
        <section>
          <p>지금 잘하고 있어요!</p>
          <p>앞으로도 계속해봐요.</p>
        </section>
      );
  }
};

export { convertStepToTitle };
