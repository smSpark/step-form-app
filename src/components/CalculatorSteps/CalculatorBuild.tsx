import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setBuildTypeAction } from "../../store/calculator/action";
import { BuildsEnum, CalculatorActions } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWrappers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWrappers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWrappers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { LinkButton } from "../LinkButton/LinkButton";

const CalculatorBuild: React.FC = () => {
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();
  return (
    <CalculatorWrapper>
      <CalculatorBox title="Что будем строить?" align="left">
        <LinkButton onClick={() => dispatch(setBuildTypeAction(BuildsEnum.HOUSE))}>
          Жилой дом
        </LinkButton>
        <LinkButton onClick={() => dispatch(setBuildTypeAction(BuildsEnum.GARAGE))}>
          Гараж
        </LinkButton>
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={() => dispatch(setBuildTypeAction(BuildsEnum.HOUSE))}>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorBuild };
