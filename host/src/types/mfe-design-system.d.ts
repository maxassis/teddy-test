declare module "mfe-design-system/components/BtnOrange" {
  import * as React from "react";

  interface ButtonProps {
    title: string;
    click?: (event?: any) => void;
    className?: string;
    variant?: "default" | "modal";
  }

  const BtnOrange: React.FC<ButtonProps>;
  export default BtnOrange;
}
