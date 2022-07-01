import React from "react";

import Button from "@mui/material/Button";

import './CheckCard.scss';

export function CheckCard({ card, selectObject }) {
  const openCard = () => {
    window.open(`https://crm.centralnoe.ru/cardObject/?login=yes&source=1c&reqNumber=${card.reqNumber}`);
  }
  return (
    <div
      className="card"
      onClick={(event) => event.target.tagName !== 'BUTTON' && openCard()}
    >
      <img
        className="card__img"
        src={card.photo}
        alt="photo"
      />
      <div className="card__wrap">
        <div className='card__info'>
          <span className='card__text text'>{card.reqNumber}</span>
          <span className='card__text text'>{card.address}</span>
          <span className='card__text text'>{card.areas}</span>
          <span className='card__text text'>{card.docType}</span>
        </div>
        {
          card.docType === 'free' &&
          <Button
            variant="outlined"
            onClick={() => selectObject(card)}
          >
            выбрать
          </Button>
        }
      </div>
    </div>
  )
}