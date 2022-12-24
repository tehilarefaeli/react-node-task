import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.photo.pending;

const getPhotos = (state: AppState) => state.photo.photos;

const getError = (state: AppState) => state.photo.error;

export const getPhotosSelector = createSelector(getPhotos, (photos) => photos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
