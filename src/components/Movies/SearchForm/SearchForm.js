import React, { useState } from 'react';
import search from '../../../images/find.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({handleSearch, input, setInput, isSearchShort, setIsSearchShort}) => {

  const [isValidInput, setIsValidInput] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setIsValidInput(false);
      return
    }
    setIsValidInput(true);
    handleSearch();
  }

  return (
    <form action="#" onSubmit={handleSubmit} className='searchForm'>
      { !isValidInput && <p className='searchForm__error'>Пустое значение в поисковой строке</p> }
      <input 
        value={input} 
        onChange={ e => setInput(e.target.value)}
        className='searchForm__input' 
        type="text" 
        placeholder='Фильм' 
      />
      <button type='submit' className='searchForm__search-btn'>
        <img className='searchForm__search-img' src={search} alt="Кнопка поиска" />
      </button>
      <FilterCheckbox isSearchShort={isSearchShort} setIsSearchShort={setIsSearchShort}/>
    </form>
  );
};

export default SearchForm;