import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from 'react-hook-form';

import { TextFieldForm } from "components/TextFieldForm";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { SearchField } from "components/SearchField";

import './HandsAddress.scss';

export function HandsAddress(props) {
  const { object, step, getAddress, currentList, clearCurrentList, address } = props;
  const inputEl = useRef(null);
  const [currenOpentList, setCurrentOpenList] = useState('');
  const [overallList, setOverallList] = useState([]);
  const [openList, setOpenList] = useState({
    region: false,
    area: false,
    street: false,
  })
  const {
    register,
    setValue,
    formState: { errors, isDirty },
    handleSubmit,
    getValues,
    control,
  } = useForm({
    defaultValues: {
      reqRegion: object.address.reqRegion || 'Новосибирская область',
      reqCity: object.address.reqCity || '',
      reqArea: object.address.reqArea || '',
      reqStreet: object.address.reqStreet || '',
      reqHouseNumber: object.address.reqHouseNumber || '',
      reqFlat: object.address.reqFlat || '',
      reqMunicipality: object.address.reqMunicipality || '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    address(data);
    step(object.step + 1)
  }

  useEffect(() => {
    document.body.addEventListener('click', checkOpenList);
    return () => {
      document.body.removeEventListener('click', checkOpenList);
    }
  })
  useEffect(() => {
    object?.address?.reqRegion || setOverallList([...overallList, 'Новосибирская область'])
  }, [])

  const handlerChange = (action, name, event) => {
    getAddress(action, name, event, getValues().reqCity)
    setCurrentOpenList(action);
    setOpenList(prevState => ({
      ...prevState, [action]: true
    }))
  }
  const handleSelectItem = (event) => {
    setOverallList([...overallList, event.target.value])
    setOpenList(prevState => ({
      ...prevState, [event.target.name]: false
    }))
    clearCurrentList();
  }

  const checkOpenList = (event) => {
    if (event.target.name !== currenOpentList) {
      setOpenList(prevState => ({
        ...prevState, [currenOpentList]: false
      }))
      clearCurrentList();
    }
  }
  const checkRightValue = (curValue, clearValue, source) => {
    const find = overallList.find(value => value === curValue);
    if (!find) {
      source === 'area' ? setValue('reqArea', '') : clearValue('')
    }
  }

  const checkCity = () => {
    const regNsk = new RegExp(/^Новосибирск$/, 'ig');
    const regKmr = new RegExp(/^Кемерово$/, 'ig');
    if (regNsk.test(getValues().reqCity) || regKmr.test(getValues().reqCity)) {
      return true
    }
    return false
  }

  const checkArea = () => {
    if (checkCity()) {
      checkRightValue(getValues().reqArea, () => { }, 'area')
    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        <Controller
          control={control}
          rules={{ required: 'Поле обязательно к заполнению' }}
          name='reqRegion'
          render={({ field }) => (
            <div className='wrapper-grid__input'>
              <TextField
                onChange={(e) => { field.onChange(e), handlerChange('region', 'subject', e) }}
                onBlur={(e) => { checkRightValue(e.target.value, field.onChange) }}
                inputRef={field.ref}
                autoComplete='off'
                label='Регион*'
                size='small'
                fullWidth
                value={field.value}
                error={errors?.reqRegion ? true : false}
                helperText={errors?.reqRegion?.message && errors.reqRegion.message}
              />
              <SearchField
                open={openList.region}
                searchList={currentList}
                name='region'
                valueName='subject'
                handleSelectItem={handleSelectItem}
                changeInput={field.onChange}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          rules={{ required: 'Поле обязательно к заполнению' }}
          name='reqCity'
          render={({ field }) => (
            <TextField
              onChange={(e) => { field.onChange(e), checkArea(), console.log(field) }}
              autoComplete='off'
              label='Населенный пункт*'
              size='small'
              fullWidth
              value={field.value}
              register='reqCity'
              error={errors?.reqCity ? true : false}
              helperText={errors?.reqCity?.message && errors.reqCity.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: 'Поле обязательно к заполнению' }}
          name='reqArea'
          render={({ field }) => (
            <div className='wrapper-grid__input'>
              <TextField
                onChange={(e) => { field.onChange(e), checkCity() && handlerChange('area', 'area', e) }}
                onBlur={(e) => { checkCity() && checkRightValue(e.target.value, field.onChange) }}
                inputRef={field.ref}
                autoComplete='off'
                label={checkCity() ? 'Район города*' : 'Район области*'}
                size='small'
                fullWidth
                value={field.value}
                error={errors?.reqArea ? true : false}
                helperText={errors?.reqArea?.message && errors.reqArea.message}
              />
              <SearchField
                open={openList.area}
                searchList={currentList}
                name='area'
                valueName='area'
                handleSelectItem={handleSelectItem}
                changeInput={field.onChange}
              />
            </div>
          )}
        />
        <TextFieldForm
          label='Улица*'
          {
          ...register('reqStreet', {
            required: 'Поле обязательно к заполнению'
          })
          }
          error={errors?.reqStreet ? true : false}
          helperText={errors?.reqStreet?.message && errors.reqStreet.message}
        />
        <TextFieldForm
          label={object.reqTypeofRealty === 'Земельный участок' ? 'Номер участка*' : "Номер дома*"}
          {
          ...register('reqHouseNumber', {
            required: 'Поле обязательно к заполнению'
          })
          }
          error={errors?.reqHouseNumber ? true : false}
          helperText={errors?.reqHouseNumber?.message && errors.reqHouseNumber.message}
        />
        {(object.reqTypeofRealty !== 'Дом, коттедж, дача' && object.reqTypeofRealty !== 'Земельный участок') &&
          <TextFieldForm
            label={object.reqTypeofRealty === 'Гараж' ? 'Номер парковочного места' : 'Номер квартиры'}
            {
            ...register('reqFlat', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.reqFlat ? true : false}
            helperText={errors?.reqFlat?.message && errors.reqFlat.message}
          />
        }
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Земля') &&
          <TextFieldForm
            label="Садовое общество"
            {
            ...register('reqMunicipality', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.reqMunicipality ? true : false}
            helperText={errors?.reqMunicipality?.message && errors.reqMunicipality.message}
          />
        }
        <div className='grid-buttons'>
          <Button
            variant="contained"
            type='button'
            onClick={() => { address(getValues()), step(object.step - 1) }}
          >back
          </Button>
          <Button
            variant="contained"
            type='submit'
          >submit
          </Button>
        </div>
      </form>
  )
}