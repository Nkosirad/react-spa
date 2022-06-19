import React from 'react';
import styles from './hamburger.module.css';

/*
  Hamburger menu
*/
export const Hamburger = (props) => {
  return (
    <div {...props} className={styles.container}>
      <span />
      <span />
      <span />
    </div>
  );
};
