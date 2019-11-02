import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField/InputField';
import { validationPropType } from '../Validation';

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
          value={props.senderName}
          error={props.errors['senderName']}
        />
        <InputField
          onChange={handleInputChange}
          fieldName='email'
          value={props.email}
          error={props.errors['email']}
        />
        <InputField
          onChange={handleInputChange}
          fieldName='amount'
          value={props.amount}
          error={props.errors['amount']}
        />

        <button className='submit-button' type='submit' value='Submit'>Submit</button>
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

export default SendMoney;
