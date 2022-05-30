import React from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@mui/material";
import { TextFieldForm } from "components/TextFieldForm";
import { ToggleGroupForm } from "components/ToggleGroupForm";
import { SelectForm } from "components/SelectForm";

export function About(props) {
  const { object, form, step } = props;
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
    }
  })

  const onSubmit = (data) => {
    form(data);
    step(object.step + 1)
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
            {
            ...register('reqLandArea', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.reqLandArea ? true : false}
            helperText={errors?.reqLandArea?.message ? errors.reqLandArea.message : ''}
          />
        }
        {
          object.reqTypeofRealty !== 'Земельный участок' &&
          <TextFieldForm
            label="Площадь общая (m2)"
            {
            ...register('reqFlatTotalArea', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.reqFlatTotalArea ? true : false}
            helperText={errors?.reqFlatTotalArea?.message ? errors.reqFlatTotalArea.message : ''}
          />
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <>
            <TextFieldForm
              label="Площадь жилая (m2)"
              {
              ...register('reqFlatLivingArea', {
                required: 'Поле обязательно к заполнению'
              })
              }
              error={errors?.reqFlatLivingArea ? true : false}
              helperText={errors?.reqFlatLivingArea?.message ? errors.reqFlatLivingArea.message : ''}
            />
            <TextFieldForm
              label="Площадь кухни (m2)"
              {
              ...register('reqKitchenArea', {
                required: 'Поле обязательно к заполнению'
              })
              }
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
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ' || object.reqTypeofRealty === 'Комната') &&
          <div>
            <SelectForm
              control={control}
              label='Тип квартиры'
              name='reqTypeofFlat'
              error={errors?.reqTypeofFlat ? true : false}
              defaultValue={object?.reqTypeofFlat || ''}
            />
            <span className="text text_error">{errors?.reqTypeofFlat?.message ? errors.reqTypeofFlat.message : ''}</span>
          </div>

        }
        {
          (object.reqTypeofRealty === 'Комната' || object.reqTypeofRealty === 'Дом, коттедж, дача') &&
          <div>
            <SelectForm
              control={control}
              name='reqHouseType'
              label='Тип дома'
              error={errors?.reqHouseType ? true : false}
              defaultValue={object?.reqTypeofFlat || ''}
            />
            <span className="text text_error">{errors?.reqHouseType?.message ? errors.reqHouseType.message : ''}</span>
          </div>
        }
        {
          object.reqTypeofRealty === 'Гараж' &&
          <div>
            <SelectForm
              control={control}
              name='reqGarageType'
              label='Тип гаража'
              error={errors?.reqGarageType ? true : false}
              defaultValue={object?.reqGarageType || ''}
            />
            <span className="text text_error">{errors?.reqGarageType?.message ? errors.reqGarageType.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ' || object.reqTypeofRealty === 'Комната') &&
          <div>
            <SelectForm
              defaultValue={object?.reqTypeofLayout || ''}
              control={control}
              name='reqTypeofLayout'
              label='Планировка'
              error={errors?.reqTypeofLayout ? true : false}
            />
            <span className="text text_error">{errors?.reqTypeofLayout?.message ? errors.reqTypeofLayout.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty !== 'Дом, коттедж, дача' && object.reqTypeofRealty !== 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.reqMaterial || ''}
              control={control}
              name='reqMaterial'
              label='Материал дома'
              error={errors?.reqMaterial ? true : false}
            />
            <span className="text text_error">{errors?.reqMaterial?.message ? errors.reqMaterial.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&
          <div>
            <SelectForm
              defaultValue={object?.reqBalcony || ''}
              control={control}
              name='reqBalcony'
              label='Балкон'
              error={errors?.reqBalcony ? true : false}
            />
            <span className="text text_error">{errors?.reqBalcony?.message ? errors.reqBalcony.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&

          <div>
            <SelectForm
              defaultValue={object?.reqLoggia || ''}
              control={control}
              name='reqLoggia'
              label='Лоджия'
              error={errors?.reqLoggia ? true : false}
            />
            <span className="text text_error">{errors?.reqLoggia?.message ? errors.reqLoggia.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty !== 'Земельный участок' && object.reqTypeofRealty !== 'Гараж') &&

          <div>
            <SelectForm
              defaultValue={object?.reqBathroomType || ''}
              control={control}
              name='reqBathroomType'
              label='Санузел'
              error={errors?.reqBathroomType ? true : false}
            />
            <span className="text text_error">{errors?.reqBathroomType?.message ? errors.reqBathroomType.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty === 'Квартира' || object.reqTypeofRealty === 'Переуступка ДДУ') &&

          <div>
            <SelectForm
              defaultValue={object?.reqRepairStatus || ''}
              control={control}
              name='reqRepairStatus'
              label='Ремонт'
              error={errors?.reqRepairStatus ? true : false}
            />
            <span className="text text_error">{errors?.reqRepairStatus?.message ? errors.reqRepairStatus.message : ''}</span>
          </div>
        }
        {
          object.reqTypeofRealty === 'Дом, коттедж, дача' &&
          <div>
            <SelectForm
              defaultValue={object?.reqHouseRoof || ''}
              control={control}
              name='reqHouseRoof'
              label='Кровля'
              error={errors?.reqHouseRoof ? true : false}
            />
            <span className="text text_error">{errors?.reqHouseRoof?.message ? errors.reqHouseRoof.message : ''}</span>
          </div>
        }
        {
          object.reqTypeofRealty === 'Дом, коттедж, дача' &&
          <div>
            <SelectForm
              defaultValue={object?.reqHouseHeating || ''}
              control={control}
              name='reqHouseHeating'
              label='Отопление'
              error={errors?.reqHouseHeating ? true : false}
            />
            <span className="text text_error">{errors?.reqHouseHeating?.message ? errors.reqHouseHeating.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.reqWaterPipes || ''}
              control={control}
              name='reqWaterPipes'
              label='Водопровод'
              error={errors?.reqWaterPipes ? true : false}
            />
            <span className="text text_error">{errors?.reqWaterPipes?.message ? errors.reqWaterPipes.message : ''}</span>
          </div>
        }
        {
          (object.reqTypeofRealty === 'Дом, коттедж, дача' || object.reqTypeofRealty === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.reqDrainage || ''}
              control={control}
              name='reqDrainage'
              label='Слив'
              error={errors?.reqDrainage ? true : false}
            />
            <span className="text text_error">{errors?.reqDrainage?.message ? errors.reqDrainage.message : ''}</span>
          </div>
        }
        {
          object.reqTypeofRealty === 'Земельный участок' &&
          <div>
            <SelectForm
              defaultValue={object?.reqGroundCategory || ''}
              control={control}
              name='reqGroundCategory'
              label='Категория земли'
              error={errors?.reqGroundCategory ? true : false}
            />
            <span className="text text_error">{errors?.reqGroundCategory?.message ? errors.reqGroundCategory.message : ''}</span>
          </div>
        }
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