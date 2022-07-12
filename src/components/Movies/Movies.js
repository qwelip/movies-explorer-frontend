import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { getMoviesDB, putMoviesToLocalStorage } from '../../utils/MoviesApi';
import './Movies.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Movies = () => {

  const [input, setInput] = useState('');
  const [isSearchShort, setIsSearchShort] = useState(false);
  const [sortedFilms, setSortedFilms] = useState([]);

  const handleSearch = () => {
    const movies = JSON.parse(localStorage.getItem('moviwDb'));
    setSortedFilms(movies.filter( item => {
      if (isSearchShort) {
        return item.nameRU.toLowerCase().includes(input.toLowerCase()) && item.duration < 40
      }
      return item.nameRU.toLowerCase().includes(input.toLowerCase())
    }));
  }

  useEffect(() => {
    if(localStorage.getItem('searchInput')) {
      setInput(localStorage.getItem('searchInput'));
      setSortedFilms(JSON.parse(localStorage.getItem('lastSortedFilms')));
      setIsSearchShort(localStorage.getItem('isOnlyShortFimls'));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('searchInput', input);
    localStorage.setItem('isOnlyShortFimls', isSearchShort);
    localStorage.setItem('lastSortedFilms', JSON.stringify(sortedFilms));
  }, [sortedFilms])

  useEffect(() => {
    if (input && !localStorage.getItem('moviwDb')) {
      putMoviesToLocalStorage();
    }
  }, [input])

  return (
    <section className='movies'>
      <div className="wrapper">
        <SearchForm 
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          isSearchShort={isSearchShort}
          setIsSearchShort={setIsSearchShort}
        />
        { sortedFilms.length !== 0 ? 
          <MoviesCardList sortedFilms={sortedFilms}/>
          :
          <p className='movies__info'>Нет найденых фильмов</p>
        }
      </div>
    </section>
  );
};

export default Movies;