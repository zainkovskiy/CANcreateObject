import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { selectPhoto } from "actions/photo";
import { addRemovePhoto } from "actions/object";

import './CardPhoto.scss';

export const CardPhoto = ({ photo }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectPhoto(photo.UID));
    dispatch(addRemovePhoto(photo));
  }
  return (
    <div className="photo">
      {
        photo.select &&
        <span className="photo__icon">
          <CheckCircleOutlineIcon />
        </span>
      }
      <img className="photo__img" src={photo.URL} alt="photo" />
      <Button
        size="small"
        variant="outlined"
        onClick={handleClick}
      >
        select
      </Button>
    </div>
  )
}