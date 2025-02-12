interface ButtonDateProps {
  date: string;
}

const ButtonDate = ({ date }: ButtonDateProps) => {
  return (
    <>
      <button className="px-6 py-2 bg-white/10 rounded-xl">{date}</button>
    </>
  );
};

export default ButtonDate;
