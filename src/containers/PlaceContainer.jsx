import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from '@mui/material/Button';

import { step, newValue, form } from 'actions/object';

import { PlaceNew } from 'components/PlaceNew';
import { PlaceAll } from 'components/PlaceAll';

class PlaceContainer extends PureComponent {
  state = {
    currentList: []
  }

  getComplex = async (value) => {
    if (event.target.value.length === 0) {
      return
    }
    try {
      axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix')
      this.setState({
        currentList: [
          {
            "idresidential_complex": "91",
            "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
            "reqComplex": "ЖК «1 на Рябиновой»",
            "reqRegion": "Новосибирская область",
            "reqCity": "Новосибирск",
            "reqArea": "Дзержинский",
            "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
            "appartmentNumber": 1,
            'lat': '55.0415000',
            'lng': '82.9346000'
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
        ]
      })
    } catch {
      this.clearCurrentList();
    }
  }
  clearCurrentList = () => {
    this.setState({ currentList: [] })
  }
  render() {
    const { object, step, address, form } = this.props;
    return (
      <>
        <span className='subtitle'>
          Адрес и местоположение
        </span>
        {
          object.propertyType === 'Переуступка ДДУ' ?
            <PlaceNew
              object={object}
              step={step}
              form={form}
              address={address}
              currentList={this.state.currentList}
              getComplex={this.getComplex}
            /> :
            <PlaceAll
              object={object}
              form={form}
              step={step}
            />
        }
      </>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    object: state.object.get('entries').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    step: (value) => dispatch(step(value)),
    form: (data) => dispatch(form(data)),
    newValue: (value) => dispatch(newValue(value))
  }
}

export const PlaceRedux = connect(mapStateToProps, mapDispatchToProps)(PlaceContainer);

const areaNovosibirsk = [
  { area: 'Кировский' },
  { area: 'Ленинский' },
  { area: 'Советский' },
  { area: 'Первомайский' },
  { area: 'Дзержинский' },
  { area: 'Центральный' },
  { area: 'Калининский' },
  { area: 'Заельцовский' },
  { area: 'Октябрьский' },
  { area: 'Железнодорожный' },
]
const areaKemerovo = [
  { area: 'Заводский' },
  { area: 'Кедровка' },
  { area: 'Кировский' },
  { area: 'Ленинский' },
  { area: 'Рудничный' },
  { area: 'Центральный' },
]