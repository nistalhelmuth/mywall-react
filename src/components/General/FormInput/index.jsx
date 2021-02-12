import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  input: { onChange },
  placeholder,
  type,
  value,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={({ target }) => onChange(target.value)}
    autoFocus={false}
    formNoValidate
  />
);

FormInput.propTypes = {
  // change to object
  input: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
