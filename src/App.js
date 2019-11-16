import React from 'react';
import styled from 'styled-components';
import SendMoneyContainer from './components/SendMoney';
import AccountDetailsContainer from './components/AccountDetails/AccountDetailsContainer';

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Header = styled.header`
  text-align: center;
  padding: 1.2rem;
  background: #d8d1b6;
  grid-column: 1 / span 2;
  grid-row: 1;
`;

const Title = styled.h2`
  color: #121212;
  font-size: 24px;
`;
const SubTitle = styled.h3`
  color: #464646;
  font-size: 18px;
`;

function App() {
  return (
    <Container>
      <Header>
        <Title>Send Money</Title>
        <SubTitle>Personal Playground</SubTitle>
      </Header>
      <SendMoneyContainer></SendMoneyContainer>
      <AccountDetailsContainer></AccountDetailsContainer>
    </Container>
  );
}

export default App;
