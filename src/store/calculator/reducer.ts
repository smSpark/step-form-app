import {
  CalculatorActions,
  CalculatorActionTypes,
  CalculatorInitialState,
  CalculatorPagesEnum,
  BuildsEnum,
} from "./types";

const initialState: CalculatorInitialState = {
  step: 1,
  currentStep: CalculatorPagesEnum.BUILD,
  result: null,
  data: {
    building: null,
    height: null,
    material: null,
    sizex: null,
    sizey: null,
  },
};

export const calculatorReducer = (
  state = initialState,
  action: CalculatorActions,
): CalculatorInitialState => {
  switch (action.type) {
    case CalculatorActionTypes.RESET_CALCULATOR:
      return initialState;
    case CalculatorActionTypes.SET_BUILD_TYPE:
      return {
        ...state,
        data: { ...state.data, building: action.payload },
        step: state.step + 1,
        currentStep:
          action.payload === BuildsEnum.HOUSE
            ? CalculatorPagesEnum.HEIGHT
            : CalculatorPagesEnum.MATERIAL,
      };
    case CalculatorActionTypes.SET_HEIGHT:
      return {
        ...state,
        step: state.step + 1,
        data: { ...state.data, height: action.payload },
        currentStep: CalculatorPagesEnum.MATERIAL,
      };
    case CalculatorActionTypes.SET_MATERIAL:
      return {
        ...state,
        step: state.step + 1,
        data: { ...state.data, material: action.payload },
        currentStep: CalculatorPagesEnum.SIZE,
      };
    case CalculatorActionTypes.SET_WALL_SIZE:
      return {
        ...state,
        data: { ...state.data, sizex: action.payload.xSize, sizey: action.payload.ySize },
      };
    case CalculatorActionTypes.SET_RESULT:
      return { ...state, currentStep: CalculatorPagesEnum.RESULT, result: action.payload };
    default:
      return state;
  }
};
