import React from 'react';
import { CardWrapper, CardTitle, CardInnerWrapper } from './elements';

const Card = ({ children, stretch, title, withError = false }) => <CardWrapper stretch = {stretch} withError = {withError}>
  { title ? <CardTitle>{title}</CardTitle> : null }
  <CardInnerWrapper withTitle = {!!title}>
    { children }
  </CardInnerWrapper>
</CardWrapper>

export default Card;