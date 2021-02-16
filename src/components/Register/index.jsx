import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../General/FormInput';
import * as selectors from '../../reducers';
import * as userActions from '../../actions/user';
import styles from './register.module.css';

export const customPropTypes = {
  doRegister: PropTypes.func.isRequired,
  stateErrors: PropTypes.object,
}

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
    type: "select",
    options: [
      {
        label: 'Female',
        value: 'F',
      },
      {
        label: 'Male',
        value: 'M',
      },
    ],
  },
  {
    name: "Password",
    id: "password",
    placeholder: "password",
    type: "password",
  },
  {
    name: "Check Password",
    id: "password2",
    placeholder: "password",
    type: "password",
  }
]

const Register = ({
  doRegister,
  stateErrors,
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
                    bigStyles
                    error={touched[camp.id] && (errors[camp.id] || (stateErrors && stateErrors[camp.id]))}
                    handleBlur={handleBlur}
                    label={camp.name}
                    name={camp.id}
                    onChange={handleChange}
                    options={camp.options}
                    placeholder={camp.name}
                    type={camp.type}
                    value={values[camp.id]}
                  />
                ))
              }
            </div>
            <button type="submit">
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
    stateErrors: selectors.getUserErrors(state),
  }),
  (dispatch) => ({
    doRegister(values) {
      dispatch(userActions.registerUser({
        email: values.email,
        name: values.name,
        city: values.city,
        genre: values.genre,
        password: values.password,
      }))
    }
  }),
)(Register)

