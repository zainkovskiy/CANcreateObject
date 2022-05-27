import React from 'react';
import Button from "@mui/material/Button";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import './Type.scss';

export function Type(props) {
  const { object, handle, step } = props;

  return (
    <>
      <span className='subtitle'>Тип объекта</span>
      <div className='wrapper_type'>
        <ToggleButtonGroup
          color="primary"
          value={object.reqTypeofRealty}
          exclusive
          onChange={event => handle(event)}
        >
          <ToggleButton
            name='reqTypeofRealty'
            value={object.reqTypeofRealty === 'Переуступка ДДУ' ? 'Переуступка ДДУ' : 'Квартира'}
            size="small"
          >
            Квартира
          </ToggleButton>
          <ToggleButton name='reqTypeofRealty' size="small" value="Комната">Комната</ToggleButton>
          <ToggleButton name='reqTypeofRealty' size="small" value="Дом, коттедж, дача">Дом, коттедж, дача</ToggleButton>
          <ToggleButton name='reqTypeofRealty' size="small" value="Земельный участок">Земельный участок</ToggleButton>
          <ToggleButton name='reqTypeofRealty' size="small" value="Гараж">Гараж</ToggleButton>
        </ToggleButtonGroup>
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ') &&
          <div className='toggle-btn'>
            <div className='toggle-btn__item toggle-btn__item50'>
              <input
                id='full'
                name='reqTypeofRealty'
                type="radio"
                checked={object.reqTypeofRealty === 'Квартира'}
                value='Квартира'
                onChange={(event) => handle(event)}
              />
              <label htmlFor='full'>
                Вторичка
              </label>
            </div>
            <div className='toggle-btn__item toggle-btn__item50'>
              <input
                id='part'
                name='reqTypeofRealty'
                type="radio"
                checked={object.reqTypeofRealty === 'Переуступка ДДУ'}
                value='Переуступка ДДУ'
                onChange={(event) => handle(event)}
              />
              <label htmlFor='part'>
                Переуступка ДДУ
              </label>
            </div>
          </div>
        }
        <Button
          disabled={!object.reqTypeofRealty}
          style={{ alignSelf: 'flex-end' }}
          variant="contained"
          onClick={() => step(object.step + 1)}
        >
          далее
        </Button>
      </div>
    </>
  )
}