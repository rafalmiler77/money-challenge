import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #141414;
  margin: 20px 0 12px;
`;

const SectionTitle = props => (
  <Title>{props.children}</Title>
);

export default SectionTitle;
