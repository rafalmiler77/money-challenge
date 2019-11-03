import React from 'react';

const AccountDetails = props => {
  return (
    <>
      <h1>My account</h1>
      <div>Total sent: {props.totalSent}</div>
      <div>Left available: {props.currentAmount}</div>
    </>
  )
}

export default AccountDetails;