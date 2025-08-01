import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

export default function Input({
  className = "",
  placeholder = "",
  ...props
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={twMerge(
        "w-full h-[60px] border-[2px] border-teddy-gray pl-5 placeholder:text-teddy-placeholder placeholder:text-base md:placeholder:text-xl rounded-[4px]",
        className
      )}
      {...props}
    />
  );
}
