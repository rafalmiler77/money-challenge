import React from 'react';

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

export default SendMoney;