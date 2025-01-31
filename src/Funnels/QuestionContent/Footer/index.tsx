interface Props {
  handleNext: () => void;
}

function QuestionContentFooter({ handleNext }: Props) {
  return (
    <footer className="flex flex-end">
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </footer>
  );
}

export default QuestionContentFooter;
