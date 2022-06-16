import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import { Dadata } from 'components/Dadata';
import { Cords } from 'components/Cords';
import { Uploader } from 'components/Uploader';

export function PlaceAll(props) {
  const { object, step, form } = props;
  const [absentAddress, setAbsentAdress] = useState(object?.absentAddress || false)

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
      newAddress: object?.newAddress || '',
      lat: object?.lat || '55.0415000',
      lng: object?.lng || '82.9346000',
      reqLandCadastralNumber: object?.reqLandCadastralNumber || '',
      reqObjectCadastralNumber: object?.reqObjectCadastralNumber || '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    console.log(data);
    form(data);
    step(object.step + 1)
  }

  return (
    <>
      <Button
        variant="text"
        onClick={() => setAbsentAdress(!absentAddress)}
      >
        адреса нет в списке
      </Button>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        {
          absentAddress ?
            <>
                <div className='wrapper-grid_fullWidth'> 
                  <Uploader
                    object={object}
                    register={register}
                    setValue={setValue}
                  />
                  <span className='text_error'>{errors?.file?.message ? errors.file.message : ''}</span>
                </div>
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
            </>
            :
            <Dadata
              object={object}
            />
        }
        <TextField
          autoComplete="off"
          label='Номер квартиры'
          size="small"
          fullWidth
          error={errors?.reqFlat ? true : false}
          helperText={errors?.reqFlat?.message ? errors.reqFlat.message : ''}
          {
          ...register('reqFlat', {
            required: 'Поле обязательно к заполнению'
          })
          }
        />
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
