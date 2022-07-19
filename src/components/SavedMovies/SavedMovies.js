import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import MoviesLikedCardList from '../MoviesLikedCardList/MoviesLikedCardList';
import { useContext } from 'react';
import { AppContext } from '../Context/Context';

const SavedMovies = ({getLikedMovie, deleteLikeToMovie, checkAuth}) => {

  const [likedMovie, setLikedMovie] = useState([]);
  const [filmsToRender, setFilmsToRender] = useState([]);
  const {likedMovieDB} = useContext(AppContext)
  const [input, setInput] = useState('');
  const [isSearchShort, setIsSearchShort] = useState('off');

  const handleSearch = () => {
    setFilmsToRender(likedMovie.filter( item => {
      if (isSearchShort === 'on') {
        return item.nameRU.toLowerCase().includes(input.toLowerCase()) && item.duration < 40
      }
      return item.nameRU.toLowerCase().includes(input.toLowerCase())
    }));
  }

  useEffect(() => {
    getLikedMovie(localStorage.getItem('jwt'))
      .then(res => setLikedMovie(res.data))
  }, [likedMovieDB])

  useEffect(() => {
    if (likedMovie && input) {
      handleSearch();
    }
  }, [isSearchShort])

  useEffect(() => {
    checkAuth()
    getLikedMovie(localStorage.getItem('jwt'))
      .then(res => {setLikedMovie(res.data); setFilmsToRender(res.data)})
  }, [])

  return (
    <section className='saved-movies'>
      <div className="wrapper">
        <SearchForm 
          handleSearch={handleSearch} 
          input={input} 
          setInput={setInput} 
          isSearchShort={isSearchShort}
          setIsSearchShort={setIsSearchShort}
        />
        { filmsToRender && filmsToRender.length !== 0 ? 
          <MoviesLikedCardList filmsToRender={filmsToRender} deleteLikeToMovie={deleteLikeToMovie}/>
          :
          <p className='saved-movies__info'>Нет найденых фильмов</p>
        }
      </div>
    </section>
  );
};

export default SavedMovies;