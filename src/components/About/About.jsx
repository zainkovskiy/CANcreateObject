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
      plotArea: object?.plotArea || '',
      totalArea: object?.totalArea || '',
      livingArea: object?.livingArea || '',
      kitchenArea: object?.kitchenArea || '',
      rooms: object?.rooms || '',
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
          (object.propertyType === 'Земельный участок' || object.propertyType === 'Дом, коттедж, дача') &&
          <TextFieldForm
            label='Площадь участка'
            {
            ...register('plotArea', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.plotArea ? true : false}
            helperText={errors?.plotArea?.message ? errors.plotArea.message : ''}
          />
        }
        {
          object.propertyType !== 'Земельный участок' &&
          <TextFieldForm
            label="Площадь общая (m2)"
            {
            ...register('totalArea', {
              required: 'Поле обязательно к заполнению'
            })
            }
            error={errors?.totalArea ? true : false}
            helperText={errors?.totalArea?.message ? errors.totalArea.message : ''}
          />
        }
        {
          (object.propertyType !== 'Земельный участок' && object.propertyType !== 'Гараж') &&
          <>
            <TextFieldForm
              label="Площадь жилая (m2)"
              {
              ...register('livingArea', {
                required: 'Поле обязательно к заполнению'
              })
              }
              error={errors?.livingArea ? true : false}
              helperText={errors?.livingArea?.message ? errors.livingArea.message : ''}
            />
            <TextFieldForm
              label="Площадь кухни (m2)"
              {
              ...register('kitchenArea', {
                required: 'Поле обязательно к заполнению'
              })
              }
              error={errors?.kitchenArea ? true : false}
              helperText={errors?.kitchenArea?.message ? errors.kitchenArea.message : ''}
            />
          </>
        }
        {
          (object.propertyType !== 'Земельный участок' && object.propertyType !== 'Гараж') &&
          <div className="wrapper-grid_fullWidth">
            <span className="text text_label">Общее количество комнат</span>
            <Controller
              control={control}
              rules={{ required: 'Поле обязательно к заполнению' }}
              name='rooms'
              render={({ field }) => (
                <ToggleGroupForm
                  {...field}
                />
              )}
            />
            <span className="text text_error">{errors?.rooms?.message ? errors.rooms.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Квартира' || object.propertyType === 'Переуступка ДДУ' || object.propertyType === 'Комната') &&
          <div>
            <SelectForm
              control={control}
              label='Тип квартиры'
              name='appartmentType'
              error={errors?.appartmentType ? true : false}
              defaultValue={object?.appartmentType || ''}
            />
            <span className="text text_error">{errors?.appartmentType?.message ? errors.appartmentType.message : ''}</span>
          </div>

        }
        {
          (object.propertyType === 'Комната' || object.propertyType === 'Дом, коттедж, дача') &&
          <div>
            <SelectForm
              control={control}
              name='buildingType'
              label='Тип дома'
              error={errors?.buildingType ? true : false}
              defaultValue={object?.appartmentType || ''}
            />
            <span className="text text_error">{errors?.buildingType?.message ? errors.buildingType.message : ''}</span>
          </div>
        }
        {
          object.propertyType === 'Гараж' &&
          <div>
            <SelectForm
              control={control}
              name='garageType'
              label='Тип гаража'
              error={errors?.garageType ? true : false}
              defaultValue={object?.garageType || ''}
            />
            <span className="text text_error">{errors?.garageType?.message ? errors.garageType.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Дом, коттедж, дача' && object.propertyType === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.plotStatus || ''}
              control={control}
              name='plotStatus'
              label='Статус участка'
              error={errors?.plotStatus ? true : false}
            />
            <span className="text text_error">{errors?.plotStatus?.message ? errors.plotStatus.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Квартира' || object.propertyType === 'Переуступка ДДУ' || object.propertyType === 'Комната') &&
          <div>
            <SelectForm
              defaultValue={object?.layout || ''}
              control={control}
              name='layout'
              label='Планировка'
              error={errors?.layout ? true : false}
            />
            <span className="text text_error">{errors?.layout?.message ? errors.layout.message : ''}</span>
          </div>
        }
        {
          (object.propertyType !== 'Дом, коттедж, дача' && object.propertyType !== 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.material || ''}
              control={control}
              name='material'
              label='Материал дома'
              error={errors?.material ? true : false}
            />
            <span className="text text_error">{errors?.material?.message ? errors.material.message : ''}</span>
          </div>
        }
        {
          (object.propertyType !== 'Земельный участок' && object.propertyType !== 'Гараж') &&
          <div>
            <SelectForm
              defaultValue={object?.gallery || ''}
              control={control}
              name='gallery'
              label='Балкон'
              error={errors?.gallery ? true : false}
            />
            <span className="text text_error">{errors?.gallery?.message ? errors.gallery.message : ''}</span>
          </div>
        }
        {
          (object.propertyType !== 'Земельный участок' && object.propertyType !== 'Гараж') &&

          <div>
            <SelectForm
              defaultValue={object?.loggias || ''}
              control={control}
              name='loggias'
              label='Лоджия'
              error={errors?.loggias ? true : false}
            />
            <span className="text text_error">{errors?.loggias?.message ? errors.loggias.message : ''}</span>
          </div>
        }
        {
          (object.propertyType !== 'Земельный участок' && object.propertyType !== 'Гараж') &&

          <div>
            <SelectForm
              defaultValue={object?.bathroom || ''}
              control={control}
              name='bathroom'
              label='Вид санузла'
              error={errors?.bathroom ? true : false}
            />
            <span className="text text_error">{errors?.bathroom?.message ? errors.bathroom.message : ''}</span>
          </div>
        }
        <div>
          <SelectForm
            defaultValue={object?.sanitaryType || ''}
            control={control}
            name='sanitaryType'
            label='Тип сантехники'
            error={errors?.sanitaryType ? true : false}
          />
          <span className="text text_error">{errors?.sanitaryType?.message ? errors.sanitaryType.message : ''}</span>
        </div>
        {
          (object.propertyType === 'Квартира' || object.propertyType === 'Переуступка ДДУ' | object.propertyType === 'Дом, коттедж, дача') &&

          <div>
            <SelectForm
              defaultValue={object?.repair || ''}
              control={control}
              name='repair'
              label='Ремонт'
              error={errors?.repair ? true : false}
            />
            <span className="text text_error">{errors?.repair?.message ? errors.repair.message : ''}</span>
          </div>
        }
        <div>
          <SelectForm
            defaultValue={object?.finishing || ''}
            control={control}
            name='finishing'
            label='Отделка'
            error={errors?.finishing ? true : false}
          />
          <span className="text text_error">{errors?.finishing?.message ? errors.finishing.message : ''}</span>
        </div>
        {
          object.propertyType === 'Дом, коттедж, дача' &&
          <div>
            <SelectForm
              defaultValue={object?.houseRoof || ''}
              control={control}
              name='houseRoof'
              label='Кровля'
              error={errors?.houseRoof ? true : false}
            />
            <span className="text text_error">{errors?.houseRoof?.message ? errors.houseRoof.message : ''}</span>
          </div>
        }
        {
          object.propertyType === 'Дом, коттедж, дача' &&
          <div>
            <SelectForm
              defaultValue={object?.heating || ''}
              control={control}
              name='heating'
              label='Отопление'
              error={errors?.heating ? true : false}
            />
            <span className="text text_error">{errors?.heating?.message ? errors.heating.message : ''}</span>
          </div>
        }
        {
          object.propertyType === 'Дом, коттедж, дача' &&
          <div>
            <SelectForm
              defaultValue={object?.heatingType || ''}
              control={control}
              name='heatingType'
              label='Тип отопления'
              error={errors?.heatingType ? true : false}
            />
            <span className="text text_error">{errors?.heatingType?.message ? errors.heatingType.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.waterSupply || ''}
              control={control}
              name='waterSupply'
              label='Водоснабжение'
              error={errors?.waterSupply ? true : false}
            />
            <span className="text text_error">{errors?.waterSupply?.message ? errors.waterSupply.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.gasSupply || ''}
              control={control}
              name='gasSupply'
              label='Газоснабжение'
              error={errors?.waterSupply ? true : false}
            />
            <span className="text text_error">{errors?.gasSupply?.message ? errors.gasSupply.message : ''}</span>
          </div>
        }
        {
          (object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Земельный участок') &&
          <div>
            <SelectForm
              defaultValue={object?.drainage || ''}
              control={control}
              name='drainage'
              label='Канализация'
              error={errors?.drainage ? true : false}
            />
            <span className="text text_error">{errors?.drainage?.message ? errors.drainage.message : ''}</span>
          </div>
        }
        {
          object.propertyType === 'Дом, коттедж, дача' || object.propertyType === 'Земельный участок' &&
          <div>
            <SelectForm
              defaultValue={object?.plotStatus || ''}
              control={control}
              name='plotStatus'
              label='Статус земли'
              error={errors?.plotStatus ? true : false}
            />
            <span className="text text_error">{errors?.plotStatus?.message ? errors.plotStatus.message : ''}</span>
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