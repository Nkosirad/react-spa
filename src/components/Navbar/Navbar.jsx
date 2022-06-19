import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hamburger } from '../hamburger/Hamburger';
import { Logo } from '../logo/Logo';
import styles from './navbar.module.css';


/*
  Navigation component

  displays, the top navigation bar with links to home or about page
*/
export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openStyle = isOpen ? styles.open : ''
  return (
    <div className={styles.container}>
      <Logo />
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      <div className={`${styles.menu} ${openStyle}`}>
        <NavLink onClick={() => setIsOpen(!isOpen)} exact activeClassName='selected' to='/'>Home</NavLink>
        <NavLink onClick={() => setIsOpen(!isOpen)} exact activeClassName='selected' to='/about'>About</NavLink>
      </div>
    </div>
  );
};
