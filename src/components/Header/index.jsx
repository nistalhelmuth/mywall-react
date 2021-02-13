import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { compose } from "redux";
import { useFormik } from 'formik';
import {
  Link,
  withRouter
} from 'react-router-dom';
import FormInput from '../General/FormInput';
import * as selectors from '../../reducers';
import styles from './header.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
}

const Header = ({
  authorized,
  history,
  doLogin,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      doLogin(values, null, 2);
    },
  });
  return(
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
            data-test="authorizedComponent"
          >
            <button>Profile </button>
          </Link>
        ) : (
          <form
            data-test="unAuthorizedComponent"
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
           
            <button onClick={() => history.push("/register")}>Register </button>
          </form>
        )
      }
    </div>
)};

Header.propTypes = customPropTypes;

export default compose(
  withRouter,
  connect(
    (state) => ({
      authorized: selectors.getIfAuthorized(state), 
    }),
    (dispatch) => ({
      doLogin(values) {
        console.log('login', values)
      }
    }),
  )
)(Header)
