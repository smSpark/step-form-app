import React from "react";
import style from "./LinkButton.module.scss";

interface LinkButtonProps {
  className?: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${style.link_button} ${className}`}
    >
      {`\u2022 ${children}`}
    </button>
  );
};

export { LinkButton };
