import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { validateEmail, validateName } from '../../utils/utils';
import { AppContext } from '../Context/Context';
import Popup from '../Popup/Popup';

const PopupChangeProfile = ({setPopupVisible, setUserInfo}) => {

  const {name: stateName, email: stateEmail, formSuccess} = useContext(AppContext);
  const [isSbmitBtnDisabled, setIsSbmitBtnDisabled] = useState(true);
  const [name, setName] = useState(stateName)
  const [email, setEmail] = useState(stateEmail)

  const validation = () => {
    return validateName(name) && validateEmail(email) && (name !== stateName || email !== stateEmail)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(name, email);
  }

  useEffect(() => {
    if (validation()) {
      setIsSbmitBtnDisabled(false)
    } else {
      setIsSbmitBtnDisabled(true)
    }
  }, [name, email, setUserInfo])

  return (
    <Popup setPopupVisible={setPopupVisible}>
      <form action="#" onSubmit={handleSubmit} className='form'>
        <div className="form__inputs">
          <input 
            id='name' 
            value={name}
            className='form__input' 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <input 
            id='email'
            value={email}
            className='form__input' 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        { formSuccess && <p className='form__success'>{formSuccess}</p>}
        
        <button className='form__button' type='submit' disabled={isSbmitBtnDisabled}>Отправить</button>
      </form>
    </Popup>
  );
};

export default PopupChangeProfile;