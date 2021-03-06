import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

import { Dadata } from 'components/Dadata';
import { Cords } from 'components/Cords';
import { Uploader } from 'components/Uploader';

export function PlaceAll(props) {
  const { object, step, form } = props;
  const [absentAddress, setAbsentAdress] = useState(object?.absentAddress || false)
  const [addressError, setAdressError] = useState(false)

  useEffect(() => {
    form({ absentAddress: absentAddress })
  }, [absentAddress])

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      reqFlat: object?.reqFlat || '',
      lat: object?.lat || '55.0415000',
      lng: object?.lng || '82.9346000',
      comment: object?.comment || '',
      newAddress: object?.newAddress || '',
      reqLandCadastralNumber: object?.reqLandCadastralNumber || '',
      reqObjectCadastralNumber: object?.reqObjectCadastralNumber || '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    if (!object.address && !object.absentAddress) {
      setAdressError(true);
      return
    }
    if (object.absentAddress) {
      form(data);
      step('about')
    }
    if (object.address) {
      step('check')
    }
  }

  return (
    <>
      <Button
        variant="text"
        onClick={() => setAbsentAdress(!absentAddress)}
      >
        адреса нет в списке
      </Button>
      {
        object?.address?.data?.qc_geo &&
        <span className="text">
          {
            coordsInfo[object.address.data.qc_geo]
          }
        </span>
      }
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        {
          absentAddress ?
            <>
              <div className='wrapper-grid_fullWidth'>
                <TextField
                  autoComplete="off"
                  label='Адрес'
                  size="small"
                  fullWidth
                  error={errors?.newAddress ? true : false}
                  helperText={errors?.newAddress?.message ? errors.newAddress.message : ''}
                  {
                  ...register('newAddress', {
                    required: 'Поле обязательно к заполнению'
                  })
                  }
                />
              </div>
              <div className='wrapper-grid_fullWidth'>
                <Uploader
                  object={object}
                  register={register}
                  setValue={setValue}
                />
                <span className='text_error'>{errors?.file?.message ? errors.file.message : ''}</span>
              </div>
              <div className='wrapper-grid_fullWidth'>
                <FormControlLabel
                  label='Комментарий'
                  labelPlacement="top"
                  style={{ margin: 0 }}
                  control={
                    <textarea
                      className='form__textArea'
                      cols="30"
                      rows="10"
                      {
                      ...register('comment', {
                        required: 'Поле обязательно к заполнению'
                      })
                      }
                    ></textarea>
                  }
                />
                <span className='text_error'>{errors?.comment?.message ? errors.comment.message : ''}</span>
              </div>
            </>
            :
            <Dadata
              addressError={addressError}
              object={object}
            />
        }
        <Cords
          object={object}
          register={register}
          setValue={setValue}
          errors={errors}
          step={step}
        />
      </form>
    </>
  )
}

const coordsInfo = {
  '0': 'Точные координаты',
  '1': 'Координаты указаы до ближайщего дома',
  '2': 'Координаты указаы до улицы',
  '3': 'Координаты указаы до населенного пункта',
  '4': 'Координаты указаы до города',
  '5': 'Координаты не определены',
}