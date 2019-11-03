import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px 20px 0 0;
`;

const Label = styled.label`
  display: block;
  padding-bottom: 8px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 6px;
  color: #3b3b3b;
  border 1px grey solid;
  border-radius: 3px;
  font-size: 14px;
  background: #f3f3f3;
  width: 200px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
  font-size: 12px;
`;

const InputField = props => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.onChange(name, value)
  }

  return (
    <Wrapper>
      <Label>
        {props.label}:
      </Label>
      <Input
        name={props.fieldName}
        type="text"
        value={props.value}
        onChange={handleChange}
      />
      {
        props.error
          ? <ErrorMessage>{props.error}</ErrorMessage>
          : null
      }
    </Wrapper>
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
