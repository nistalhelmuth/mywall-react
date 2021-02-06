import React from 'react';
import Header from '../Header';
import Main from '../Main';
import styles from './app.module.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    
    <Main />
    {/** <Profile> */}
  </div>
);

export default App;
