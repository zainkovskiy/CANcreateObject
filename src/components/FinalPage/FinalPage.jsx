import React from 'react';
import Button from "@mui/material/Button";

import './FinalPage.scss';

export function FinalPage(props) {
  const { object } = props;
  return (
    <>
      <div className="final">
        <p className="final__subtitle text">Тип объекта</p>
        <div className="final__block-text">
          <p className="final__row text">Тип: <span>{object.propertyType}</span></p>
        </div>
      </div>
      <div className="final">
        <p className="final__subtitle text">Адрес
          <Button variant="text">редактировать</Button>
        </p>
        <div className="final__block-text">
          <p className="final__row text">Регион: <span>{object.address.reqRegion}</span></p>
          <p className="final__row text">Населенный пункт: <span>{object.address.reqCity}</span></p>
          <p className="final__row text">Район: <span>{object.address.reqArea}</span></p>
          <p className="final__row text">Улица: <span>{object.address.reqStreet}</span></p>
          <p className="final__row text">Номер дома: <span>{object.address.appartmentNumber}</span></p>
          <p className="final__row text">Номер квартиры: <span>{object.address.reqFlat}</span></p>
        </div>
      </div>
      <div className="final">
        <p className="final__subtitle text">Местоположение
          <Button variant="text">редактировать</Button>
        </p>
        <div className="final__block-text">
          <p className="final__row text">Координаты X: <span>{object.lat}</span></p>
          <p className="final__row text">Координаты Y: <span>{object.lng}</span></p>
          <p className="final__row text">Кадастровый номер участка: <span>{object.reqLandCadastralNumber}</span></p>
          <p className="final__row text">Кадастровый номер объекта: <span>{object.reqObjectCadastralNumber}</span></p>
        </div>
      </div>
      <div className="final">
        <p className="final__subtitle text">Общая информация
          <Button variant="text">редактировать</Button>
        </p>
        <div className="final__block-text">
          какие данные выводить?
          {
            object.propertyType === 'Земельный участок' || object.propertyType === 'Дом, коттедж, дача' &&
            <p className="final__row text">Площадь участка: <span>{object.plotArea} соток</span></p>
          }
          <p className="final__row text">Площадь общая: <span>{object.totalArea} м<sup>2</sup></span></p>
          <p className="final__row text">Площадь жилая: <span>{object.livingArea} м<sup>2</sup></span></p>
          <p className="final__row text">Площадь кухни: <span>{object.kitchenArea} м<sup>2</sup></span></p>
          <p className="final__row text">Общее количество комнат: <span>{object.rooms}</span></p>
          <p className="final__row text">Количество комнат на продажу: <span>{object.roomsForSale}</span></p>
          <p className="final__row text">Доля на продажу: <span>{object.reqShareForSale}/{object.reqShareForAll}</span></p>
          <p className="final__row text">Этаж: <span>{object.reqFloor}</span></p>
          <p className="final__row text">Этажность: <span>{object.reqFloorCount}</span></p>
          <p className="final__row text">Тип квартиры: <span>{object.appartmentType}</span></p>
          <p className="final__row text">Тип дома: <span>{object.buildingType}</span></p>
          <p className="final__row text">Тип гаража: <span>{object.garageType}</span></p>
          <p className="final__row text">Планировка: <span>{object.layout}</span></p>
          <p className="final__row text">Материал дома: <span>{object.material}</span></p>
          <p className="final__row text">Санузел: <span>{object.bathroom}</span></p>
          <p className="final__row text">Ремонт: <span>{object.repair}</span></p>
          <p className="final__row text">houseRoof: <span>{object.houseRoof}</span></p>
          <p className="final__row text">Отопление: <span>{object.heatingType}</span></p>
          <p className="final__row text">Водопровод: <span>{object.waterSupply}</span></p>
          <p className="final__row text">Слив: <span>{object.drainage}</span></p>
        </div>
      </div>
      <div className="final">
        <p className="final__subtitle text">Прайс
          <Button variant="text">редактировать</Button>
        </p>
        <div className="final__block-text">
          <p className="final__row text">Цена: <span>{object.reqPrice}</span></p>
        </div>
      </div>
    </>
  )
}