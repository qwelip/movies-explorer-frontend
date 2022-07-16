import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import MoviesLikedCardList from '../MoviesLikedCardList/MoviesLikedCardList';

const SavedMovies = ({getLikedMovie, deleteLikeToMovie}) => {

  const [likedMovies, setLikedMovies] = useState([]);
  const [sortedFilms, setSortedFilms] = useState([]);
  const [input, setInput] = useState('');
  const [isSearchShort, setIsSearchShort] = useState('off');

  const handleSearch = () => {
    setSortedFilms(likedMovies.filter( item => {
      if (isSearchShort === 'on') {
        return item.nameRU.toLowerCase().includes(input.toLowerCase()) && item.duration < 40
      }
      return item.nameRU.toLowerCase().includes(input.toLowerCase())
    }));
  }

  console.log({sortedFilms})

  useEffect(() => {
    getLikedMovie()
      .then(res => setLikedMovies(res.data))
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
        { sortedFilms.length !== 0 ? 
          <MoviesLikedCardList sortedFilms={sortedFilms} deleteLikeToMovie={deleteLikeToMovie}/>
          :
          <p className='saved-movies__info'>Нет найденых фильмов</p>
        }
      </div>
    </section>
  );
};

export default SavedMovies;