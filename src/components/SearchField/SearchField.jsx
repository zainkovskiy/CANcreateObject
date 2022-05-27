import React from "react";

import './SearchField.scss';

import { SearchItem } from "components/SearchItem";

export function SearchField (props){
  const { open, searchList, name, valueName, handleSelectItem, changeInput } = props;
  return (
    <div className={`search ${open && searchList.length > 0 ? '' : 'inVisible'}`}>
      {
        searchList.map((item, idx) =>
          <SearchItem
            key={idx}
            item={item}
            name={name}
            handleSelectItem={ handleSelectItem }
            valueName={ valueName }
            changeInput={ changeInput }
          />)
      }
    </div>
  )
}