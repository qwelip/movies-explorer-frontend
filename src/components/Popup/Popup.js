import React from 'react';
import close from '../../images/close.png';
import './Popup.css';

const Popup = ({setPopupVisible, children}) => {

  return (
    <div className={'popup'}>
      <div className="popup__modal">
        <div className="popup__container">
          <button className='popup__close' onClick={() => setPopupVisible(false)}>
            <img src={close} alt="Кнопка закрыть" />
          </button> 
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;