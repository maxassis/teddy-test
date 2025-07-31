import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      placeholder="Digite o seu nome:"
      className={twMerge(
        "w-full h-[60px] border-[2px] border-teddy-gray pl-5 placeholder:text-2xl rounded-[4px]",
        className
      )}
      {...props}
    />
  );
}
