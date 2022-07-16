import React, { useRef } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { putMoviesToLocalStorage } from '../../utils/MoviesApi';
import './Movies.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../../vendor/preloader/Preloader';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';

const Movies = ({addLikeToMovie, deleteLikeToMovie, getLikedMovie}) => {

  const { setAllLikedMovie } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [isSearchShort, setIsSearchShort] = useState('off');
  const [sortedFilms, setSortedFilms] = useState([]);
  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const container = useRef(null);

  const handleSearch = () => {
    setIsLoading(true)
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
    setIsLoading(false)
  }, [sortedFilms])

  useEffect(() => {
    if (input && !localStorage.getItem('movieDb')) {
      putMoviesToLocalStorage();
    }
  }, [input])

  useEffect(() => {
    getLikedMovie()
      .then(res => {
        const idsLikedMovies = res.data.map( item => ({localId: item.movieId, serverId: item._id}));
        setAllLikedMovie(idsLikedMovies);
      })

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <section ref={container} className='movies'>
      <div className="wrapper">
        { isLoading && <Preloader/> }
        <SearchForm 
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          isSearchShort={isSearchShort}
          setIsSearchShort={setIsSearchShort}
        />
        { sortedFilms.length !== 0 && width && !isLoading ? 
          <MoviesCardList sortedFilms={sortedFilms} width={width} addLikeToMovie={addLikeToMovie} deleteLikeToMovie={deleteLikeToMovie}/>
          :
          <p className='movies__info'>Нет найденых фильмов</p>
        }
      </div>
    </section>
  );
};

export default Movies;