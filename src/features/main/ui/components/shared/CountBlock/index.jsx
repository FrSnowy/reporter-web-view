import React from 'react';
import * as Count from './elements';

export const TYPES = {
  GOOD: 'good',
  WARNING: 'warning',
  BAD: 'bad',
};

const CountBlock = ({ type, number, title, subtitle }) => <Count.Container>
  <Count.Number type = {type}>
    {number}
  </Count.Number>
  <Count.Text>
    <div>{title}</div>
    <div>{subtitle}</div>
  </Count.Text>
</Count.Container>

export default CountBlock;