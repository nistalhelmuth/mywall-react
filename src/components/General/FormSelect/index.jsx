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
  options,
}) => (
  <div className={bigStyles ? styles.formInput : ''}>
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
    <select
      onBlur={handleBlur}
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      autoFocus={false}
      formNoValidate
    >
      <option />
      {
        options.map((option) => (
          <option value={option.value}>{option.label}</option>

        ))
      }
    </select>
  </div>
);

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
