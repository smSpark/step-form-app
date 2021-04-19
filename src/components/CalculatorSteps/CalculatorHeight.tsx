import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeightAction } from "../../store/calculator/action";
import { CalculatorActions } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWrappers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWrappers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWrappers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { Input } from "../Input/Input";

const CalculatorHeight: React.FC = () => {
  const [height, setHeight] = useState<string>("0");
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();

  const pushHeight = () => {
    dispatch(setHeightAction(height));
  };

  return (
    <CalculatorWrapper>
      <CalculatorBox title="Количество этажей(число):" align="center">
        <Input value={height} onChange={setHeight} />
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={pushHeight}>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorHeight };
