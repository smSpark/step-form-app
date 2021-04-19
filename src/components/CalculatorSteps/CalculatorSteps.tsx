import React from "react";
import { CalculatorPagesEnum } from "../../store/calculator/types";
import { CalculatorBuild } from "./CalculatorBuild";
import { CalculatorHeight } from "./CalculatorHeight";
import { CalculatorMaterial } from "./CalculatorMaterial";
import { CalculatorResult } from "./CalculatorResult";
import { CalculatorSize } from "./CalculatorSize";

interface CalculatorStepsProps {
  step: CalculatorPagesEnum
}

const CalculatorSteps: React.FC<CalculatorStepsProps> = ({ step }) => {
  switch (step) {
    case CalculatorPagesEnum.BUILD:
      return <CalculatorBuild />;
    case CalculatorPagesEnum.HEIGHT:
      return <CalculatorHeight />;
    case CalculatorPagesEnum.MATERIAL:
      return <CalculatorMaterial />;
    case CalculatorPagesEnum.SIZE:
      return <CalculatorSize />;
    case CalculatorPagesEnum.RESULT:
      return <CalculatorResult />;
    default:
      return null;
  }
};

export { CalculatorSteps };
