import React from 'react';
import MoviesLikedCard from '../Movies/MoviesLikedCard/MoviesLikedCard';
import './MoviesLikedCardList.css';

const MoviesLikedCardList = ({sortedFilms, deleteLikeToMovie}) => {
  return (
    <section className='movies-liked-card-list'>
      { sortedFilms.map( item => <MoviesLikedCard key={item.id} deleteLikeToMovie={deleteLikeToMovie} {...item}/>) }
    </section>
  );
};

export default MoviesLikedCardList;