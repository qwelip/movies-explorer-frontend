import React from 'react';
import BtnMore from '../BtnMore/BtnMore';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const testData = [ 
  {title: 'Киноальманах «100 лет дизайна»', length: 13},
  {title: 'Gimme Danger: История Игги и The Stooges', length: 12},
  {title: 'Gimme Danger: История Игги и The Stooges', length: 54},
  {title: 'Баския: Взрыв реальности', length: 34},
  {title: 'По волнам: Искусство звука в кино', length: 34},
  {title: 'Дженис: Маленькая девочка грустит', length: 20},
  {title: 'Пи Джей Харви: A dog called money', length: 40},
  {title: 'Скейт — кухня', length: 60},
  {title: 'Gimme Danger: История Игги и The Stooges', length: 30},
  {title: 'Gimme Danger: История Игги и The Stooges', length: 10},
]

const MoviesCardList = () => {
  return (
    <>
      <section className='movies-card-list'>
        {testData.map( (film, index) => <MoviesCard key={index} title={film.title} length={film.length}/>)}
      </section>
      <BtnMore/>
    </>
  );
};

export default MoviesCardList;