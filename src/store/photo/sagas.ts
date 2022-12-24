import axios, { AxiosResponse } from "axios";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import { fetchPhotoFailure, fetchPhotoSuccess } from "./actions";
import { FETCH_PHOTO_REQUEST } from "./actionTypes";
import { FetchPhotoFailure, FetchPhotoSuccess, Photo } from "./types";

const getPhotos = () =>
  axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?_limit=20");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchPhotoSaga(): Generator<
  | CallEffect<AxiosResponse<Photo[]>>
  | PutEffect<FetchPhotoSuccess>
  | PutEffect<FetchPhotoFailure>,
  void,
  any
> {
  try {
    const response = yield call(getPhotos);
    yield put(
      fetchPhotoSuccess({
        photos: response.data,
      })
    );
  } catch (e:any) {
    yield put(
      fetchPhotoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* photoSaga() {
  yield all([takeLatest(FETCH_PHOTO_REQUEST, fetchPhotoSaga)]);
}

export default photoSaga;
