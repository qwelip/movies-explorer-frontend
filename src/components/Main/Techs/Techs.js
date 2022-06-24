import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import TeckBlock from '../TeckBlock/TeckBlock';
import './Techs.css'

const Techs = () => {

  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

  return (
    <section className='techs'>
      <div className="wrapper">
        {<HeaderMain str='Технологии'/>} 
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          {techs.map( item => <TeckBlock str={item}/>)}
        </ul>
      </div>
    </section>
  );
};

export default Techs;