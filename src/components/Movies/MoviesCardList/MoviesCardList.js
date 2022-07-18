import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BtnMore from '../BtnMore/BtnMore';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({sortedFilms, width, addLikeToMovie, deleteLikeToMovie}) => {

  const [renderedFilms, setRenderedFilms] = useState([]);
  const [cardsRendered, setCardsRendered] = useState(0);
  const { pathname } = useLocation();
  let addMovies;
  let rows = 4;

  if (width >= 1232) {
    addMovies = 4;
  }
  if (width >= 954 && width < 1232) {
    addMovies = 3;
  }
  if (width >= 686 && width < 953) {
    addMovies = 2;
  }
  if (width < 686) {
    addMovies = 1;
    rows = 5;
  }

  const addMoreCards = () => {
    const newCards = sortedFilms.filter((item, index) => index >= cardsRendered && index < cardsRendered + addMovies);
    setRenderedFilms(prev => [...prev, ...newCards]);
    setCardsRendered(prev => prev + addMovies);
  }

  useEffect(() => {
    if (sortedFilms) {
      const initFilms = sortedFilms.filter( (item, index) => index >= 0 && index < rows * addMovies);
      setRenderedFilms(initFilms);
      setCardsRendered(addMovies);
    }
  }, [sortedFilms])

  console.log('renderedFilms', renderedFilms.length)
  console.log('sortedFilms', sortedFilms.length)

  return (
    <>
      <section className='movies-card-list'>
        {renderedFilms.map( film => <MoviesCard key={film.id} addLikeToMovie={addLikeToMovie} deleteLikeToMovie={deleteLikeToMovie} {...film}/>)}
      </section>
      {pathname === '/movies' && renderedFilms.length !== sortedFilms.length && <BtnMore onClick={addMoreCards}/> }
    </>
  );
};

export default MoviesCardList;