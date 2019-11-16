import React from 'react';
import { connect } from 'react-redux';
import AccountDetails from './AccountDetails';
import Transactions from './Transactions';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const AccountDetailsContainer = props => {
  const totalSent = props.initialAmount - props.currentAmount;
  const transactionsProps = ({
    transactions: props.transactions
  });
  const accountProps = ({
    totalSent,
    currentAmount: props.currentAmount,
  });

  return (
    <Wrapper>
      <AccountDetails {...accountProps}/>
      <Transactions {...transactionsProps}/>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  transactions: state.transactions,
  initialAmount: state.initialAccountValue,
  currentAmount: state.currentAccountValue,
})

export default connect(mapStateToProps)(AccountDetailsContainer);
