import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Link,
  withRouter
} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../General/FormInput';
import * as selectors from '../../reducers';
import * as userActions from '../../actions/user';
import styles from './header.module.css';

export const customPropTypes = {
  authorized: PropTypes.bool,
  doLogin: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  stateErrors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  doLogout: PropTypes.func.isRequired,
  authId: PropTypes.string,
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const registerCamps = [
  {
    name: "Email",
    id: "email",
    placeholder: "email",
  },
  {
    name: "Password",
    id: "password",
    placeholder: "password",
    type: "password",
  },
]

const Header = ({
  authorized,
  doLogin,
  history,
  stateErrors,
  name,
  doLogout,
  authId,
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
        <div
          data-test="authorizedComponent"
          className={styles.greedings}
        >
          <h3>
            Welcome back! {name}
          </h3>
          <button onClick={() => history.push(`/profile/${authId}`)}>Profile </button>
          <button onClick={() => doLogout()}>Log Out </button>
        </div>
      ) : (
        <Formik 
          data-test="unAuthorizedComponent"
          initialValues={{
            email: undefined,
            password: undefined,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            doLogin(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
              <div className={styles.login}>
                <form
                  className={styles.login}
                  onSubmit={handleSubmit}
                >
                  {
                    registerCamps.map((camp) => (
                        <FormInput
                          key={camp.id}
                          handleBlur={handleBlur}
                          name={camp.id}
                          onChange={handleChange}
                          error={touched[camp.id] && (errors[camp.id] || (stateErrors && stateErrors[camp.id]))}
                          options={camp.options}
                          placeholder={camp.name}
                          type={camp.type}
                          value={values[camp.id]}
                        />
                    ))
                  }
                  <button type="submit">Login </button>
                </form>
                <button onClick={() => history.push("/register")}>Register </button>
              </div>
            )
          }
        </Formik>
      )
    }
  </div>
);

Header.propTypes = customPropTypes;

export default compose(
  withRouter,
  connect(
    (state) => ({
      authId: selectors.getAuthId(state),
      name: selectors.getAuthName(state),
      authorized: selectors.getIfAuthorized(state),
      stateErrors: selectors.getUserErrors(state),
    }),
    (dispatch) => ({
      doLogin(values) {
        dispatch(userActions.doLogin({
          email: values.email,
          password: values.password,
        }))
      },
      doLogout() {
        dispatch(userActions.doLogout())
      }
    }),
  )
)(Header)
