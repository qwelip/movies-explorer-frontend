import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <p className='footer__year'>© 2020</p>
          <nav className='footer__nav'>
            <a className='footer__link' href="">Яндекс.Практикум</a>
            <a className='footer__link' href="">Github</a>
            <a className='footer__link' href="">Facebook</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;