import React from "react";
import style from "./CalculatorBoxes.module.scss";

const CalculatorButtons: React.FC = ({ children }) => {
  return (
    <div className={style.wrapper_buttons}>
      { children }
    </div>
  );
};

export { CalculatorButtons };
