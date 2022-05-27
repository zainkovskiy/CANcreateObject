import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@mui/material";
import { TextFieldForm } from "components/TextFieldForm";
import { ToggleGroupForm } from "components/ToggleGroupForm";
import { SelectForm } from "components/SelectForm";

export function About(props) {
  const { object, form, step } = props;
  const [reqRoomsForSale, setReqRoomsForSale] = useState(object?.address?.reqRoomsForSale || '');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    defaultValues: {
      reqLandArea: object?.reqLandArea || '',
      reqFlatTotalArea: object?.reqFlatTotalArea || '',
      reqFlatLivingArea: object?.reqFlatLivingArea || '',
      reqKitchenArea: object?.reqKitchenArea || '',
      reqRoomCount: object?.reqRoomCount || '',
      reqRoomsForSale: object?.reqRoomsForSale || '',
      reqAreaForSell: object?.reqAreaForSell || '',
      reqAreaForSell2: object?.reqAreaForSell2 || '',
      reqAreaForSell3: object?.reqAreaForSell3 || '',
      reqTypeofFlat: object?.reqTypeofFlat || '',
      reqHouseType: object?.reqHouseType || '',
      reqGarageType: object?.reqGarageType || '',
      reqTypeofLayout: object?.reqTypeofLayout || '',
      reqLoggia: object?.reqLoggia || '',
      reqBalcony: object?.reqBalcony || '',
      reqBathroomType: object?.reqBathroomType || '',
      reqRepairStatus: object?.reqRepairStatus || '',
      reqHouseHeating: object?.reqHouseHeating || '',
      reqWaterPipes: object?.reqWaterPipes || '',
      reqDrainage: object?.reqDrainage || '',
      reqGroundCategory: object?.reqGroundCategory || '',
      reqMaterial: object?.reqMaterial || '',
      reqHouseRoof: object?.reqHouseRoof || '',
    }
  })

  const onSubmit = (data) => {
    console.log(data);
    // form(data);
    // step(object.step + 1)
  }

  return (
    <>
      <span className='subtitle'>
        Информация об объекте
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className='wrapper-grid'>
        {
          (object.reqTypeofRealty === 'Земельный участок' || object.reqTypeofRealty === 'Дом, коттедж, дача') &&
          <TextFieldForm
            label='Площадь участка'
            params={{
              ...register('reqLandArea', {
                required: 'Поле обязательно к заполнению'
              })
            }}
            error={errors?.reqLandArea ? true : false}
            helperText={errors?.reqLandArea?.message ? errors.reqLandArea.message : ''}
          />
        }
        {
          object.reqTypeofRealty !== 'Земельный участок' &&
          <TextFieldForm
            label="Площадь общая (m2)"
            params={{
              ...register('reqFlatTotalArea', {
                required: 'Поле обязательно к заполнению'
              })
            }}
            error={errors?.reqFlatTotalArea ? true : false}
            helperText={errors?.reqFlatTotalArea?.message ? errors.reqFlatTotalArea.message : ''}
          />
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <>
            <TextFieldForm
              label="Площадь жилая (m2)"
              params={{
                ...register('reqFlatLivingArea', {
                  required: 'Поле обязательно к заполнению'
                })
              }}
              error={errors?.reqFlatLivingArea ? true : false}
              helperText={errors?.reqFlatLivingArea?.message ? errors.reqFlatLivingArea.message : ''}
            />
            <TextFieldForm
              label="Площадь кухни (m2)"
              params={{
                ...register('reqKitchenArea', {
                  required: 'Поле обязательно к заполнению'
                })
              }}
              error={errors?.reqKitchenArea ? true : false}
              helperText={errors?.reqKitchenArea?.message ? errors.reqKitchenArea.message : ''}
            />
          </>
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <div className="wrapper-grid_fullWidth">
            <span className="text text_label">Общее количество комнат</span>
            <Controller
              control={control}
              rules={{ required: 'Поле обязательно к заполнению' }}
              name='reqRoomCount'
              render={({ field }) => (
                <ToggleGroupForm
                  {...field}
                />
              )}
            />
            <span className="text text_error">{errors?.reqRoomCount?.message ? errors.reqRoomCount.message : ''}</span>
          </div>
        }
        {
          object.reqTypeofRealty === 'Комната' &&
          <div className="wrapper-grid_fullWidth">
            <span className="text text_label">Количество комнат на продажу</span>
            <Controller
              control={control}
              rules={{ required: 'Поле обязательно к заполнению' }}
              name='reqRoomsForSale'
              render={({ field }) => (
                <ToggleGroupForm
                  {...field}
                />
              )}
            />
            <div style={{ display: 'flex', gap: '0.2rem' }}>
              {
                +reqRoomsForSale > 0 &&
                <TextFieldForm
                  label="Площадь комнаты 1 (m2)"
                  params={{
                    ...register('reqAreaForSell', {
                      required: 'Поле обязательно к заполнению'
                    })
                  }}
                  error={errors?.reqAreaForSell ? true : false}
                  helperText={errors?.reqAreaForSell?.message ? errors.reqAreaForSell.message : ''}
                />
              }
              {
                +reqRoomsForSale > 1 &&
                <TextFieldForm
                  label="Площадь комнаты 2 (m2)"
                  params={{
                    ...register('reqAreaForSell2', {
                      required: 'Поле обязательно к заполнению'
                    })
                  }}
                  error={errors?.reqAreaForSell2 ? true : false}
                  helperText={errors?.reqAreaForSell2?.message ? errors.reqAreaForSell2.message : ''}
                />
              }
              {
                reqRoomsForSale === '3' &&
                <TextFieldForm
                  label="Площадь комнаты 3 (m2)"
                  params={{
                    ...register('reqAreaForSell3', {
                      required: 'Поле обязательно к заполнению'
                    })
                  }}
                  error={errors?.reqAreaForSell3 ? true : false}
                  helperText={errors?.reqAreaForSell3?.message ? errors.reqAreaForSell3.message : ''}
                />
              }
            </div>
            <span className="text text_error">{errors?.reqRoomsForSale?.message ? errors.reqRoomsForSale.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ' || object.reqTypeofRealty === 'Комната') &&
          <Controller
            control={control}
            rules={{ required: 'Поле обязательно к заполнению' }}
            name='reqTypeofFlat'
            render={({ field }) => (
              <SelectForm
                label='Тип квартиры'
                error={errors?.reqTypeofFlat ? true : false}
                // helperText={errors?.reqTypeofFlat?.message ? errors.reqTypeofFlat.message : ''}
                {...field}
              />
            )}
          />
        }
        {/* {
          (object.reqTypeofRealty === 'Комната' || object.reqTypeofRealty === 'Дом, коттедж, дача') &&
          <Controller
            control={control}
            {
            ...register('reqHouseType', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqHouseType'
                label='Тип дома'
                error={errors?.reqHouseType ? true : false}
                helperText={errors?.reqHouseType?.message ? errors.reqHouseType.message : ''}
              />
            )}
          />
        }
        {
          object.reqTypeofRealty === 'Гараж' &&
          <Controller
            control={control}
            {
            ...register('reqGarageType', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqGarageType'
                label='Тип гаража'
                error={errors?.reqGarageType ? true : false}
                helperText={errors?.reqGarageType?.message ? errors.reqGarageType.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ' || object.reqTypeofRealty === 'Комната') &&
          <Controller
            control={control}
            {
            ...register('reqTypeofLayout', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqTypeofLayout'
                label='Планировка'
                error={errors?.reqTypeofLayout ? true : false}
                helperText={errors?.reqTypeofLayout?.message ? errors.reqTypeofLayout.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty !== 'Дом, коттедж, дача' && object.reqTypeofRealty !== 'Земельный участок') &&
          <Controller
            control={control}
            {
            ...register('reqMaterial', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqMaterial'
                label={object.reqTypeofRealty === 'Гараж' ? 'Материал стен' : 'Материал дома'}
                error={errors?.reqMaterial ? true : false}
                helperText={errors?.reqMaterial?.message ? errors.reqMaterial.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <Controller
            control={control}
            {
            ...register('reqBalcony', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqBalcony'
                label='Балкон'
                error={errors?.reqBalcony ? true : false}
                helperText={errors?.reqBalcony?.message ? errors.reqBalcony.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <Controller
            control={control}
            {
            ...register('reqLoggia', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqLoggia'
                label='Лоджия'
                error={errors?.reqLoggia ? true : false}
                helperText={errors?.reqLoggia?.message ? errors.reqLoggia.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <Controller
            control={control}
            {
            ...register('reqBathroomType', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqBathroomType'
                label='Санузел'
                error={errors?.reqBathroomType ? true : false}
                helperText={errors?.reqBathroomType?.message ? errors.reqBathroomType.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ') &&
          <Controller
            control={control}
            {
            ...register('reqRepairStatus', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqRepairStatus'
                label='Ремонт'
                error={errors?.reqRepairStatus ? true : false}
                helperText={errors?.reqRepairStatus?.message ? errors.reqRepairStatus.message : ''}
              />
            )}
          />
        }
        {
          object.reqTypeofRealty === 'Дом, коттедж, дача' &&
          <Controller
            control={control}
            {
            ...register('reqHouseRoof', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqHouseRoof'
                label='Кровля'
                error={errors?.reqHouseRoof ? true : false}
                helperText={errors?.reqHouseRoof?.message ? errors.reqHouseRoof.message : ''}
              />
            )}
          />
        }
        {
          object.reqTypeofRealty === 'Дом, коттедж, дача' &&
          <Controller
            control={control}
            {
            ...register('reqHouseHeating', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqHouseHeating'
                label='Отопление'
                error={errors?.reqHouseHeating ? true : false}
                helperText={errors?.reqHouseHeating?.message ? errors.reqHouseHeating.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Земельный участок') &&
          <Controller
            control={control}
            {
            ...register('reqWaterPipes', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqWaterPipes'
                label='Водопровод'
                error={errors?.reqWaterPipes ? true : false}
                helperText={errors?.reqWaterPipes?.message ? errors.reqWaterPipes.message : ''}
              />
            )}
          />
        }
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Земельный участок') &&
          <Controller
            control={control}
            {
            ...register('reqDrainage', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqDrainage'
                label='Слив'
                error={errors?.reqDrainage ? true : false}
                helperText={errors?.reqDrainage?.message ? errors.reqDrainage.message : ''}
              />
            )}
          />
        }
        {
          object.reqTypeofRealty === 'Земельный участок' &&
          <Controller
            control={control}
            {
            ...register('reqGroundCategory', {
              required: 'Поле обязательно к заполнению'
            })
            }
            render={({ field }) => (
              <SelectForm
                value={field.value}
                onChange={(e) => { field.onChange(e) }}
                inputRef={field.ref}
                name='reqGroundCategory'
                label='Категория земли'
                error={errors?.reqGroundCategory ? true : false}
                helperText={errors?.reqGroundCategory?.message ? errors.reqGroundCategory.message : ''}
              />
            )}
          />
        } */}
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