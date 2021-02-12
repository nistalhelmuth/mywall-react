import React from 'react';
import PropTypes from 'prop-types';
import styles from './formtextarea.module.css'

const FormTextArea = ({
  input: { onChange },
  placeholder,
  type,
  value,
}) => (
  <textarea
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={({ target }) => onChange(target.value)}
    autoFocus={false}
    formNoValidate
    className={styles.formTextArea}
  />
);

FormTextArea.propTypes = {
  // change to object
  input: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormTextArea;
