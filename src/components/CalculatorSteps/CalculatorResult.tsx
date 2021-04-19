import React from "react";
import { useSelector } from "react-redux";
import { CalculatorBox } from "../CalculatorWrappers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWrappers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWrappers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { getResult } from "../../store/calculator/selectors";
import { parseResult } from "../../helpers/parseResult";
import style from "./CalculatorSteps.module.scss";

const CalculatorResult: React.FC = () => {
  const result = useSelector(getResult);
  const parsedResult = parseResult(result);

  return (
    <CalculatorWrapper stepTitle="Результат рассчета">
      <CalculatorBox title={parsedResult.status} align="center">
        <p
          className={`${style.result_message} ${
            parsedResult.status === "Ошибка" ? style.result_message_error : ""
          } `}
        >
          {parsedResult.message}
        </p>
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Новый расчет</CancelButton>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorResult };
