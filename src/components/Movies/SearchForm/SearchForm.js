import React from 'react';
import './SearchForm.css';
import search from '../../../images/find.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form action="#" className='searchForm'>
      <input className='searchForm__input' type="text" placeholder='Фильм' required/>
      <button type='submit' className='searchForm__search-btn'>
        <img className='searchForm__search-img' src={search} alt="Кнопка поиска" />
      </button>
      <FilterCheckbox/>
    </form>
  );
};

export default SearchForm;