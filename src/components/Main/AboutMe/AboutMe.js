import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './AboutMe.css';
import avatar from '../../../images/Me.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className="wrapper">
        <HeaderMain str='Студент'/>
        <div className="about-me__about">
          <div className="about-me__column">
            <h3 className='about-me__name'>Андрей</h3>
            <p className='about-me__info'>Фронтенд-разработчик, 34 года</p>
            <p className='about-me__text'>Я родился и живу в Ярославле, закончил факультет телекоммуникаций. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. С 2020 по 2021 год работал в компании Тензор на позиции фронтэндера. 
            После того, как прошёл курс по веб-разработке уволился и начал искать новое место работы и на данный момент уже устроился.
            </p>
            <nav className='about-me__links'>
              <a className='about-me__link' href="https://www.facebook.com/" target="blank">Facebook</a>
              <a className='about-me__link' href="https://github.com/qwelip" target="blank">Github</a>
            </nav>
          </div>
          <div className="about-me__column-foto">
            <img className='about-me__img' src={avatar} alt="Студент" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;