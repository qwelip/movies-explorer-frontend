import React from 'react';
import Form from '../Form/Form';
import './Profile.css';

const Profile = () => {
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
        <li className='profile__link-edit'>Редактировать</li>
        <li className='profile__link-quit'>Выйти из аккаунта</li>
      </ul>
    </section>
  );
};

export default Profile;