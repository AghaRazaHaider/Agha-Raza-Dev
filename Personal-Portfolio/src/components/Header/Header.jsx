import React from 'react';
import './header.css';

const Header = () => {

  
  const navLinks = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Skills',
      link: '/skills'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ];
  
  return (
    <header>
    <h2>Agha's Portfolio</h2>
      <ul>
        {navLinks.map((i, index) => (
          <li key={index}>
            <a href={i.link}>{i.name}</a>
          </li>
        ))}
      </ul>
      <div className='headerbtn'>
      <button>Hire</button>
      <button>Fork</button>
      </div>
    </header>
  );
};

export default Header;