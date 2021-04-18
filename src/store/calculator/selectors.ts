import { GetCalcResultResponse } from "../../api/types";
import { RootState } from "../../types/redux";
import { BuildsEnum, CalculatorData, CalculatorPagesEnum } from "./types";

export const getCurrentStep = (state: RootState): CalculatorPagesEnum => {
  return state.calculator.currentStep;
};

export const getStepNumber = (state: RootState): number => state.calculator.step;

export const getBuildType = (state: RootState): BuildsEnum | null => state.calculator.data.building;

export const getBuildData = (state: RootState): CalculatorData => state.calculator.data;

export const getResult = (state: RootState): GetCalcResultResponse | null => {
  return state.calculator.result;
};
