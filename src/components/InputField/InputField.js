import React from 'react';
import PropTypes from 'prop-types';

const InputField = props => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.onChange(name, value)
  }

  return (
    <div className="subsection">
      <label>
        {props.fieldName}:
      </label>
      <input
        name={props.fieldName}
        type="text"
        value={props.value}
        onChange={handleChange}
      />
      {
        props.error
          ? <div>{props.error}</div>
          : null
      }
    </div>
  )
}

InputField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default InputField;
