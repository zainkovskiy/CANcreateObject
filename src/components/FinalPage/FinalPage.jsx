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
          <p className="final__row text">Тип: <span>{object.reqTypeofRealty}</span></p>
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
          <p className="final__row text">Номер дома: <span>{object.address.reqHouseNumber}</span></p>
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
          {
            object.reqTypeofRealty === 'Земельный участок' || object.reqTypeofRealty === 'Дом, коттедж, дача' &&
            <p className="final__row text">Площадь участка: <span>{object.reqLandArea} соток</span></p>
          }
          <p className="final__row text">Площадь общая: <span>{object.reqFlatTotalArea} м<sup>2</sup></span></p>
          <p className="final__row text">Площадь жилая: <span>{object.reqFlatLivingArea} м<sup>2</sup></span></p>
          <p className="final__row text">Площадь кухни: <span>{object.reqKitchenArea} м<sup>2</sup></span></p>
          <p className="final__row text">Общее количество комнат: <span>{object.reqRoomCount}</span></p>
          <p className="final__row text">Количество комнат на продажу: <span>{object.reqRoomsForSale}</span></p>
          <p className="final__row text">Доля на продажу: <span>{object.reqShareForSale}/{object.reqShareForAll}</span></p>
          <p className="final__row text">Этаж: <span>{object.reqFloor}</span></p>
          <p className="final__row text">Этажность: <span>{object.reqFloorCount}</span></p>
          <p className="final__row text">Тип квартиры: <span>{object.reqTypeofFlat}</span></p>
          <p className="final__row text">Тип дома: <span>{object.reqHouseType}</span></p>
          <p className="final__row text">Тип гаража: <span>{object.reqGarageType}</span></p>
          <p className="final__row text">Планировка: <span>{object.reqTypeofLayout}</span></p>
          <p className="final__row text">Материал дома: <span>{object.reqMaterial}</span></p>
          <p className="final__row text">Балкон/лоджия: <span>{object.reqGalleryAvailability}</span></p>
          <p className="final__row text">Санузел: <span>{object.reqBathroomType}</span></p>
          <p className="final__row text">Ремонт: <span>{object.reqRepairStatus}</span></p>
          <p className="final__row text">reqHouseRoof: <span>{object.reqHouseRoof}</span></p>
          <p className="final__row text">Отопление: <span>{object.reqHouseHeating}</span></p>
          <p className="final__row text">Водопровод: <span>{object.reqWaterPipes}</span></p>
          <p className="final__row text">Слив: <span>{object.reqDrainage}</span></p>
          <p className="final__row text">Категория земли: <span>{object.reqGroundCategory}</span></p>
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