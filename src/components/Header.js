import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <header className='notifications'>
      <div className='header'>
        <h1 className='header__title'>Notifications</h1>
        <span className='header__number'>3</span>
      </div>
      <button className='notifications__mark-as-read'>Mark all as read</button>
    </header>
  );
};

export default Header;