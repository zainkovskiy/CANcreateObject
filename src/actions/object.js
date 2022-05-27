import { createAction } from "redux-actions";

import axios from "axios";

export const load = createAction('[Object] load');
export const newValue = createAction('[Object] newValue');
export const loader = createAction('[Object] loader');
export const form = createAction('[Object] form');
export const step = createAction('[Object] step');
export const address = createAction('[Object] address');

export function requestServer(){
  return function (dispatch){
    try{
      const res = axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix');
      console.log(res);
      dispatch(load());
      dispatch(loader());
    } catch{
      console.log('catch');
    } finally{
      console.log('finaly');
    }
  }
}
