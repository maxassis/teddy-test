/* eslint-disable @typescript-eslint/no-explicit-any */

interface ButtonProps {
  title: string;
  click?: (event?: any) => void;
  className?: string;
}

export default function BtnOrange({ title, click }: ButtonProps) {
  return (
    <button
      onClick={(event) => click?.(event)}
      className="bg-teddy-orange hover:bg-orange-500 w-full h-[60px] text-white font-bold text-xl md:text-2xl rounded-[4px] cursor-pointer transition duration-200"
    >
      {title}
    </button>
  );
}
