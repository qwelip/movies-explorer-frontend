import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

const App = () => {

  const { pathname } = useLocation()
  return (
    <>
      {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && <Header/>}
        <main className='main'>
          <Switch>
            <Route exact path='/'>
              <Main/> 
            </Route>
            <Route path='/movies'>
              <Movies/>
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies/>
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route path='/signin'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <Register/>
            </Route>
            <Route path='*'>
              <PageNotFound/>
            </Route>
          </Switch>
        </main>
      {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && <Footer/>}
    </>
  );
};

export default App;