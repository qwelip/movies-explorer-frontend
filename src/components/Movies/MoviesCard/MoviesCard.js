import React from 'react';
import './MoviesCard.css';
import dislike from '../../../images/dislike.png';
import like from '../../../images/like.png';

import TEMP from '../../../images/TEMP.png';

const MoviesCard = ({title, length}) => {
  return (
    <div className='movies-card'>
      <img className='movies-card__foto' src={TEMP} alt="Фото из фильма" />
      <div className="movies-card__block">
        <p className='movies-card__title'>{title}</p>
        <button className='movies-card__btn'>
          <img className='movies-card__like' src={like} alt="Кнопка лайка" />
        </button>
      </div>
      <p className='movies-card__duration'>{length}</p>
    </div>
  );
};

export default MoviesCard;