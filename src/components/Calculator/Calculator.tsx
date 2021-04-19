import React from "react";
import { useSelector } from "react-redux";
import { getCurrentStep } from "../../store/calculator/selectors";
import { CalculatorSteps } from "../CalculatorSteps/CalculatorSteps";
import style from "./Calculator.module.scss";

const Calculator: React.FC = () => {
  const currentStep = useSelector(getCurrentStep);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Калькулятор цены конструкций</h2>
      <CalculatorSteps step={currentStep} />
    </div>
  );
};

export { Calculator };
