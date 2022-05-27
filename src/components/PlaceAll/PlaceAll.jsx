import React, { useState } from 'react';

import { Dadata } from 'components/Dadata';
import { HandsAddress } from 'components/HandsAddress';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function PlaceAll(props) {
  const { object, step, getAddress, currentList, clearCurrentList, address, newValue } = props;
  const [handsEnter, setHandsEnter] = useState(object.addressType);

  return (
    <>
      <span className='subtitle'>Адрес</span>
      <FormControlLabel
        control={<Switch
        name="addressType"
          onChange={(event) => { newValue(event), setHandsEnter(event.target.checked) }}
          checked={handsEnter}
        />}
        label="Ввести вручную"
        sx={{ width: 'fit-content' }}
      />
      {
        handsEnter ?
          <HandsAddress
            object={object}
            step={step}
            getAddress={getAddress}
            clearCurrentList={clearCurrentList}
            currentList={currentList}
            address={address}
          /> :
          <Dadata
            step={step}
            address={address}
            object={object}
          />
      }
    </>
  )
}
