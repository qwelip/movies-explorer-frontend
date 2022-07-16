import React, { useContext } from 'react';
import { AppContext } from '../../Context/Context';
import './MoviesLikedCard.css';
import deleteLike from '../../../images/delete.png';
import { useState } from 'react';

const MoviesLikedCard = ({image, duration, trailerLink, nameRU, deleteLikeToMovie, movieId}) => {

  const { likedMovieDB, deleteLikedMovie } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(true);

  const hours = Math.trunc(duration/60);
  const minutes = duration % 60;

  const handleDislike = () => {
    const movie = likedMovieDB.find( item => item.localId === movieId)
    deleteLikeToMovie(movie.serverId)
      .then( res => {
        deleteLikedMovie(likedMovieDB.filter(item => item.localId !== movieId));
        setIsVisible(false);
      })
  }

  if (!isVisible) {
    return <></>
  }

  return (
    <div className='movies-card'>
      <div className="movies-card__foto-wrap">
        <a href={trailerLink} target="blank" className="movies-card__link">
          <img className='movies-card__foto' src={image} alt="Фото из фильма" />
        </a>
      </div>
      <div className="movies-card__block">
        <p className='movies-card__title'>{nameRU}</p>
        <button onClick={handleDislike} className='movies-card__btn'>
          <img className='movies-card__like' src={deleteLike} alt="Кнопка удаления" />
        </button>
      </div>
      <p className='movies-card__duration'>{ `${hours}ч ${minutes}м` }</p>
    </div>
  );
};

export default MoviesLikedCard;