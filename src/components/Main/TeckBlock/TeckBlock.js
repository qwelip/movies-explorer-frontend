import React from 'react';
import './TeckBlock.css';

const TeckBlock = ({str}) => {
  return (
    <li className='teckBlock'>
      <p className='teckBlock__text'>{str}</p>
    </li>
  );
};

export default TeckBlock;