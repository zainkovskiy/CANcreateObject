import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { step, address, newValue, form } from 'actions/object';

import { PlaceNew } from 'components/PlaceNew';
import { PlaceAll } from 'components/PlaceAll';

class PlaceContainer extends PureComponent {
  state = {
    currentList: []
  }

  getAddress = async (action, name, event, city) => {
    const regNsk = new RegExp(/^Новосибирск$/, 'ig');
    const regKmr = new RegExp(/^Кемерово$/, 'ig');
    if (event.target.value.length === 0) {
      return
    }
    if ((regNsk.test(city) || regKmr.test(city)) && action === 'area') {
      const regNsk = new RegExp(/^Новосибирск$/, 'ig');
      const regKmr = new RegExp(/^Кемерово$/, 'ig');
      const regExp = new RegExp(event.target.value, 'i');
      if (regNsk.test(city)) {
        this.setState({
          currentList: areaNovosibirsk.filter(item => regExp.test(item.area))
        })
      } else if (regKmr.test(city)) {
        this.setState({
          currentList: areaKemerovo.filter(item => regExp.test(item.area))
        })
      }
    } else {
      try {
        axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix')
        // const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Object/Address.php', {
        //   action: action,
        //   [name]: event.target.value,
        // });
        this.setState({currentList: [
          {
            "subject": "Новосибирская область"
          },
          {
            "city": "Новосибирск"
          },
          {
            "street": "Любая удица"
          },
        ]})
        // this.setState({ currentList: res })
      } catch {
        this.clearCurrentList();
      }
    }
  }
  getComplex = async (value) => {
    if (event.target.value.length === 0) {
      return
    }
    try {
      axios.get('https://www.omdbapi.com/?apikey=fcdad292&s=matrix')
    this.setState({ currentList: [
      {
        "idresidential_complex": "91",
        "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
        "reqComplex": "ЖК «1 на Рябиновой»",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
        "reqHouseNumber": 1
      },
      {
        "idresidential_complex": "92",
        "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
        "reqComplex": "ЖК «1 на Рябиновой»",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
        "reqHouseNumber": 2
      },
      {
        "idresidential_complex": "93",
        "reqHouseDeveloper": "Первый Строительный Фонд (« ПСФ »)",
        "reqComplex": "ЖК «1 на Рябиновой»",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, Рябиновая улица, 14/1",
        "reqHouseNumber": 3
      },
      {
        "idresidential_complex": "94",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
        "reqHouseNumber": 4
      },
      {
        "idresidential_complex": "95",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
        "reqHouseNumber": 1
      },
      {
        "idresidential_complex": "96",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 10",
        "reqHouseNumber": 2
      },
      {
        "idresidential_complex": "97",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 112",
        "reqHouseNumber": 3
      },
      {
        "idresidential_complex": "98",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 8",
        "reqHouseNumber": 4
      },
      {
        "idresidential_complex": "99",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 16",
        "reqHouseNumber": 5
      },
      {
        "idresidential_complex": "100",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 12",
        "reqHouseNumber": 6
      },
      {
        "idresidential_complex": "101",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 14",
        "reqHouseNumber": 7
      },
      {
        "idresidential_complex": "102",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 23",
        "reqHouseNumber": 8
      },
      {
        "idresidential_complex": "103",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, 26к",
        "reqHouseNumber": 9
      },
      {
        "idresidential_complex": "104",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 1-я Чулымская улица, с18",
        "reqHouseNumber": 10
      },
      {
        "idresidential_complex": "105",
        "reqHouseDeveloper": "ООО «АКВА СИТИ»",
        "reqComplex": "Ясный берег",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, улица Ясный Берег, 13",
        "reqHouseNumber": 11
      },
      {
        "idresidential_complex": "109",
        "reqHouseDeveloper": "Группа Мета",
        "reqComplex": "ЖК МАЯК",
        "reqRegion": "Новосибирская область",
        "reqCity": "Новосибирск",
        "reqArea": "Дзержинский",
        "reqStreet": "Россия, Новосибирск, 2-я Обская улица, 71/1",
        "reqHouseNumber": 12
      }
    ] })
  } catch{
    this.clearCurrentList();
  }
  } 
  clearCurrentList = () => {
    this.setState({ currentList: [] })
  }
  render() {
    const { object, step, address, form, newValue } = this.props;
    return (
      <>
        {
          object.reqTypeofRealty === 'Переуступка ДДУ' ?
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
              step={step}
              newValue={newValue}
              getAddress={this.getAddress}
              clearCurrentList={this.clearCurrentList}
              currentList={this.state.currentList}
              address={address}
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
    address: (value) => dispatch(address(value)),
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