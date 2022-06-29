import React from 'react';
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
  return (
    <main className='main'>
      {/* <Header/> */}
      {/* <Login/> */}
      <Register/>
      {/* <Profile/> */}
      {/* <Main/> */}
      {/* <Movies/> */}
      {/* <SavedMovies/> */}
      {/* <Footer/> */}
      {/* <PageNotFound/> */}
    </main>
  );
};

export default App;