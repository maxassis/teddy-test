import "./styles.css";

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
