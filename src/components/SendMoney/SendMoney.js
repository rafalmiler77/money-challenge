import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from '../InputField/InputField';
import { validationPropType } from '../../Validation';
import withResolution from '../../HOC/withResolution';

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  border 1px grey solid;
  border-radius: 3px;
`;

const SendMoney = props => {
  const handleInputChange = (name, value) => {
    props.onHandleChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  }
  return (
    <section>
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleInputChange}
          fieldName='senderName'
          label='Name'
          value={props.senderName}
          error={props.errors['senderName']}
        />
        <InputField
          onChange={handleInputChange}
          fieldName='email'
          label='E-mail'
          value={props.email}
          error={props.errors['email']}
        />
        <InputField
          onChange={handleInputChange}
          fieldName='amount'
          label='Amount'
          value={props.amount}
          error={props.errors['amount']}
        />

        <Button type='submit' value='Submit'>Submit</Button>
      </form>
    </section>
  )
}

SendMoney.propTypes = {
  senderName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  ...validationPropType
};

export default withResolution()(SendMoney);
