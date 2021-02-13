import React from 'react';
import PropTypes from 'prop-types';
import styles from './formtextarea.module.css'

const FormTextArea = ({
  id,
  name,
  placeholder,
  onChange,
  value,
}) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    autoFocus={false}
    formNoValidate
    className={styles.formTextArea}
  />
);

FormTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormTextArea;
