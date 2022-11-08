import { combineReducers } from "redux";

import { objectReducer } from './object';
import { photoReducer } from './photo';

export const rootReducer = combineReducers({
  object: objectReducer,
  photo: photoReducer,
});