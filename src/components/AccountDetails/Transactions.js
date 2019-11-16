import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const SenderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const TransactionWarapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Transactions = props => {
  console.log('props', props)
  return (
    <>
      <SectionTitle>Transactions</SectionTitle>
      {props.transactions.map((transaction, index) => {
        return (
          <TransactionWarapper key={index}>
            <SenderDetails>
              <span>{transaction.senderName}</span>
              <span>{transaction.email}</span>
            </SenderDetails>
            <span>{transaction.amount}</span>
          </TransactionWarapper>
        )
      })}
    </>
  )
}

export default Transactions;