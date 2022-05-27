import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { SearchField } from "components/SearchField";

export function PlaceNew(props) {
  const { object, form, step, currentList, getComplex } = props;
  const [overallList, setOverallList] = useState([]);
  const [openComplex, setOpenComplex] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      reqComplex: object.reqComplex || '',
      reqHouseDeveloper: object.reqHouseDeveloper || '',
      reqRegion: object.reqRegion || '',
      reqCity: object.reqCity || '',
      reqArea: object.reqArea || '',
      reqStreet: object.reqStreet || '',
      reqHouseNumber: object.reqHouseNumber || '',
      reqFlat: object.reqFlat || '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    form(data);
    step(object.step + 1)
  }
  useEffect(() => {
    document.body.addEventListener('click', checkOpenList);
    return () => {
      document.body.removeEventListener('click', checkOpenList);
    }
  })
  const handlerChange = (value) => {
    getComplex(value);
    setOpenComplex(true);
  }

  const checkRightValue = (event, clearValue) => {
    const find = overallList.find(value => value === event.target.value);
    if (!find) {
      clearValue('');
      for (let key in getValues()) {
        setValue(key, '');
      }
    }
  }

  const checkOpenList = (event) => {
    event.target.name !== 'reqComplex' && setOpenComplex(false);
  }

  const handleSelectItem = (item) => {
    setOpenComplex(false);
    setOverallList([...overallList, `${item.reqComplex} ${item.reqHouseNumber}`]);
    for (let key in item) {
      setValue(key, item[key])
    }
  }

  return (
    <>
      <span className='subtitle'>
        Адрес
        <Button
          variant="text"
        >жк нет в списке
        </Button>
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        <Controller
          control={control}
          {
          ...register('reqComplex', {
            required: 'Поле обязательно к заполнению'
          })
          }
          render={({ field }) => (
            <div className='wrapper-grid__input'>
              <TextField
                onChange={(e) => { field.onChange(e), handlerChange(e.target.value) }}
                onBlur={(e) => { checkRightValue(e, field.onChange) }}
                inputRef={field.ref}
                autoComplete='off'
                label='ЖК*'
                size='small'
                fullWidth
                name='reqComplex'
                value={field.value}
                error={errors?.reqComplex}
                helperText={errors?.reqComplex?.message && errors.reqComplex.message}
              />
              <SearchField
                open={openComplex}
                searchList={currentList}
                name='reqComplex'
                valueName='reqHouseNumber'
                handleSelectItem={handleSelectItem}
                changeInput={field.onChange}
              />
            </div>
          )}
        />
        <TextField
          disabled={true}
          label="Застройщик"
          size="small"
          fullWidth
          value={getValues().reqHouseDeveloper}
          {
          ...register('reqHouseDeveloper')
          }
        />
        <TextField
          disabled={true}
          label="Регион"
          size="small"
          fullWidth
          value={getValues().reqRegion}
          {
          ...register('reqRegion')
          }
        />
        <TextField
          disabled={true}
          label="Населенный пункт"
          size="small"
          fullWidth
          value={getValues().reqCity}
          {
          ...register('reqCity')
          }
        />
        <TextField
          disabled={true}
          label="Район"
          size="small"
          fullWidth
          value={getValues().reqArea}
          {
          ...register('reqArea')
          }
        />
        <TextField
          disabled={true}
          label="Номер дома"
          size="small"
          fullWidth
          value={getValues().reqHouseNumber}
          {
          ...register('reqHouseNumber')
          }
        />
        <TextField
          disabled={true}
          label="Улица"
          size="small"
          fullWidth
          value={getValues().reqStreet}
          {
          ...register('reqStreet')
          }
        />
        <TextField
          autoComplete="off"
          label='Номер квартиры'
          size="small"
          fullWidth
          error={errors?.reqFlat}
          helperText={errors?.reqFlat?.message && errors.reqFlat.message}
          {
          ...register('reqFlat', {
            required: 'Поле обязательно к заполнению'
          })
          }
        />
        <div className='grid-buttons'>
          <Button
            variant="contained"
            type='button'
            onClick={() => { form(getValues()), step(object.step - 1) }}
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