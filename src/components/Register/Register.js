import React from 'react';
import './Register.css';
import logo from '../../images/logo.png';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

  return (
    <section className='register'>
      <div className="register__wrapper">
        <Link to='/'>
          <img className='login__logo' src={logo} alt="Лого" />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <Form submitAction={registration}/>
      </div>
    </section>
  );
};

export default Register;