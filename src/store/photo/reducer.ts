import {
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE,
} from "./actionTypes";

import { PhotoActions, PhotoState } from "./types";

const initialState: PhotoState = {
  pending: false,
  photos: [],
  error: null,
};

const reducer = (state = initialState, action: PhotoActions) => {
  switch (action.type) {
    case FETCH_PHOTO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        pending: false,
        photos: action.payload.photos,
        error: null,
      };
    case FETCH_PHOTO_FAILURE:
      return {
        ...state,
        pending: false,
        photos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
