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
    {
      (type === "text" || type === "password") && (
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
      )
    }
    {
      type === "select" && (
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
      )
    }
    
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  handleBlur: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any ,
    label: PropTypes.string,
  })),
  bigStyles: PropTypes.bool,
};

FormInput.defaultProps = {
  type: "text",
  bigStyles: false,
  placeholder: "",
};

export default FormInput;
