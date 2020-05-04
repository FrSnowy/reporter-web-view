import React from 'react';
import { ContainerElement, InnerElement } from './elements';

const BaseContainer = ({ fullWidth = false, direction = 'column', justify = 'flex-start', children }) =>
  <ContainerElement fullWidth = {fullWidth} direction = {direction} justify = {justify}>
    <InnerElement>
      { children }
    </InnerElement>
  </ContainerElement>

export default BaseContainer;