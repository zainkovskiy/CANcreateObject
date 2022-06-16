import React, { useState } from "react";
import axios from "axios";

import './Uploader.scss';

export function Uploader({ register, setValue }) {
  const [isUpload, seIstUpload] = useState(false);

  const handleChange = (event) => {
    event.target.style.background = "#E5E5E5";
    upload(event.target.files);
  }
  const dragEntertHandler = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('uploader')) {
      event.target.style.background = "#E5E5E5";
    }
  }
  const dragLeaveHandler = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('uploader')) {
      event.target.style.background = "";
    }
  }
  const dragOverHandler = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('uploader')) {
      event.target.style.background = "#E5E5E5";
    }
  }
  const dropHandler = (event) => {
    event.preventDefault();
    upload(event.dataTransfer.files);
  }
  const upload = async (files) => {
    const formData = new FormData();
    for (let file of files) {
      formData.append('photo[]', file);
    }
    formData.append('reqNumber', `N${Math.floor(Math.random() * (99999999999 - 10000000000)) + 10000000000}`)
    try {
      const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/MediaExchange/Uploader.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (res?.data?.length > 0) {
        setValue('file', res.data);
        seIstUpload(true);
      }
    } catch (err) {
      seIstUpload(false);
      console.log("🚀 ~ file: Uploader.jsx ~ line 39 ~ upload ~ err", err)
    }
  }
  return (
    <>
      <div
        className="uploader"
        onDragEnter={event => dragEntertHandler(event)}
        onDragLeave={event => dragLeaveHandler(event)}
        onDragOver={event => dragOverHandler(event)}
        onDrop={event => dropHandler(event)}
        onChange={event => handleChange(event)}
      >
        <input
          className="uploader__input"
          type="file"
          id="uploader"
          {
          ...register('file', {
            validate: value => value.length > 0 || 'Загрузите подтверждаюший документ'
          })
          }
        />
        <label className="uploader__label" htmlFor="uploader"></label>
        <span className="uploader__text">{ isUpload ? 'Файл загружен' : 'Загрузите подтверждаюший документ' }</span>
      </div>
    </>
  )
}