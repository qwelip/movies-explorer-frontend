import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import '../../vendor/normalize.css';
import { AppContext } from '../Context/Context';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupChangeProfile from '../PopupChangeProfile/PopupChangeProfile';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

const App = () => {

  const history = useHistory();
  const { setFormError, setName, setEmail } = useContext(AppContext);
  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [jwt, setJwt] = useState('');
  const [isPopupChangeProfileVisible, setIsPopupChangeProfileVisible ] = useState(false);

  const goToMoviesPage = () => {
    history.push('/movies');
  }

  const goToSignInPage = () => {
    history.push('/signin');
  }

  const onSignOut = () => {
    localStorage.removeItem('jwt');
    setJwt(''); 
    setLoggedIn(false);
    goToSignInPage();
  }

  const registration = (name, password, email) => {
    mainApi.registration(name, password, email)
      .then( data => {
        if (data.message) {
          return Promise.reject(data.message)
        }
        localStorage.setItem('jwt', data.token);
        setFormError('')
        setJwt(data.token);
        setLoggedIn(true);
        goToMoviesPage();
      })
      .catch((err) => {
        setFormError(err)
      })
  }

  const authorization = (password, email) => {
    mainApi.authorization(password, email)
      .then(data => {
        if (data.message) {
          return Promise.reject(data.message)
        }
        localStorage.setItem('jwt', data.token);
        setFormError('')
        setJwt(data.token);
        setLoggedIn(true);
        goToMoviesPage();
      })
      .catch(err => {
        setFormError(err)
      })
  }

  const setUserInfo = (name, email) => {
    mainApi.setUserInfo(name, email, jwt)
      .then( res => {
        setName(res.data.name);
        setEmail(res.data.email);
        setIsPopupChangeProfileVisible(false);
      })
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then( res => {
          setJwt(jwt);
          setLoggedIn(true);
          setName(res.data.name);
          setEmail(res.data.email);
          goToMoviesPage();
        })
        .catch( err => {
          console.log(err);
          goToSignInPage();
        })
    }
  }, [loggedIn])

  return (
    <>
      {(pathname === '/' || 
        pathname === '/movies' || 
        pathname === '/saved-movies' || 
        pathname === '/profile') && 
        <Header loggedIn={loggedIn}/>
      }

        <main className='main'>
          <Switch>
            <Route exact path='/'>
              <Main/> 
            </Route>

            <Route path='/signin'>
              <Login authorization={authorization}/>
            </Route>

            <Route path='/signup'>
              <Register registration={registration}/>
            </Route>

            <ProtectedRoute
              loggedIn={loggedIn}
              component={Movies}
              path='/movies'
            />

            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              path='/profile'
              handleLogout={onSignOut}
              setPopupVisible={setIsPopupChangeProfileVisible}
            />

            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              path='/saved-movies'
            />

            <Route path='*'>
              <PageNotFound/>
            </Route>
          </Switch>

          { isPopupChangeProfileVisible &&
            <PopupChangeProfile
              setPopupVisible={setIsPopupChangeProfileVisible}
              setUserInfo={setUserInfo}
            />
          }
        </main>

      {(pathname === '/' || 
        pathname === '/movies' || 
        pathname === '/saved-movies' || 
        pathname === '/profile') && 
        <Footer/>
      }
    </>
  );
};

export default App;