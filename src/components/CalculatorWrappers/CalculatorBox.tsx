import React from "react";
import style from "./CalculatorBoxes.module.scss";

interface CalculatorBoxProps {
  align?: "left" | "center" | "right",
  title: string,
}

const CalculatorBox: React.FC<CalculatorBoxProps> = ({ children, align, title }) => {
  return (
    <div className={style.wrapper_template}>
      <div className={style.title}>{title}</div>
      <div className={`${style.content} ${align && style[align]}`}>
        {children}
      </div>
    </div>
  );
};

export { CalculatorBox };
