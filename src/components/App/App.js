import React from 'react';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

const App = () => {
  return (
    <main className='main'>
      <Header/>
      <Profile/>
      {/* <Main/> */}
      {/* <Movies/> */}
      {/* <SavedMovies/> */}
      <Footer/>
    </main>
  );
};

export default App;