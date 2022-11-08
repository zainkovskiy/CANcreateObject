import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField } from "@mui/material";
import { SearchField } from "components/SearchField";

import { address, form, step } from 'actions/object';

import { Cords } from 'components/Cords';
import { Uploader } from 'components/Uploader';

export const PlaceNew = () => {
  const object = useSelector((state) => state.object.get('entries')).toJS();
  const dispatch = useDispatch();
  const [overallList, setOverallList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [openComplex, setOpenComplex] = useState(false)
  const [absentComplex, setAbsentComplex] = useState(object?.absentComplex || false)

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      reqComplex: object?.address?.reqComplex || '',
      reqFlat: object?.reqFlat || '',
      file: object?.file || '',
      newHouseDeveloper: object?.newHouseDeveloper || '',
      newComplex: object?.newComplex || '',
      lat: object?.lat || '55.0415000',
      lng: object?.lng || '82.9346000',
    },
    mode: 'onSubmit',
  })

  const getComplex = async (value) => {
    if (value.length === 0) {
      return
    }
    try {
      // axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix')
      setCurrentList([
        {
          "idresidential_complex": "91",
          "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
          "reqComplex": "ЖК «1 на Рябиновой»",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
          "appartmentNumber": 1,
          'lat': '55.06204894469935',
          'lng': '82.93178859524537'
        },
        {
          "idresidential_complex": "92",
          "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
          "reqComplex": "ЖК «1 на Рябиновой»",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
          "appartmentNumber": 2,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "93",
          "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
          "reqComplex": "ЖК «1 на Рябиновой»",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
          "appartmentNumber": 3,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "94",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
          "appartmentNumber": 4,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "95",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
          "appartmentNumber": 1,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "96",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 10",
          "appartmentNumber": 2,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "97",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
          "appartmentNumber": 3,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "98",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 8",
          "appartmentNumber": 4,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "99",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 16",
          "appartmentNumber": 5,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "100",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 12",
          "appartmentNumber": 6,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "101",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 14",
          "appartmentNumber": 7,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "102",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 23",
          "appartmentNumber": 8,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "103",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 26к",
          "appartmentNumber": 9,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "104",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, с18",
          "appartmentNumber": 10,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "105",
          "reqHouseDeveloper": "ООО «АКВА СИТИ»",
          "reqComplex": "Ясный берег",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 13",
          "appartmentNumber": 11,
          'lat': '55.0415000',
          'lng': '82.9346000'
        },
        {
          "idresidential_complex": "109",
          "reqHouseDeveloper": "Группа Мета",
          "reqComplex": "ЖК МАЯК",
          "reqRegion": "Новосибирская область",
          "reqCity": "Новосибирск",
          "reqArea": "Дзержинский",
          "reqStreet": "Россия, Новосибирск, 2-я Обская улица, 71/1",
          "appartmentNumber": 12,
          'lat': '55.0415000',
          'lng': '82.9346000'
        }
      ]);
      setOpenComplex(true);
    } catch {
      clearCurrentList();
    }
  }
  const clearCurrentList = () => {
    setCurrentList([]);
  }

  const onSubmit = (data) => {
    if (object.absentComplex) {
      dispatch(form(data));
      dispatch(step('about'));
      return
    }
    if (object.address) {
      dispatch(step('check'));
      return
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', checkOpenList);
    return () => {
      document.body.removeEventListener('click', checkOpenList);
    }
  })

  useEffect(() => {
    setAbsentComplexValue();
  }, [absentComplex])

  const setAbsentComplexValue = () => {
    dispatch(form({ absentComplex: absentComplex }));
  }

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
    dispatch(address(item));
    setOverallList([...overallList, `${item.reqComplex} ${item.appartmentNumber}`]);
    // for (let key in item) {
    //   setValue(key, item[key])
    // }
  }

  return (
    <>
      <Button
        variant="text"
        onClick={() => { setAbsentComplex(!absentComplex) }}
      >
        жк нет в списке
      </Button>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        {
          absentComplex ?
            <>
              <Controller
                name='newComplex'
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                  <TextField
                    autoComplete='off'
                    label='ЖК'
                    size='small'
                    fullWidth
                    {...field}
                    error={errors?.newComplex ? true : false}
                    helperText={errors?.newComplex?.message ? errors.newComplex.message : ''}
                  />
                }
              />
              <Controller
                name='newHouseDeveloper'
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                  <TextField
                    autoComplete='off'
                    label='Застройщик*'
                    size='small'
                    fullWidth
                    {...field}
                    error={errors?.newHouseDeveloper ? true : false}
                    helperText={errors?.newHouseDeveloper?.message ? errors.newHouseDeveloper.message : ''}
                  />
                }
              />
              <Controller
                name='reqFlat'
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                  <TextField
                    autoComplete="off"
                    label='Номер квартиры'
                    size="small"
                    fullWidth
                    error={errors?.reqFlat ? true : false}
                    helperText={errors?.reqFlat?.message ? errors.reqFlat.message : ''}
                    {...field}
                  />
                }
              />
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
            </> :
            <>
              <Controller
                control={control}
                name='reqComplex'
                rules={{ required: true }}
                render={({ field }) => (
                  <div className='wrapper-grid__input'>
                    <TextField
                      onChange={(e) => { field.onChange(e), handlerChange(e.target.value) }}
                      onBlur={(e) => { checkRightValue(e, field.onChange) }}
                      inputRef={field.ref}
                      autoComplete='off'
                      label='ЖК'
                      size='small'
                      fullWidth
                      name='reqComplex'
                      value={field.value}
                      error={errors?.reqComplex ? true : false}
                      helperText={errors?.reqComplex?.message ? errors.reqComplex.message : ''}
                    />
                    <SearchField
                      open={openComplex}
                      searchList={currentList}
                      name='reqComplex'
                      valueName='appartmentNumber'
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
                value={object?.address?.reqHouseDeveloper ? object?.address?.reqHouseDeveloper : ''}
              />
              <TextField
                disabled={true}
                label="Регион"
                size="small"
                fullWidth
                value={object?.address?.reqRegion ? object?.address?.reqRegion : ''}
              />
              <TextField
                disabled={true}
                label="Населенный пункт"
                size="small"
                fullWidth
                value={object?.address?.reqCity ? object?.address?.reqCity : ''}
              />
              <TextField
                disabled={true}
                label="Район"
                size="small"
                fullWidth
                value={object?.address?.reqArea ? object?.address?.reqArea : ''}
              />
              <TextField
                disabled={true}
                label="Номер дома"
                size="small"
                fullWidth
                value={object?.address?.appartmentNumber ? object?.address?.appartmentNumber : ''}
              />
              <TextField
                disabled={true}
                label="Улица"
                size="small"
                fullWidth
                value={object?.address?.reqStreet ? object?.address?.reqStreet : ''}
              />
              <div></div>
            </>
        }
        <Cords
          register={register}
          setValue={setValue}
          errors={errors}
        />
      </form>
    </>
  )
}
