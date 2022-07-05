import React from 'react';
import logo from '../../images/logo.png';
import './Login.css';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <div className="login__wrapper">
        <Link to='/'>
          <img className='login__logo' src={logo} alt="Лого" />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <Form/>
      </div>
    </section>
  );
};

export default Login;