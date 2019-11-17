import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const TransactionWarapper = styled.section`
  max-width: 450px;
  display: grid;
  grid-gap: 10px 30px;
  padding: 5px;
  grid-template-areas:
    "senderName amount"
    "email amount";
  grid-template-rows: 30px 30px;
  grid-template-columns: 300px 100px;
  border: 1px solid grey;
`;

const NameAndEmail = styled.div`
  word-break: break-word;
  overflow: auto;
  padding-left: 5px;
`;

const Name = styled(NameAndEmail)`
  grid-area: senderName;
`;

const Email = styled(NameAndEmail)`
  grid-area: email;
`;

const Amount = styled.div`
  grid-area: amount;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  border: 1px solid #461234;
  font-size: 18px;
`;

const Transactions = props => {
  return (
    <>
      <SectionTitle>Transactions</SectionTitle>
      {props.transactions.map((transaction, index) => {
        return (
          <TransactionWarapper key={index}>
            <Name>{transaction.senderName}</Name>
            <Email>{transaction.email}</Email>
            <Amount>{transaction.amount}</Amount>
          </TransactionWarapper>
        )
      })}
    </>
  )
}

export default Transactions;
