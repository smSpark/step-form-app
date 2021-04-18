import {
  call, ForkEffect, put, select, takeEvery,
} from "redux-saga/effects";
import { Api } from "../../api/service";
import { buildQuery } from "../../helpers/buildQuery";
import { getBuildData } from "./selectors";
import { CalculatorActionTypes, CalculatorData } from "./types";
import { setResult } from "./action";
import { GetCalcResultResponse } from "../../api/types";

function* fetchDataResult() {
  try {
    const data: CalculatorData = yield select(getBuildData);
    const query: string = yield buildQuery<CalculatorData>(data);
    const response: GetCalcResultResponse = yield call(Api.getCalcResult, query);
    yield put(setResult(response));
  } catch (error) {
    console.log("error");
  }
}

export function* watchCompleteFillData(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(CalculatorActionTypes.SET_WALL_SIZE, fetchDataResult);
}
