import {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE,
} from "./actionTypes";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl:string
}

export interface PhotoState {
  pending: boolean;
  photos: Photo[];
  error: string | null;
}

export interface FetchPhotoSuccessPayload {
  photos: Photo[];
}

export interface FetchPhotoFailurePayload {
  error: string;
}

export interface FetchPhotoRequest {
  type: typeof FETCH_PHOTO_REQUEST;
}

export type FetchPhotoSuccess = {
  type: typeof FETCH_PHOTO_SUCCESS;
  payload: FetchPhotoSuccessPayload;
};

export type FetchPhotoFailure = {
  type: typeof FETCH_PHOTO_FAILURE;
  payload: FetchPhotoFailurePayload;
};

export type PhotoActions =
  | FetchPhotoRequest
  | FetchPhotoSuccess
  | FetchPhotoFailure;
