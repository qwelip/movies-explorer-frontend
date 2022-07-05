import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <div className="wrapper">
        <SearchForm/>
        <MoviesCardList/>
      </div>
    </section>
  );
};

export default SavedMovies;