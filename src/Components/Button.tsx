/* eslint-disable @typescript-eslint/no-explicit-any */
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  title: string;
  click?: (event?: any) => void;
  className?: string;
}

export default function Button({ title, click, className }: ButtonProps) {
  return (
    <button
      onClick={(event) => click?.(event)}
      className={twMerge(
        "bg-teddy-orange hover:bg-orange-500 w-full h-[60px] text-white font-bold text-xl md:text-2xl rounded-[4px] cursor-pointer transition duration-200",
        className
      )}
    >
      {title}
    </button>
  );
}
