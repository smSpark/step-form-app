import { GetCalcResultResponse } from "../../api/types";
import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export enum CalculatorActionTypes {
  RESET_CALCULATOR = "@calculator/RESET_CALCULATOR",
  ALL_SETS = "@calculator/SET_*",
  SET_RESULT = "@calculator/SHOW_RESULT",
  SET_WALL_SIZE = "@calculator/SET_WALL_SIZE",
  SET_BUILD_TYPE = "@calculator/SET_BUILD_TYPE",
  SET_MATERIAL = "@calculator/SET_MATERIAL",
  SET_HEIGHT = "@calculator/SET_HEIGHT",
}

export enum CalculatorPagesEnum {
  BUILD = "BUILD",
  HEIGHT = "HEIGHT",
  MATERIAL = "MATERIAL",
  SIZE = "SIZE",
  RESULT = "RESULT",
}

export enum BuildsEnum {
  HOUSE = "1",
  GARAGE = "2",
}

export enum MaterialEnum {
  BRICK = "1",
  CINDER_BLOCK = "2",
  WOODEN_BEAM = "3",
  METAL = "4",
  SANDWICH_PANEL = "5",
}

interface CalcultorDataType {
  [key: string]: string | null,
}
export interface CalculatorData extends CalcultorDataType {
  readonly building: BuildsEnum | null,
  readonly height: string | null,
  readonly material: MaterialEnum | null,
  readonly sizex: string | null,
  readonly sizey: string | null,
}

export interface CalculatorInitialState {
  readonly step: number,
  readonly currentStep: CalculatorPagesEnum,
  readonly result: GetCalcResultResponse | null,
  readonly data: CalculatorData;
}

export type CalculatorActions = ReturnType<InferValueTypes<typeof actions>>;
