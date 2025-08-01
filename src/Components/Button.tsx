interface ButtonProps {
  title: string;
  click?: () => void;
}

export default function Button({ title, click }: ButtonProps) {
  return (
    <button
      onClick={click}
      className="bg-teddy-orange hover:bg-orange-500 w-full h-[60px] text-white font-bold text-xl md:text-2xl rounded-[4px] cursor-pointer transition duration-200"
    >
      {title}
    </button>
  );
}
