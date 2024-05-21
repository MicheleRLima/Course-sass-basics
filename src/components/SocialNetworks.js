import React from 'react';

import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/michele-lima-91770130/',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    url: 'https://github.com/MicheleRLima',
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/mizinha232/',
  },
];

function SocialNetworks() {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href={network.url}
          target='_blank'
          className='social-btn'
          id={network.name}
          key={network.name}
          rel='noreferrer'
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
