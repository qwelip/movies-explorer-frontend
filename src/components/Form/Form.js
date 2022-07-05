import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Form.css';

const Form = () => {

  const { pathname } = useLocation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const btnCaption = pathname === '/signin' ? 'Войти' : pathname === '/profile' ? 'Оправить' : 'Зарегистрироваться';
  const caption = pathname === '/signin' ? 'Регистрация' : 'Войти';
  const link = pathname === '/signin' ? '/signup' : '/signin';

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = (e) => {
    switch(e.target.id) {
      case 'name': {
        nameRef.current.classList.add('form__label_active')
        break
      }
      case 'email': {
        emailRef.current.classList.add('form__label_active')
        break
      }
      case 'password': {
        passwordRef.current.classList.add('form__label_active')
        break
      }
      default:
        return
    }
  }

  const handleBlur = (e) => {
    switch(e.target.id) {
      case 'name': {
          !name && nameRef.current.classList.remove('form__label_active')
        break
      }
      case 'email': {
        !email && emailRef.current.classList.remove('form__label_active')
        break
      }
      case 'password': {
        !password && passwordRef.current.classList.remove('form__label_active')
        break
      }
      default:
        return
    }
  }

  return (
    <form action="#" onSubmit={handleSubmit} className='form' >
      <div className="form__inputs">
        {(pathname === '/profile' || pathname === '/signup') &&
          <div className='form__input-block'>
            <label ref={nameRef} className='form__label'>Имя</label>
            <input 
              id='name' 
              className='form__input' 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              onFocus={handleFocus} 
              onBlur={handleBlur}
              required
            />
          </div>
        }

        <div className='form__input-block'>
          <label ref={emailRef} className='form__label'>E-mail</label>
          <input 
            id='email'
            className='form__input' 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            onFocus={handleFocus} 
            onBlur={handleBlur}
            required
          />
        </div>

        {pathname !== '/profile' && 
          <div className='form__input-block'>
            <label ref={passwordRef} className='form__label'>Password</label>
            <input 
              id='password' 
              className='form__input form__input_error' 
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
              onFocus={handleFocus} 
              onBlur={handleBlur}
              required
            />
            <label className='form__password-error-text'>Что-то пошло не так...</label>
          </div>
        }
      </div>
      
      <div className="form__footer">
        <button className='form__button' type='submit'>{btnCaption}</button>
        {pathname !== '/profile' && 
          <span className='form__line'>
            <p className='form__text'>Ещё не зарегистрированы?</p>
            <Link className='form__link' to={link}>
              {caption}
            </Link>
          </span>
        }
      </div>
    </form>
  );
};

export default Form;