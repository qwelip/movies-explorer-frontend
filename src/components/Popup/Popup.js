import React from 'react';
import Form from '../Form/Form';
import close from '../../images/close.png';
import './Popup.css';

const Popup = ({isPopupOpen, handleClick}) => {

  return (
    <div className={isPopupOpen ? 'popup' : 'popup popup_closed'}>
      <div className="popup__modal">
        <div className="popup__container">
          <button className='popup__close' onClick={handleClick}>
            <img src={close} alt="Кнопка закрыть" />
          </button> 
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Popup;