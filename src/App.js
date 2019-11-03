import React from 'react';
import styled from 'styled-components';
import SendMoneyContainer from './components/SendMoney';
import AccountDetailsContainer from './components/AccountDetails/AccountDetailsContainer';

const ContentContainer = styled.main`
  padding: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Header = styled.header`
  text-align: center;
  padding: 2rem;
  background: papayawhip;
`;

function App() {
  return (
    <div className="App">
      <Header>
        Send Money
      </Header>
      <ContentContainer>
        <SendMoneyContainer></SendMoneyContainer>
        <AccountDetailsContainer></AccountDetailsContainer>
      </ContentContainer>
    </div>
  );
}

export default App;
