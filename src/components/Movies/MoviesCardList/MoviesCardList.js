import React, { useEffect } from 'react';
import { useRef } from 'react';
import BtnMore from '../BtnMore/BtnMore';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({sortedFilms}) => {

  const [size, setSize] = React.useState({});
  const container = useRef(null);

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = container.current || {};
    setSize({ clientHeight, clientWidth });
    console.log(container.current);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <section ref={container} className='movies-card-list'>
        {sortedFilms.map( film => <MoviesCard key={film.id} title={film.nameRU} duration={film.duration} image={film.image.url}/>)}
      </section>
      <BtnMore/>
    </>
  );
};

export default MoviesCardList;