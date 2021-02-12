import React from 'react';
import { compose } from 'recompose';
import { connect } from "react-redux";
import { reduxForm, Field  } from 'redux-form';
import {
  Link,
} from 'react-router-dom';
import FormInput from '../General/FormInput';
import styles from './header.module.css';

const Header = ({
  authorized,
  userData,
  doLogin,
  handleSubmit,
}) => (
  <div className={styles.header} data-test="headerComponent">
    <Link
      to="/"
      className={styles.logo}
    >
      <img src="assets/logo.png" alt="headerLogo"/>
    </Link>
    {
      authorized ? (
        <Link
          to="/profile"
        >
          <button>Profile </button>
        </Link>
      ) : (
        <form
          className={styles.login}
          onSubmit={handleSubmit(doLogin.bind(this))}
        >
          <Field
            name="email"
            component={FormInput}
            placeholder="email"
          />
          <Field
            name="password"
            component={FormInput}
            placeholder="password"
          />
          <button type="submit">Login </button>
          <Link
            to="/register"
          >
            <button>Register </button>
          </Link>
        </form>
      )
    }
  </div>
);


export default compose(
  reduxForm({
    form: 'loginForm',
  }),
  connect(
    (state) => ({
      authorized: false, 
    }),
    (dispatch) => ({
      doLogin(values) {
        console.log('login', values)
      }
    }),
  )
)(Header);
