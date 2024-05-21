import React from 'react';

import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import avatar from '../img/avatar2.jpg';
import '../styles/components/sidebar.sass';

function SideBar() {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt='avatar' />
      <p className='title'>Desenvolvedora</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href='https://www.linkedin.com/in/michele-lima-91770130/'
        className='btn'
      >
        Download CV
      </a>
    </aside>
  );
}

export default SideBar;
