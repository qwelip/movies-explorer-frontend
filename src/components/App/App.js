import React from 'react';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

const App = () => {
  return (
    <main className='main'>
      <Header/>
      <Main/>
      <Footer/>
    </main>
  );
};

export default App;