import React from 'react';
import PropTypes from 'prop-types';

const SendMoney = props => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
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

        <div className="subsection">
          <label>
            Name:
          </label>
          <input
            name="senderName"
            type="text"
            value={props.senderName}
            onChange={handleChange}
          />
          {
            typeof props.senderNameError === 'string'
              ? <div>{props.senderNameError}</div>
              : null
          }
        </div>

        <div className="subsection">
          <label>
            Email adress:
          </label>
          <input
            name="email"
            type="text"
            value={props.email}
            onChange={handleChange} />
        </div>

        <div className="subsection">
          <label>
            Amount:
          </label>
          <input
            name="amount"
            type="text"
            value={props.amount}
            onChange={handleChange} />
        </div>
        <button className="submit-button" type="submit" value="Submit">Submit</button>
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
};

export default SendMoney;