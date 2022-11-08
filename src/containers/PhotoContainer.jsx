import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhoto } from 'actions/photo';

import { CardPhoto } from 'components/CardPhoto';

export const PhotoContainer = () => {
  const photos = useSelector((state) => state.photo.get('photo').toJS());
  const dispatch = useDispatch();
  useEffect(() => {
    getPhoto();
  }, [])
  const getPhoto = () => {
    dispatch(loadPhoto())
  }
  return (
    <div className='photos'>
      {
        photos.length > 0 &&
        photos.map((item) =>
          <CardPhoto
            key={ item.UID } 
            photo={ item }
          />
        )
      }
    </div>
  )
}