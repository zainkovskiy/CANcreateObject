import React from "react";
import { useSelector } from "react-redux";
import { Type } from 'components/Type';
import { PlaceNew } from 'components/PlaceNew';
import { PlaceAll } from 'components/PlaceAll';

export const StartInfoContainer = () => {
  const propertyType = useSelector((state) => state.object.getIn(['entries', 'propertyType']));
  return (
    <>
      <Type />
      <span className='subtitle'>
        Адрес и местоположение
      </span>
      {
        propertyType === 'Переуступка ДДУ' ?
          <PlaceNew
            // object={object}
            // step={step}
            // form={form}
            // currentList={this.state.currentList}
            // getComplex={this.getComplex}
          /> :
          <PlaceAll
            // object={object}
            // form={form}
            // step={step}
          />
      }
    </>
  )
}