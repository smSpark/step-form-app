import { combineReducers } from "redux";
import { calculatorReducer } from "./calculator/reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export { rootReducer };
