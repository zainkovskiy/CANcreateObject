import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Button from "@mui/material/Button";
import { TextFieldForm } from "components/TextFieldForm";

import './Cords.scss';

export const Cords = (props) => {
  const { register, setValue, errors} = props;
  const object = useSelector((state) => state.object.get('entries')).toJS();
  const [point, setPoint] = useState(object?.lat && object?.lng ? [object.lat, object.lng] : []);
  // const [zoom, setZoom] = useState(10);
  const zoom = 12;
  const objectRef = useRef(null);

  const handleClick = (event) => {
    const cords = event.get('coords');
    setPoint(cords);
    setValue('lat', cords[0]);
    setValue('lng', cords[1]);
  }
  useEffect(() => {
    console.log('update')
    if (JSON.stringify(objectRef.current) === JSON.stringify(object.address)){
      return
    }
    objectRef.current = object.address;
    setCordsInputs();
  }, [object.address])

  const setCordsInputs = () => {
    console.log('here');
    if (object.address?.data?.geo_lat && object.address?.data?.geo_lon){
      setPoint([object.address.data.geo_lat, object.address.data.geo_lon]);
      // setZoom(15);
      setValue('lat', object.address.data.geo_lat);
      setValue('lng', object.address.data.geo_lon);
    } else if (object?.address?.lat && object?.address?.lng){
      setPoint([object.address.lat, object.address?.lng]);
      // setZoom(15);
      setValue('lat', object.address.lat);
      setValue('lng', object.address?.lng);
    }
  }

  return (
    <>
      {
        (object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Земельный участок' ) &&
        <p className='text attention wrapper-grid_fullWidth'>В соответствии с требованиями ЦИАН, необходимо указать координаты с точность до дома. Внимание! В случае ввода не верных координат объект не выгрузится в рекламу</p>
      }
        <TextFieldForm
          label='Координаты X'
          {
            ...register('lat', {
              required: 'Поле обязательно к заполнению'
            })
          }
          errors={errors.lat}
          inputProps = {{
            readOnly: true
          }}
        />
        <TextFieldForm
          label='Координаты Y'
          {
            ...register('lng', {
              required: 'Поле обязательно к заполнению'
            })
          }
          errors={errors.lng}
          inputProps = {{
            readOnly: true
          }}
        />
        {
          (object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Змельный участок') &&
          <TextFieldForm
            label='Кадастровый номер участка'
            {
              ...register('reqLandCadastralNumber', {
                required: 'Поле обязательно к заполнению'
              })
            }
            errors={errors.reqLandCadastralNumber}
          />
        }
        {
          object.propertyType === 'Дом, коттедж, дача' &&
          <TextFieldForm
            label='Кадастровый номер объекта'
            {
              ...register('reqObjectCadastralNumber', {
                required: 'Поле обязательно к заполнению'
              })
            }
            errors={errors.reqObjectCadastralNumber}
          />
        }
        <div style={{ gridColumnStart: 1, gridColumnEnd: 3, height: 400 }}>
          <YMaps>
            <Map
              state={{ center: point.length > 0 ? point : [55.030204, 82.920430], zoom }}
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
        <div></div>
          <Button
            variant="contained"
            type='submit'
            // disabled={point.length === 0} 
          >Далее
          </Button>
        </div>
    </>
  )
} 