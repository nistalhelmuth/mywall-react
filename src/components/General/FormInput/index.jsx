import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  value,
}) => (
  <input
    id={id}
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    autoFocus={false}
    formNoValidate
  />
);

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
