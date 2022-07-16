import React from 'react';
import './MoviesCard.css';
import dislike from '../../../images/dislike.png';
import like from '../../../images/like.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/Context';

const MoviesCard = ({duration, image, trailerLink, addLikeToMovie, deleteLikeToMovie, year, country, director, description, nameRU, nameEN, id}) => {

  const [isLiked, setIsLiked] = useState(false);
  const { likedMovieDB, deleteLikedMovie, addLikedMovie } = useContext(AppContext);

  const imgUrl = 'https://api.nomoreparties.co';
  const hours = Math.trunc(duration/60);
  const minutes = duration % 60;

  const data = {
    year: year || 'not set',
    image: `${imgUrl}${image.url}`,
    country: country || 'not set',
    director: director || 'not set',
    duration: duration || 'not set',
    description: description || 'not set',
    trailerLink: trailerLink || 'not set',
    nameRU: nameRU || 'not set',
    nameEN: nameEN || 'not set',
    thumbnail: `${imgUrl}${image.formats.thumbnail.url}` || 'not set',
    movieId: id,
  }

  const handleLike = () => {
    if (!isLiked) {
      addLikeToMovie(data)
        .then((res) => {
          setIsLiked(true)
          addLikedMovie([...likedMovieDB, {localId: id, serverId: res.data._id}])
        })
        .catch(err => console.log(err))
    } else {
      const movieId = likedMovieDB.find( item => item.localId === id)
      deleteLikeToMovie(movieId.serverId)
        .then((res) => {
          deleteLikedMovie(likedMovieDB.filter(item => item.localId !== id))
          setIsLiked(false)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    if (likedMovieDB) {
      likedMovieDB.some( item => item.localId === id) && setIsLiked(true) 
      console.log({likedMovieDB})
    }
  }, [likedMovieDB])

  return (
    <div className='movies-card'>
      <div className="movies-card__foto-wrap">
        <a href={trailerLink} target="blank" className="movies-card__link">
          <img className='movies-card__foto' src={`${imgUrl}${image.url}`} alt="Фото из фильма" />
        </a>
      </div>
      <div className="movies-card__block">
        <p className='movies-card__title'>{nameRU}</p>
        <button onClick={handleLike} className='movies-card__btn'>
          { isLiked ?
            <img className='movies-card__like' src={like} alt="Кнопка лайка" />
            :
            <img className='movies-card__like' src={dislike} alt="Кнопка лайка" />
          }
        </button>
      </div>
      <p className='movies-card__duration'>{ `${hours}ч ${minutes}м` }</p>
    </div>
  );
};

export default MoviesCard;