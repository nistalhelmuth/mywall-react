import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Formik } from 'formik';
import FormInput from '../General/FormInput';
import * as selectors from '../../reducers';
import styles from './register.module.css';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  genre: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  password2: Yup.string()
    .required('Required'),
});

export const customPropTypes = {
  doRegister: PropTypes.func.isRequired,
}

const registerCamps = [
  {
    name: "Email",
    id: "email",
    placeholder: "email",
  },
  {
    name: "Name",
    id: "name",
    placeholder: "name",
  },
  {
    name: "City",
    id: "city",
    placeholder: "city",
  },
  {
    name: "Genre",
    id: "genre",
    placeholder: "genre",
  },
  {
    name: "Password",
    id: "password",
    placeholder: "password",
  },
  {
    name: "Check Password",
    id: "password2",
    placeholder: "password",
  }
]

const Register = ({
  doRegister,
}) => (
  <div className={styles.register}>
    <Formik 
      initialValues={{
        email: undefined,
        name: undefined,
        city: undefined,
        genre: undefined,
        password: undefined,
        password2: undefined,
      }}
      validationSchema={SignupSchema}
      validate={values => {
        const errors = {};
        if (values.password !== values.password2) {
          errors.password2 = 'passwords do not match';
        }
        return errors;

      }}
      onSubmit={(values) => {
        doRegister(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1>
              You are welcome!
            </h1>
            <h5>
              we are happy to see you
            </h5>
            <div className={styles.camps}>
              {
                registerCamps.map((camp) => (
                  <FormInput
                    name={camp.id}
                    label={camp.name}
                    error={touched[camp.id] && errors[camp.id]}
                    placeholder={camp.name}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    value={values[camp.id]}
                    bigStyles
                  />
                ))
              }
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )
      }
    </Formik>
  </div>
)

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

