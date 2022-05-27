import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Button from "@mui/material/Button";
import { TextFieldForm } from "components/TextFieldForm";

import './Cords.scss';

export function Cords(props) {
  const { object, step, form } = props;
  const [point, setPoint] = useState(object?.lat && object?.lng ? [object.lat, object.lng] : [])
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      lat: object.lat || 55.030204,
      lng: object.lng || 82.920430,
      reqLandCadastralNumber: object.reqLandCadastralNumber || '',
      reqObjectCadastralNumber: object.reqObjectCadastralNumber || '',

    },
    mode: 'onSubmit',
  })

  const handleClick = (event) => {
    const cords = event.get('coords');
    setPoint(cords);
    setValue('lat', cords[0]);
    setValue('lng', cords[1]);
  }

  const onSubmit = (data) => {
    console.log(data);
    form(data);
    step(object.step + 1)
  }

  return (
    <>
      <span className='subtitle'>
        Местоположение
      </span>
      {
        (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ' || object.reqTypeofRealty === 'Комната') &&
        <p className='text attention'>В соответствии с требованиями ЦИАН, необходимо указать координаты с точность до дома. Внимание! В случае ввода не верных координат объект не выгрузится в рекламу</p>
      }
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        <TextFieldForm
          label='Координаты X*'
          params={{
            ...register('lat', {
              required: 'Поле обязательно к заполнению'
            })
          }}
          error={errors?.lat ? true : false}
          helperText={errors?.lat?.message && errors.lat.message}
        />
        <TextFieldForm
          label='Координаты Y*'
          params={{
            ...register('lng', {
              required: 'Поле обязательно к заполнению'
            })
          }}
          error={errors?.lng ? true : false}
          helperText={errors?.lng?.message && errors.lng.message}
        />
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Змельный участок') &&
          <TextFieldForm
            label='Кадастровый номер участка*'
            params={{
              ...register('reqLandCadastralNumber', {
                required: 'Поле обязательно к заполнению'
              })
            }}
            error={errors?.reqLandCadastralNumber ? true : false}
            helperText={errors?.reqLandCadastralNumber?.message && errors.reqLandCadastralNumber.message}
          />
        }
        {
          object.reqTypeofRealty === 'Дом, коттедж, дача' &&
          <TextFieldForm
            label='Кадастровый номер объекта*'
            params={{
              ...register('reqObjectCadastralNumber', {
                required: 'Поле обязательно к заполнению'
              })
            }}
            error={errors?.reqObjectCadastralNumber ? true : false}
            helperText={errors?.reqObjectCadastralNumber?.message && errors.reqObjectCadastralNumber.message}
          />
        }
        <div style={{ gridColumnStart: 1, gridColumnEnd: 3, height: 400 }}>
          <YMaps>
            <Map
              defaultState={{ center: point.length > 0 ? point : [55.030204, 82.920430], zoom: 10 }}
              width={'100%'}
              height={400}
              onCLick={event => handleClick(event)}
            >
              {
                point.length > 0 &&
                <Placemark
                  geometry={point}
                  options={{ iconColor: `#0c54a0` }}
                />
              }
            </Map>
          </YMaps>
        </div>
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
          >submit
          </Button>
        </div>
      </form>
    </>
  )
} 