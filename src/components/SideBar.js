import React from 'react';

import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import avatar from '../img/avatar2.jpg';
import '../styles/components/sidebar.sass';

function SideBar() {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt='avatar' />
      <p className='title'>Desenvolvedora full stack júnior</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href='https://drive.google.com/file/d/1R0Ux4ea3J-tWjOJIoHdseywEz9OXvvsg/view?usp=sharing'
        className='btn'
        target='_blank'
        rel='noreferrer'
      >
        Ver Currículo
      </a>
    </aside>
  );
}

export default SideBar;
