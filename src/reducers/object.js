import { handleActions } from "redux-actions";
import { Map, fromJS } from 'immutable';

import { load, newValue, loader, form, step, address } from 'actions/object';

const initialState = new Map({
  isLinear: true,
  entries: new Map()
});

export const objectReducer = handleActions({
  [loader]: (state, action) => {
    return state.set('isLinear', !state.get('isLinear'));
  },

  [load]: (state, action) => {
    console.log(state.toJS())
    return state.set('entries', fromJS({
      "UID": "28841",
      "updatetime": "2022-02-04 09:03:44.921778",
      "createtime": "2021-09-21 12:26:27.955249",
      "reqNumber": "58278000007",
      "reqTypeofSeller": "Собственник",
      "propertyType": "Дом, коттедж, дача",
      "address": {

      },
      "addressType": true,
      appartmentType: '',
      isPart: true,
      "step": 3
    }))
  },

  [newValue]: (state, action) => {
    const { name, value, type, checked } = action.payload.target;
    console.log(state.toJS());
    return state.setIn(['entries', name], type === 'checkbox' ? checked : value)
  },
  [form]: (state, action) => {
    const object = state.get('entries').toJS();
    for (let key in action.payload) {
      object[key] = action.payload[key];
    }
    return state.set('entries', fromJS(object));
  },
  [step]: (state, action) => {
    return state.setIn(['entries', 'step'], action.payload)
  },
  [address]: (state, action) => {
    return state.setIn(['entries', 'address'], action.payload)
  },
}, initialState)