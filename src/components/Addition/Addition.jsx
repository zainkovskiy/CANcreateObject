import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ToggleGroupForm } from "components/ToggleGroupForm";

import { TextFieldForm } from "components/TextFieldForm";

export function Addition(props) {
  const { step, object, form, newValue } = props;
  const [isPart, setIsPart] = useState(object?.isPart || false);
  const [reqRoomsForSale, setReqRoomsForSale] = useState(object?.address?.reqRoomsForSale || '');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      reqRoomsForSale: object?.reqRoomsForSale || '',
      reqAreaForSell: object?.reqAreaForSell || '',
      reqAreaForSell2: object?.reqAreaForSell2 || '',
      reqAreaForSell3: object?.reqAreaForSell3 || '',
      reqShareForSale : object?.reqShareForSale  || '',
      reqShareForAll : object?.reqShareForAll  || '',
      reqPrice : object?.reqPrice  || '',
    }
  })
  const onSubmit = (data) => {
    console.log(data);
    form(data);
    step(object.step + 1)
  }
  return (
    <>
      <span className='subtitle'>Цена и доля</span>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        {
          object.reqTypeofRealty === 'Комната' &&
          <div className='wrapper-grid_fullWidth'>
            <FormControlLabel
              control={<Switch
                name="isPart"
                onChange={(event) => { newValue(event), setIsPart(event.target.checked) }}
                checked={isPart}
              />}
              label="Комната объект"
              sx={{ width: 'fit-content' }}
            />
          </div>
        }
        {
          isPart && object.reqTypeofRealty === 'Комната' ?
            <div className="wrapper-grid_fullWidth">
              <span className="text text_label">Количество комнат на продажу</span>
              <Controller
                control={control}
                rules={{ required: 'Поле обязательно к заполнению' }}
                name='reqRoomsForSale'
                render={({ field }) => (
                  <ToggleGroupForm
                    onChange={(e) => { field.onChange(e), setReqRoomsForSale(e.target.value) }}
                    value={field.value}
                    name='reqRoomsForSale'
                  />
                )}
              />
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {
                  +reqRoomsForSale > 0 &&
                  <TextFieldForm
                    label="Площадь комнаты 1 (m2)"
                    {
                    ...register('reqAreaForSell', {
                      required: 'Поле обязательно к заполнению'
                    })
                    }
                    error={errors?.reqAreaForSell ? true : false}
                    helperText={errors?.reqAreaForSell?.message ? errors.reqAreaForSell.message : ''}
                  />
                }
                {
                  +reqRoomsForSale > 1 &&
                  <TextFieldForm
                    label="Площадь комнаты 2 (m2)"
                    {
                    ...register('reqAreaForSell2', {
                      required: 'Поле обязательно к заполнению'
                    })
                    }
                    error={errors?.reqAreaForSell2 ? true : false}
                    helperText={errors?.reqAreaForSell2?.message ? errors.reqAreaForSell2.message : ''}
                  />
                }
                {
                  reqRoomsForSale === '3' &&
                  <TextFieldForm
                    label="Площадь комнаты 3 (m2)"
                    {
                    ...register('reqAreaForSell3', {
                      required: 'Поле обязательно к заполнению'
                    })
                    }
                    error={errors?.reqAreaForSell3 ? true : false}
                    helperText={errors?.reqAreaForSell3?.message ? errors.reqAreaForSell3.message : ''}
                  />
                }
              </div>
              <span className="text text_error">{errors?.reqRoomsForSale?.message ? errors.reqRoomsForSale.message : ''}</span>
            </div> :
            <>
              <TextFieldForm
                label="Доля на продажу"
                {
                ...register('reqShareForSale', {
                  required: 'Поле обязательно к заполнению'
                })
                }
                error={errors?.reqShareForSale ? true : false}
                helperText={errors?.reqShareForSale?.message ? errors.reqShareForSale.message : ''}
              />
              <TextFieldForm
                label="Доля всего"
                {
                ...register('reqShareForAll', {
                  required: 'Поле обязательно к заполнению'
                })
                }
                error={errors?.reqShareForAll ? true : false}
                helperText={errors?.reqShareForAll?.message ? errors.reqShareForAll.message : ''}
              />
            </>
        }
        <TextFieldForm
          label="Цена"
          {
          ...register('reqPrice', {
            required: 'Поле обязательно к заполнению'
          })
          }
          error={errors?.reqPrice ? true : false}
          helperText={errors?.reqPrice?.message ? errors.reqPrice.message : ''}
        />
        <div className='grid-buttons'>
          <Button
            variant="contained"
            type='button'
          // onClick={() => { form(getValues()), step(object.step - 1) }}
          >back
          </Button>
          <Button
            variant="contained"
            type='submit'
          >submit
          </Button>
        </div>
      </form>
    </>)
}