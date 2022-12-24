import { combineReducers } from "redux";

import todoReducer from "./photo/reducer";

const rootReducer = combineReducers({
  photo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
