import React from 'react';
import Resume from '../Resume.png'
import '../CV.css'

function CV() {

  return (
    <div className='CV'>
    <section id="skills">
      <img src={Resume} alt="My resume"/>
    </section>
    </div>
  );
}

export default CV;
