import React from 'react';
import styles from './about.module.css';


/*

  About page

  displays information about the developer
*/
export const About = () => {
  return (
    <div id='about' className={styles.container}>
      <h2 className={styles.intro}>I'm Nkosinathi</h2>
      <p>
        I am a tech enthusiast with a growing appetite for learning new
        things.<br /> Fun, loving & caring.
        Hard worker, problem solver and always willing<br /> to assist others where I can.
      </p>

      <p>
        I would love the opportunity to be part of your Graduate Programme <br />at SovTech to
        add value to your organization by applying the skills I have<br />  learned and
        to also learn as much as possible for my personal growth.
      </p>
    </div>
  );
};
