import React from 'react';

import {
  Container, Top, Logo, Title,
} from './styles';

const logo = require('~/assets/Nubank_Logo.png');

const Header = ({ title }) => (
  <Container>
    <Top>
      <Logo source={logo} size={20} />
      <Title> {title} </Title>
    </Top>
  </Container>
);

export default Header;
