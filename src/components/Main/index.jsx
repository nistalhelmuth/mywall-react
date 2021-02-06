import React from 'react';
import styles from './main.module.css';

const Post = () => (
  <div className={styles.post}>
  </div>
)

const Main = () => (
  <div className={styles.main}>
    <div className={styles.wall}>
      {
        [0,0,0,0,0].map((post) => (<Post />))
      }
    </div>
  </div>
);

export default Main;
