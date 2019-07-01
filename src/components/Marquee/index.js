import React from 'react';

import MarqueeText from 'react-native-marquee';

import { Container } from './styles';

const Marquee = ({ title }) => (
  <Container>
    <MarqueeText
      style={{ fontSize: 24 }}
      duration={3000}
      marqueeOnStart
      loop
      marqueeDelay={1000}
      marqueeResetDelay={1000}
    >
      {title}
    </MarqueeText>
  </Container>
);

export default Marquee;
