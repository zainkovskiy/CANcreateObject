import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { address } from 'actions/object';


import './Dadata.scss';

export function Dadata(props) {
  const { object, addressError } = props;
  const dispatch = useDispatch();
  const [addressDadata, setAddressDadata] = useState(object.address || '');

  useEffect(() => {
    console.log(addressDadata);
    if (addressDadata) {
      dispatch(address(addressDadata))
    }
  }, [addressDadata])

  return (
    <div className='wrapper-grid_fullWidth'>
      <AddressSuggestions
        token="408e6651c0b9bfc8e2f487383d45353973f3285c"
        value={addressDadata}
        onChange={(e) => { setAddressDadata(e) }}
        filterFromBound={'region'}
        filterToBound={'house'}
        inputProps={
          {
            placeholder: 'Введите адрес',
            className: 'dadata__input',
          }
        }
      />
      {
        (!object.address && addressError) &&
        <span className="text text_error ">Введите адрес</span>
      }
    </div>
  )
}