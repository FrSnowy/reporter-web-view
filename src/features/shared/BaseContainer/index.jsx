import React from 'react';
import * as Element from './elements';

const BaseContainer = ({ fullWidth = false, direction = 'column', justify = 'flex-start', children }) =>
  <Element.Container fullWidth = {fullWidth} direction = {direction} justify = {justify}>
    <Element.Inner>
      { children }
    </Element.Inner>
  </Element.Container>

export default BaseContainer;