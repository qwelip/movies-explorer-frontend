import React, { useRef } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { putMoviesToLocalStorage } from '../../utils/MoviesApi';
import './Movies.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Movies = () => {

  const [input, setInput] = useState('');
  const [isSearchShort, setIsSearchShort] = useState('off');
  const [sortedFilms, setSortedFilms] = useState([]);
  const [width, setWidth] = useState(0);
  const container = useRef(null);

  const handleSearch = () => {
    const movies = JSON.parse(localStorage.getItem('movieDb'));
    setSortedFilms(movies.filter( item => {
      if (isSearchShort === 'on') {
        return item.nameRU.toLowerCase().includes(input.toLowerCase()) && item.duration < 40
      }
      return item.nameRU.toLowerCase().includes(input.toLowerCase())
    }));
  }

  const resizeHandler = () => {
    setWidth(container.current.clientWidth);
  };

  useEffect(() => {
    if (localStorage.getItem('searchInput')) {
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
    if (input && !localStorage.getItem('movieDb')) {
      putMoviesToLocalStorage();
    }
  }, [input])

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section ref={container} className='movies'>
      <div className="wrapper">
        <SearchForm 
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          isSearchShort={isSearchShort}
          setIsSearchShort={setIsSearchShort}
        />
        { sortedFilms.length !== 0 && width ? 
          <MoviesCardList sortedFilms={sortedFilms} width={width}/>
          :
          <p className='movies__info'>Нет найденых фильмов</p>
        }
      </div>
    </section>
  );
};

export default Movies;