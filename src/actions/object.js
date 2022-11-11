import { createAction } from "redux-actions";
import axios from "axios";

export const load = createAction('[Object] load');
export const newValue = createAction('[Object] newValue');
export const loader = createAction('[Object] loader');
export const form = createAction('[Object] form');
export const step = createAction('[Object] step');
export const address = createAction('[Object] address');
export const addRemovePhoto = createAction('[Object] addRemovePhoto');

export function requestServer() {
  return async function (dispatch) {
    try {
      const res = await axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix');
      dispatch(load());
      dispatch(loader());
    } catch {
      console.log('catch');
    } finally {
      console.log('finaly');
    }
  }
}
export function finalStep(raw) {
  console.log(raw);
  return async function (dispatch) {
    dispatch(loader())
    try {
      const res = await axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix');
      dispatch(step('access'))
    } catch {
      dispatch(step('error'))
    } finally {
      dispatch(loader());
    }
  }
}
