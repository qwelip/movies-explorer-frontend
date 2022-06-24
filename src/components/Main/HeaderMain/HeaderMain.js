import React from 'react';
import './HeaderMain.css';

const HeaderMain = ({str}) => {
  return (
    <>
      <h2 className='HeaderMain__title'>{str}</h2>
    </>
  );
};

export default HeaderMain;