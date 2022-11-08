import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { newValue } from 'actions/object';

import './Type.scss';

export function Type(props) {
  const dispatch = useDispatch();
  const propertyType = useSelector((state) => state.object.getIn(['entries', 'propertyType']));

  const handle = () => {
    dispatch(newValue(event))
  }

  return (
    <>
      <span className='subtitle'>Тип объекта</span>
      <div className='wrapper_type'>
        <ToggleButtonGroup
          color="primary"
          value={propertyType}
          exclusive
          onChange={handle}
        >
          <ToggleButton
            name='propertyType' value='Квартира' size="small">Квартира</ToggleButton>
          <ToggleButton name='propertyType' size="small" value="Переуступка ДДУ">Новостройка</ToggleButton>
          <ToggleButton name='propertyType' size="small" value="Комната">Комната</ToggleButton>
          <ToggleButton name='propertyType' size="small" value="Дом, коттедж, дача">Дом, коттедж, дача</ToggleButton>
          <ToggleButton name='propertyType' size="small" value="Земельный участок">Земельный участок</ToggleButton>
          <ToggleButton name='propertyType' size="small" value="Гараж">Гараж</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  )
}