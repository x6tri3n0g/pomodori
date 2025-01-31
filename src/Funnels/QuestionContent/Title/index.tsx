import TypewriterEffect from "../../components/TypewriterEffect";

interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <div className="inline-flex flex-col flex-1">
      <TypewriterEffect text={text} />
    </div>
  );
};

export { Title };
