import { createAction } from "redux-actions";
import { loader } from 'actions/object';

export const setPhoto = createAction('[Object] setPhoto');
export const selectPhoto = createAction('[Object] selectPhoto');

import axios from "axios";

export function loadPhoto() {
  return function (dispatch) {
    dispatch(loader());
    try {
      const res = axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix');
      dispatch(setPhoto());
    } catch {
      console.log('catch');
    } finally {
      dispatch(loader());
      console.log('finaly');
    }
  }
}
