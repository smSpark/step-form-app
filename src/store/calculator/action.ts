import { GetCalcResultResponse } from "../../api/types";
import { BuildsEnum, CalculatorActionTypes, MaterialEnum } from "./types";

export const resetCalculatorAction = () => ({
  type: CalculatorActionTypes.RESET_CALCULATOR,
} as const);

export interface SetWallSizeProps {
  xSize: string,
  ySize: string,
}

export const setWallSizeAction = (sizes: SetWallSizeProps) => ({
  type: CalculatorActionTypes.SET_WALL_SIZE,
  payload: sizes,
} as const);

export const setBuildTypeAction = (buildType: BuildsEnum) => ({
  type: CalculatorActionTypes.SET_BUILD_TYPE,
  payload: buildType,
} as const);

export const setMaterialAction = (materialType: MaterialEnum) => ({
  type: CalculatorActionTypes.SET_MATERIAL,
  payload: materialType,
} as const);

export const setHeightAction = (height: string) => ({
  type: CalculatorActionTypes.SET_HEIGHT,
  payload: height,
} as const);

export const setResult = (result: GetCalcResultResponse) => ({
  type: CalculatorActionTypes.SET_RESULT,
  payload: result,
} as const);
