import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhoto } from 'actions/photo';
import { finalStep } from 'actions/object';

import Button from "@mui/material/Button";

import { CardPhoto } from 'components/CardPhoto';

export const PhotoContainer = () => {
  const photos = useSelector((state) => state.photo.get('photo').toJS());
  const object = useSelector((state) => state.object.get('entries').toJS());
  const dispatch = useDispatch();
  useEffect(() => {
    getPhoto();
  }, [])
  const getPhoto = () => {
    dispatch(loadPhoto())
  }
  const handleClick = () =>{
    dispatch(finalStep(object))
  }
  return (
    <>
      <div className='photos'>
        {
          photos.length > 0 ?
            photos.map((item) =>
              <CardPhoto
                key={item.UID}
                photo={item}
              />
            ) :
            <span className="text">Нет совпадений по фото</span>
        }
      </div>
      <div className='grid-buttons'>
        <div></div>
        <Button
          variant="contained"
          onClick={handleClick}
        >Сохранить
        </Button>
      </div>
    </>
  )
}