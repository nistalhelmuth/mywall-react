import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Register from '../Register';
import Profile from '../Profile';
import styles from './app.module.css';

const options = [
  {
    word: 'main',
    path: '/main',
    component: Main,
  },
  {
    word: 'profile',
    path: '/profile/:profileId',
    component: Profile,
  },
  {
    word: 'register',
    path: '/register',
    component: Register,
  },
];

const App = () => (
  <div className={styles.app}>
    <Header />
    <Switch>
      {
        options.map((prop) => {
          const View = prop.component;
          return (
            <Route
              path={prop.path}
              render={() => <View />}
              key={prop.word}
            />
          );
        })
      }
      <Redirect to="/main" />
    </Switch>
  </div>
);

export default App;
