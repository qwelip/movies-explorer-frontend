import React from 'react';
import './MoviesCard.css';
import dislike from '../../../images/dislike.png';
import like from '../../../images/like.png';

const MoviesCard = ({title, duration, image}) => {

  const imgUrl = 'https://api.nomoreparties.co';
  const hours = Math.trunc(duration/60);
  const minutes = duration % 60;

  return (
    <div className='movies-card'>
      <div className="movies-card__foto-wrap">
        <img className='movies-card__foto' src={`${imgUrl}${image}`} alt="Фото из фильма" />
      </div>
      <div className="movies-card__block">
        <p className='movies-card__title'>{title}</p>
        <button className='movies-card__btn'>
          <img className='movies-card__like' src={like} alt="Кнопка лайка" />
        </button>
      </div>
      <p className='movies-card__duration'>{ `${hours}ч ${minutes}м` }</p>
    </div>
  );
};

export default MoviesCard;