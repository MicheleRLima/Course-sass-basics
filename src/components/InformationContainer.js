import React from 'react';

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationContainer.sass';

function InformationContainer() {
  return (
    <section id='information-container'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(41) 9999-9999</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>nome@mail.com</p>
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
