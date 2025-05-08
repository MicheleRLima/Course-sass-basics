import React from 'react';

import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationContainer.sass';

function InformationContainer() {
  return (
    <section id='information-container'>
      <h2>Informações de contato</h2>
      <div className='info-card'>
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>michelelima232@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Paraná</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;
