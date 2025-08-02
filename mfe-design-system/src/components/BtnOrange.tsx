/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProps {
  title: string;
  click?: (event?: any) => void;
  className?: string;
  variant?: "default" | "modal";
}

export default function BtnOrange({
  title,
  click,
  className,
  variant = "default",
}: ButtonProps) {
  const baseClasses =
    "bg-teddy-orange hover:bg-orange-500 w-full text-white font-bold rounded-[4px] cursor-pointer transition duration-200";

  const variantClasses = {
    default: "h-[60px] text-xl md:text-2xl",
    modal:
      "md:text-sm font-bold h-[40px] placeholder:text-sm md:placeholder:sm",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    className || ""
  }`;

  return (
    <button onClick={(event) => click?.(event)} className={buttonClasses}>
      {title}
    </button>
  );
}
