// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   placeholder?: string;
//   variant?: "default" | "modal";
// }

// export default function Input({
//   placeholder = "",
//   variant = "default",
//   className,
//   ...props
// }: InputProps) {
//   const baseClasses =
//     "w-full border-[2px] border-teddy-gray pl-5 placeholder:text-teddy-placeholder rounded-[4px]";

//   const variantClasses = {
//     default: "h-[60px]",
//     modal: "h-[40px] mb-[15px] placeholder:text-sm",
//   };

//   const inputClasses = `${baseClasses} ${variantClasses[variant]} ${
//     className || ""
//   }`;

//   return (
//     <input
//       style={{ paddingLeft: "10px" }}
//       placeholder={placeholder}
//       className={inputClasses}
//       {...props}
//     />
//   );
// }

import "./style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  variant?: "default" | "modal";
}

export default function Input({
  placeholder = "",
  variant = "default",
  className = "",
  ...props
}: InputProps) {
  const variantClass = variant === "modal" ? "input-modal" : "input-default";
  const inputClasses = `input-base ${variantClass} ${className}`.trim();

  return (
    <input
      style={{ paddingLeft: "10px" }}
      placeholder={placeholder}
      className={inputClasses}
      {...props}
    />
  );
}
