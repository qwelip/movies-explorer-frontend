import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <div className="wrapper">
        
        {<HeaderMain str='О проекте'/>}

        <div className="about-project__steps">
          <div className="about-project__step-column">
            <h3 className='about-project__step-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__step'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__column">
            <h3 className='about-project__step-title'>На выполнение диплома ушло 5 недель</h3>
          </div>
        </div>
        <div className="about-project__chart">
          <div className="about-project__chart-column about-project__chart-column_left">
            <div className="about-project__left-chart">
              <p className='about-project__chart-text about-project__chart-text_black'>1 неделя</p>
            </div>
            <p className='about-project__chart-note'>Back-end</p>
          </div>
          <div className="about-project__chart-column about-project__chart-column_right">
            <div className="about-project__right-chart">
              <p className='about-project__chart-text'>4 недели</p>
            </div>
            <p className='about-project__chart-note'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;