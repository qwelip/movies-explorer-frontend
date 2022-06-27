import React, { useRef, useState } from 'react';
import './Form.css';

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = (e) => {
    switch(e.target.id) {
      case 'name': {
        nameRef.current.classList.add('form__label_type_name_active')
        break
      }
      case 'email': {
        emailRef.current.classList.add('form__label_type_email_active')
        break
      }
      case 'password': {
        passwordRef.current.classList.add('form__label_type_password_active')
        break
      }
      default:
        return
    }
  }

  const handleBlur = (e) => {
    switch(e.target.id) {
      case 'name': {
          !name && nameRef.current.classList.remove('form__label_type_name_active')
        break
      }
      case 'email': {
        !email && emailRef.current.classList.remove('form__label_type_email_active')
        break
      }
      case 'password': {
        !password && passwordRef.current.classList.remove('form__label_type_password_active')
        break
      }
      default:
        return
    }
  }

  return (
    <form action="#" onSubmit={handleSubmit} className='form' >
      <div className="form__inputs">
        <label ref={nameRef} className='form__label form__label_type_name'>Имя</label>
        <input 
          id='name' 
          className='form__input' 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          required
        />

        <label ref={emailRef} className='form__label form__label_type_email'>E-mail</label>
        <input 
          id='email'
          className='form__input' 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
          required
        />

        <label ref={passwordRef} className='form__label form__label_type_password'>Password</label>
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
      
      <div className="form__footer">
        <button className='form__button' type='submit'>Зарегистрироваться</button>
        <span className='form__line'>
          <p className='form__text'>Уже зарегистрированы?</p>
          <a className='form__link' href="">Войти</a>
        </span>
      </div>
    </form>
  );
};

export default Form;