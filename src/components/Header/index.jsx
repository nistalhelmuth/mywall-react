import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useFormik } from 'formik';
import {
  Link,
} from 'react-router-dom';
import FormInput from '../General/FormInput';
import styles from './header.module.css';

const HeaderCore = ({
  authorized,
  // userData,
  doLogin,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return(
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
            onSubmit={formik.handleSubmit}
          >
            <FormInput
              id="email"
              name="email"
              type="email"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
)};

/**
Header.propTypes = {
  //authorized: PropTypes.bool,
  //doLogin: PropTypes.func.isRequired,
  //handleSubmit: PropTypes.func.isRequired,
}
 */

export default connect(
  (state) => ({
    authorized: false, 
  }),
  (dispatch) => ({
    doLogin(values) {
      console.log('login', values)
    }
  }),
)(HeaderCore)
