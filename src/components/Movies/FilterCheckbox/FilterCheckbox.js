import React from 'react';
import checkbox from '../../../images/checkbox.png';
import checkboxDisable from '../../../images/checkbox-disable.png';
import './FilterCheckbox.css';

const FilterCheckbox = ({isSearchShort, setIsSearchShort}) => {
  return (
    <div className='filterCheckbox' onClick={() => setIsSearchShort( prev => prev === 'off' ? 'on' : 'off' )}>
      <p className='filterCheckbox__text'>Короткометражки</p>
      { isSearchShort === 'off' ?
        <img className='filterCheckbox__checkbox' src={checkboxDisable} alt="Чек бокс" />
        :
        <img className='filterCheckbox__checkbox' src={checkbox} alt="Чек бокс" />
      }
    </div>
  );
};

export default FilterCheckbox;