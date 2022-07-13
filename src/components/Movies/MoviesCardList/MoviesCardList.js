import React, { useEffect } from 'react';
import { useState } from 'react';
import BtnMore from '../BtnMore/BtnMore';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({sortedFilms, width}) => {

  const [renderedFilms, setRenderedFilms] = useState([]);
  const [cardsRendered, setCardsRendered] = useState(0);
  let addMovies;

  if (width >= 1232) {
    addMovies = 4
  }
  if (width >= 954 && width < 1232) {
    addMovies = 3
  }
  if (width >= 686 && width < 953) {
    addMovies = 2
  }
  if (width < 686) {
    addMovies = 1
  }

  const addMoreCards = () => {
    const newCards = sortedFilms.filter((item, index) => index >= cardsRendered && index < cardsRendered + addMovies);
    setRenderedFilms(prev => [...prev, ...newCards]);
    setCardsRendered(prev => prev + addMovies);
  }

  useEffect(() => {
    if (sortedFilms) {
      const initFilms = sortedFilms.filter( (item, index) => index >= 0 && index < addMovies);
      setRenderedFilms(initFilms);
      setCardsRendered(addMovies);
    }
  }, [sortedFilms])

  return (
    <>
      <section className='movies-card-list'>
        {renderedFilms.map( film => <MoviesCard key={film.id} title={film.nameRU} duration={film.duration} image={film.image.url}/>)}
      </section>
      {renderedFilms.length !== sortedFilms.length && <BtnMore onClick={addMoreCards}/> }
    </>
  );
};

export default MoviesCardList;