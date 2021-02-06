import React from 'react';
import { compose } from 'recompose';
import { connect } from "react-redux";
import { reduxForm, Field  } from 'redux-form';
import FormInput from '../General/FormInput';
import styles from './header.module.css';

const Header = ({
  authorized,
  userData,
  doLogin,
  handleSubmit,
}) => (
  <div className={styles.header}>
    <img src="assets/logo.png" alt="headerLogo" />
    <form
      className={styles.login}
      onSubmit={handleSubmit(this.doLogin.bind(this))}
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
    </form>
  </div>
);


export default compose(
  reduxForm({
    form: 'LoginForm',
  }),
  connect(
    (state) => ({
      authorized: true, 
    }),
    (dispatch) => ({
      doLogin() {
        console.log('login')
      }
    }),
  )
)(Header)
