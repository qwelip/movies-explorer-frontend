import React from 'react';
import './Register.css';
import logo from '../../images/logo.png';
import Form from '../Form/Form';

const Register = () => {
  return (
    <section className='register'>
      <div className="register__wrapper">
        <img className='register__logo' src={logo} alt="Лого" />
        <h1 className='register__title'>Добро пожаловать!</h1>
        <Form/>
      </div>
    </section>
  );
};

export default Register;