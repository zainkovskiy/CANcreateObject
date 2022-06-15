import React from 'react';
import { useForm } from 'react-hook-form';

import Button from "@mui/material/Button";

import { Dadata } from 'components/Dadata';
import { Cords } from 'components/Cords';

export function PlaceAll(props) {
  const { object, step, form } = props;

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      lat: object.lat || '55.0415000',
      lng: object.lng || '82.9346000',
      reqLandCadastralNumber: object.reqLandCadastralNumber || '',
      reqObjectCadastralNumber: object.reqObjectCadastralNumber || '',
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
      >
        адреса нет в списке
      </Button>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        <Dadata
          object={object}
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
