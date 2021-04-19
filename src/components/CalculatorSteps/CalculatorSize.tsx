import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { setWallSizeAction } from "../../store/calculator/action";
import { CalculatorActions } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWrappers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWrappers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWrappers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { Input } from "../Input/Input";
import style from "./CalculatorSteps.module.scss";

const CalculatorSize: React.FC = () => {
  const [sizeX, setSizeX] = useState<string>("0");
  const [sizeY, setSizeY] = useState<string>("0");
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();

  const pushSizes = () => {
    dispatch(
      setWallSizeAction({
        xSize: sizeX,
        ySize: sizeY,
      }),
    );
  };

  return (
    <CalculatorWrapper>
      <CalculatorBox title="Длина стен (в метрах):" align="center">
        <div className={style.input_wrapper}>
          <Input value={sizeX} onChange={setSizeX} />
          <p className={style.input_divider}>X</p>
          <Input value={sizeY} onChange={setSizeY} />
        </div>
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={pushSizes}>Рассчитать</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorSize };
