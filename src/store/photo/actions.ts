import {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_FAILURE,
  FETCH_PHOTO_SUCCESS,
} from "./actionTypes";
import {
  FetchPhotoRequest,
  FetchPhotoSuccess,
  FetchPhotoSuccessPayload,
  FetchPhotoFailure,
  FetchPhotoFailurePayload,
} from "./types";

export const fetchPhotoRequest = (): FetchPhotoRequest => ({
  type: FETCH_PHOTO_REQUEST,
});

export const fetchPhotoSuccess = (
  payload: FetchPhotoSuccessPayload
): FetchPhotoSuccess => ({
  type: FETCH_PHOTO_SUCCESS,
  payload,
});

export const fetchPhotoFailure = (
  payload: FetchPhotoFailurePayload
): FetchPhotoFailure => ({
  type: FETCH_PHOTO_FAILURE,
  payload,
});
