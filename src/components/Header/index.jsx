import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { reduxForm, Field  } from 'redux-form';
import {
  Link,
} from 'react-router-dom';
import FormInput from '../General/FormInput';
import styles from './header.module.css';

const HeaderCore = ({
  authorized,
  // userData,
  doLogin,
  handleSubmit,
}) => (
  <div className={styles.header} data-test="headerComponent">
    <Link
      to="/"
      className={styles.logo}
      data-test="profileComponent"

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
          //onSubmit={handleSubmit(doLogin.bind(this))}
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

/**
Header.propTypes = {
  //authorized: PropTypes.bool,
  //doLogin: PropTypes.func.isRequired,
  //handleSubmit: PropTypes.func.isRequired,
}
 */

const Header = reduxForm({
  form: 'loginForm',
})(HeaderCore)

export default connect(
  (state) => ({
    authorized: false, 
  }),
  (dispatch) => ({
    doLogin(values) {
      console.log('login', values)
    }
  }),
)(Header)
