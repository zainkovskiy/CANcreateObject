import React, { useState } from 'react';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import Button from '@mui/material/Button';

import './Dadata.scss';

export function Dadata(props) {
  const { address, step, object } = props;
  const [addressDadata, setAddressDadata] = useState(object.addressType ? '' : object.address);
  return (
    <>
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
            onBlur: (event) => event.target.value.length === 0 && setAddress(''),
          }
        }
      />
      <div className='grid-buttons'>
        <Button
          variant="contained"
          type='button'
          onClick={() => { step(object.step - 1) }}
        >back
        </Button>
        <Button
          variant="contained"
          type='submit'
          disabled={!addressDadata}
          onClick={() => { address(addressDadata), step(object.step + 1) }}
        >next
        </Button>
      </div>
    </>
  )
}