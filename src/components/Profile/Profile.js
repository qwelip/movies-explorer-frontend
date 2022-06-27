import React from 'react';
import Form from '../Form/Form';
import './Profile.css';

const Profile = () => {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Андрей!</h1>
      <div className="profile__wrapper">
        <Form/>
      </div>
    </section>
  );
};

export default Profile;