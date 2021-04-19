import React from "react";
import { useSelector } from "react-redux";
import { getStepNumber } from "../../store/calculator/selectors";
import style from "./CalculatorBoxes.module.scss";

interface CalculatorWrapperProps {
  stepTitle?: string,
}

const CalculatorWrapper: React.FC<CalculatorWrapperProps> = ({ children, stepTitle }) => {
  const pageNumber = useSelector(getStepNumber);

  return (
    <div className={style.wrapper}>
      <p className={style.step}>{stepTitle || `Шаг ${pageNumber}`}</p>
      {children}
    </div>
  );
};

export { CalculatorWrapper };
