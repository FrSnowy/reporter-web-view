import React from 'react';
import { Container, Number, Text } from './elements';

export const TYPES = {
  GOOD: 'good',
  WARNING: 'warning',
  BAD: 'bad',
};

const CountBlock = ({ type, number, title, subtitle }) => <Container>
  <Number type = {type}>
    {number}
  </Number>
  <Text>
    <div>{title}</div>
    <div>{subtitle}</div>
  </Text>
</Container>

export default CountBlock;