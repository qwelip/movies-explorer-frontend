import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup/Popup';
import './Profile.css';

const Profile = ({handleLogout}) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Андрей!</h1>
      <div className="profile__wrapper">
        <div className="profile__line">
          <p className='profile__caption'>Имя</p>
          <p className='profile__text'>Андрей</p>
        </div>
        <div className="profile__line">
          <p className='profile__caption'>E-mail</p>
          <p className='profile__text'>qwe@qw.ru</p>
        </div>
      </div>
      <ul className='profile__links'>
        <button className='profile__link-btn' onClick={handleClick}>
          <li className='profile__link-edit'>Редактировать</li>
        </button>
        <Link className='profile__link-link' onClick={handleLogout} to='/signin'>
          <li className='profile__link-quit'>Выйти из аккаунта</li>
        </Link>
      </ul>
      <Popup isPopupOpen={isPopupOpen} handleClick={handleClick}/>
    </section>
  );
};

export default Profile;