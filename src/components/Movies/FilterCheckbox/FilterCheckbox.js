import React from 'react';
import checkbox from '../../../images/checkbox.png';
import checkboxDisable from '../../../images/checkbox-disable.png';
import './FilterCheckbox.css';

const FilterCheckbox = ({isSearchShort, setIsSearchShort}) => {
  return (
    <div className='filterCheckbox' onClick={() => setIsSearchShort( prev => !prev)}>
      <p className='filterCheckbox__text'>Короткометражки</p>
      { isSearchShort ?
        <img className='filterCheckbox__checkbox' src={checkbox} alt="Чек бокс" />
        :
        <img className='filterCheckbox__checkbox' src={checkboxDisable} alt="Чек бокс" />
      }
    </div>
  );
};

export default FilterCheckbox;