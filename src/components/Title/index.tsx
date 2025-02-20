interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <div className="mb-2 flex items-center">
        <div
          className="w-6 h-6 bg-yellow-500"
          style={{
            clipPath: "polygon(25% 0%, 50% 0%, 80% 50%, 50% 100%, 25% 100%)",
          }}
        ></div>
        <span className="font-semibold tracking-wide text-xl">{title}</span>
      </div>
    </>
  );
};

export default Title;
