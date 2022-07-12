import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

const App = () => {

  const history = useHistory();
  const { pathname } = useLocation()

  const [loggedIn, setLoggedIn] = useState(true)
  const [jwt, setJwt] = useState('');

  const goToMoviesPage = () => {
    history.push('/movies');
  }

  const goToSignInPage = () => {
    history.push('/signin');
  }

  const onSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    goToSignInPage();
    setJwt('');
  }

  const registration = (name, password, email) => {
    mainApi.registration(name, password, email)
      .then( data => {
        localStorage.setItem('jwt', data.token);
        setJwt(data.token);
        setLoggedIn(true);
        goToMoviesPage();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const authorization = (password, email) => {
    mainApi.authorization(password, email)
      .then(data => {
        localStorage.setItem('jwt', data.token);
        setJwt(data.token);
        setLoggedIn(true);
        goToMoviesPage();
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then( res => {
          setJwt(jwt);
          setLoggedIn(true);
        })
        .catch( err => {
          console.log(err);
          goToSignInPage();
        })
    }
  }, [])

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