import React from 'react';

import {
  Container, Top, Logo, Title,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
logo = require('~/assets/Nubank_Logo.png');

export default class Header extends React.Component {
  render() {
  return (
    <Container>
    <Top>
       {/* <Logo source={require('~/assets/Nubank_Logo.png')} size={20} />  */}
       <Logo source={logo} size={20} /> 
      <Title> {this.props.title} </Title>
    </Top>
    {/* <Icon name="keyboard-arrow-down" size={20} color="#000" /> */}
  </Container>
  )

  }
}
