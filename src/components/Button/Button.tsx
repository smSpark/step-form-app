import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void,
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button type="button" onClick={onClick} className={`${style.common_button} ${className}`}>
      {children}
    </button>
  );
};

export { Button };
