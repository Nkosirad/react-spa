import React from 'react';
import styles from './button.module.css';
import { MdArrowDownward } from 'react-icons/md';

// Button component takes, 3 parameters
/*
 title - string. Title of the button
 showIcon - bool. Show or hide icon
 onClick - function. On click event handler
*/

export const Button = ({ title, showIcon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title} {showIcon && <MdArrowDownward className={styles.icon} />}
    </button>
  );
};
