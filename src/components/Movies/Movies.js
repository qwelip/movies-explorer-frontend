import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  return (
    <section className='movies'>
      <div className="wrapper">
        <SearchForm/>
        <MoviesCardList/>
      </div>
    </section>
  );
};

export default Movies;