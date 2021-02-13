import React from 'react';
import PropTypes from 'prop-types';
import styles from './formInput.module.css';

const FormInput = ({
  name,
  label,
  error,
  type,
  placeholder,
  onChange,
  value,
  handleBlur,
  bigStyles,
}) => (
  <div className={bigStyles ? `${styles.formInput} ${styles.big}` : styles.formInput}>
    {
      label && (
        <label>
          {label}:
          {
            error && (
              <span> {error}* </span>
            )
          }
        </label>
      )
    }
    <input
      onBlur={handleBlur}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      autoFocus={false}
      formNoValidate
    />
    {
      !label && (
        <label>
          {
            error && (
              <span> {error}* </span>
            )
          }
          &nbsp;
        </label>
      )
    }
  </div>
);

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
