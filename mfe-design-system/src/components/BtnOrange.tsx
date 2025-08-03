/* eslint-disable @typescript-eslint/no-explicit-any */
import "./style.css";

interface ButtonProps {
  title: string;
  click?: (event?: any) => void;
  variant: "default" | "modal";
}

export default function Button({ title, click, variant }: ButtonProps) {
  return (
    <button
      onClick={(event) => click?.(event)}
      className={variant === "default" ? "btn-orange" : "btn-orange-small"}
    >
      {title}
    </button>
  );
}
