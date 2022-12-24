import { all, fork } from "redux-saga/effects";

import photoSaga from "./photo/sagas";

export function* rootSaga() {
  yield all([fork(photoSaga)]);
}
