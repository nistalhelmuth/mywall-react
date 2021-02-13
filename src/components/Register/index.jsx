import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useFormik } from 'formik';
import FormInput from '../General/FormInput';
import * as selectors from '../../reducers';
import styles from './register.module.css';

export const customPropTypes = {
  doRegister: PropTypes.func.isRequired,
}

const Register = ({
  doRegister,
}) => {
  const formik = useFormik({
    initialValues: {
      name: undefined,
      city: undefined,
      genre: undefined,
      password: undefined,
      passwordValidation: undefined,
    },
    onSubmit: values => {
      doRegister(values);
    },
  });
  return(
    <div className={styles.register}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1>
          You are welcome!
        </h1>
        <h5>
          we are happy to see you
        </h5>
        <div className={styles.camps}>
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormInput
            id="name"
            name="name"
            placeholder="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <FormInput
            id="city"
            name="city"
            placeholder="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <FormInput
            id="genre"
            name="genre"
            placeholder="genre"
            onChange={formik.handleChange}
            value={formik.values.genre}
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormInput
            id="passwordValidation"
            name="passwordValidation"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.passwordValidation}
          />
        </div>
        <button type="submit">Register </button>
      </form>
    </div>
  )
};

Register.propTypes = customPropTypes;

export default connect(
  (state) => ({
    authorized: selectors.getIfAuthorized(state), 
  }),
  (dispatch) => ({
    doRegister(values) {
      console.log('register', values)
    }
  }),
)(Register)

