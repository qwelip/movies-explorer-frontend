import React from 'react';
import MoviesLikedCard from '../Movies/MoviesLikedCard/MoviesLikedCard';
import './MoviesLikedCardList.css';

const MoviesLikedCardList = ({filmsToRender, deleteLikeToMovie}) => {
  return (
    <section className='movies-liked-card-list'>
      { filmsToRender.map( item => <MoviesLikedCard key={item.id} deleteLikeToMovie={deleteLikeToMovie} {...item}/>) }
    </section>
  );
};

export default MoviesLikedCardList;