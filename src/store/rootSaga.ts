import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { watchCompleteFillData } from "./calculator/saga";

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([watchCompleteFillData()]);
}
