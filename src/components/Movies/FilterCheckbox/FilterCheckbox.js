import React from 'react';
import checkbox from '../../../images/checkbox.png';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className='filterCheckbox'>
      <p className='filterCheckbox__text'>Короткометражки</p>
      <img className='filterCheckbox__checkbox' src={checkbox} alt="Чек бокс" />
    </div>
  );
};

export default FilterCheckbox;