import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { validateEmail, validateName } from '../../utils/utils';
import { AppContext } from '../Context/Context';
import './Form.css';

const Form = ({submitAction}) => {

  const { pathname } = useLocation()
  const { formError, setFormError } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSbmitBtnDisabled, setIsSbmitBtnDisabled] = useState(true);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const btnCaption = pathname === '/signin' ? 'Войти' : pathname === '/profile' ? 'Оправить' : 'Зарегистрироваться';
  const caption = pathname === '/signin' ? 'Регистрация' : 'Войти';
  const link = pathname === '/signin' ? '/signup' : '/signin';

  const handleSubmit = (e) => {
    e.preventDefault();
    pathname === '/signin' ? submitAction(password, email) : submitAction(name, password, email);
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

  const validationInputs = () => {
    if (pathname === '/signin') {
      return password.length > 1 && validateEmail(email)
    } else {
      return validateName(name) && password.length > 1 && validateEmail(email)
    }
  }

  useEffect(() => {
    if (validationInputs()) {
      setIsSbmitBtnDisabled(false)
    } else {
      setIsSbmitBtnDisabled(true)
    }
  }, [name, email, password])

  useEffect(() => {
    if(formError) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [formError])

  return (
    <form action="#" onSubmit={handleSubmit} className='form' >
      <div className="form__inputs">
        {(pathname === '/profile' || pathname === '/signup') &&
          <div className='form__input-block'>
            <label ref={nameRef} className='form__label'>Имя</label>
            <input 
              id='name' 
              value={name}
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
            value={email}
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
              value={password}
              // className='form__input form__input_error' 
              className='form__input' 
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
              onFocus={handleFocus} 
              onBlur={handleBlur}
              required
            />
            {/* <label className='form__password-error-text'>Что-то пошло не так...</label> */}
          </div>
        }
      </div>
      
      <div className="form__footer">
        { formError && <p className="form__footer__error">{formError}</p> }
        <button className='form__button' type='submit' disabled={isSbmitBtnDisabled}>{btnCaption}</button>
        {pathname !== '/profile' && 
          <span className='form__line'>
            <p className='form__text'>Ещё не зарегистрированы?</p>
            <Link onClick={() => setFormError('')} className='form__link' to={link}>
              {caption}
            </Link>
          </span>
        }
      </div>
    </form>
  );
};

export default Form;