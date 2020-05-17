import React from 'react';
import { CardWrapper, CardTitle, CardInnerWrapper, ReqErrorBlock, EmptyImage } from './elements';
import emptyIMG from './assets/empty.svg';

const Card = ({ children, stretch, title, withError = false, empty = false }) => <CardWrapper stretch = {stretch} withError = {withError}>
  { title ? <CardTitle>{title}</CardTitle> : null }
  <CardInnerWrapper withTitle = {!!title}>
    {
      withError
        ? <ReqErrorBlock>{withError}</ReqErrorBlock>
        : empty
          ? <EmptyImage>
              <img src = {emptyIMG} alt = 'Ничего не найдено' />
              <span>{empty}</span>
            </EmptyImage>
          : children
    }
  </CardInnerWrapper>
</CardWrapper>

export default Card;