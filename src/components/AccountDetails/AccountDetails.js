import React from 'react';
import SectionTitle from '../common/SectionTitle';

const AccountDetails = props => {
  return (
    <>
      <SectionTitle>My account</SectionTitle>
      <div>Total sent: {props.totalSent}</div>
      <div>Left available: {props.currentAmount}</div>
    </>
  )
}

export default AccountDetails;
