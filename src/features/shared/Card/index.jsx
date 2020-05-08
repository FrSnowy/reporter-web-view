import React from 'react';
import { CardWrapper, CardTitle, CardInnerWrapper, ReqErrorBlock } from './elements';

const Card = ({ children, stretch, title, withError = false }) => <CardWrapper stretch = {stretch} withError = {withError}>
  { title ? <CardTitle>{title}</CardTitle> : null }
  <CardInnerWrapper withTitle = {!!title}>
    {
      withError
        ? <ReqErrorBlock>{withError}</ReqErrorBlock>
        : children
    }
  </CardInnerWrapper>
</CardWrapper>

export default Card;