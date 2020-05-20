import React from 'react';
import * as Element from './elements';

const STATES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  DISABLED: 'disabled',
};

const Button = ({ children, state = STATES.DEFAULT, onClick = () => { } }) => (
  <Element.Container onClick = {onClick} state = {state}>
    {children}
  </Element.Container>
);

export default Button;