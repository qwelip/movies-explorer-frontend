import React from 'react';
import { useContext } from 'react';
import close from '../../images/close.png';
import { AppContext } from '../Context/Context';
import './Popup.css';

const Popup = ({setPopupVisible, children}) => {

  const { setFormSuccess } = useContext(AppContext);

  const handleClick = () => {
    setFormSuccess('');
    setPopupVisible(false);
  }

  return (
    <div className={'popup'}>
      <div className="popup__modal">
        <div className="popup__container">
          <button className='popup__close' onClick={handleClick}>
            <img src={close} alt="Кнопка закрыть" />
          </button> 
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;