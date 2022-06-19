import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'

import profile from '../../images/avatar.png';
import { Button } from '../../components/button/Button';

/*
  Home page

  main component, displays introduction and links to other pages.
*/
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
          <div className={styles.devInfo}>
            <p className={styles.hello}>hi there!</p>
            <h2 className={styles.intro}>
             I am Nkosinathi. <br />
              <span className={styles.title}>I&apos;m passionate about <span> Software Development</span>.</span>
            </h2>
            <Button onClick={() => navigate('about')} title={'About me'} showIcon={true} />
          </div>
          <div className={styles.profilePicContainer}>
            <div className={styles.profile}>
              <div className={styles.imageContainer}>
                <img alt='profile-pic' src={profile} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
