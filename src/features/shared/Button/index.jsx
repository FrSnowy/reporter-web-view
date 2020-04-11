import React from 'react';
import { ButtonContainer } from './elements';

const STATES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  DISABLED: 'disabled',
};

class Button extends React.Component {
  render() {
    const { children, onClick = () => { }, state = STATES.DEFAULT } = this.props;
    return (
      <ButtonContainer onClick = {onClick} state = {state}>
        {children}
      </ButtonContainer>
    )
  }
}

export default Button;