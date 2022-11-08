import { handleActions } from "redux-actions";
import { Map, fromJS, List } from 'immutable';

import { setPhoto, selectPhoto } from 'actions/photo';

const initialState = new Map({
  photo: new List()
});

export const photoReducer = handleActions({

  [setPhoto]: (state, action) => {
    return state.set('photo', fromJS(
      [
        {
          "UID" : 646546,
          "ownerId" : 654651651,
          "URL" : "https://benedom.ru/upload/iblock/4c9/jhapctmareiusgrvzzv2z5w8xjqp4c6g.jpg"
        },
        {
          "UID" : 6465462,
          "ownerId" : 654651651,
          "URL" : "https://benedom.ru/upload/iblock/4c9/jhapctmareiusgrvzzv2z5w8xjqp4c6g.jpg"
        },
      ]
    ))
  },
  [selectPhoto]: (state, action) => {
    const UID = action.payload;
    const photoIndex = state.get('photo').findIndex(item => item.get('UID') === UID);
    const select = !state.getIn(['photo', photoIndex, 'select']);
    return state.setIn(['photo'], state.get('photo').setIn([photoIndex, 'select'], select))
  }
}, initialState)