import { combineReducers } from "redux";

import { objectReducer } from './object';

export const rootReducer = combineReducers({
  object: objectReducer,
});