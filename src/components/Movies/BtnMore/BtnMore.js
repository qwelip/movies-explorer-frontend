import React from 'react';
import './BtnMore.css';

const BtnMore = ({onClick}) => {
  return (
    <button onClick={onClick} className='btn-more'>
      Еще
    </button>
  );
};

export default BtnMore;