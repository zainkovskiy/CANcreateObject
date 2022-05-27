import React from "react";

import './SearchItem.scss';

export function SearchItem(props) {
  const { item, name, valueName, handleSelectItem, changeInput } = props;
  return (
    <>
      {
        name === 'reqComplex' ?
          <input
            readOnly={true}
            className='search__item'
            name={name}
            id={item.idresidential_complex}
            value={`${item[name]} ${item[valueName]}`}
            onClick={(event) => { handleSelectItem(item); changeInput(event) }}
          /> :
          <input
            readOnly={true}
            className='search__item'
            name={name}
            value={item[valueName]}
            onClick={(event) => {
              handleSelectItem(event);
              changeInput(event);
            }}
          />
      }
    </>
  )
}