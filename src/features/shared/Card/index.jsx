import React from 'react';
import * as Element from './elements';
import emptyIMG from './assets/empty.svg';

const Card = ({ children, stretch, title, withError = false, empty = false, link = '#' }) => (
  <Element.Wrapper stretch = {stretch} withError = {withError}>
    { title ? <Element.Title href = {link}>{title}</Element.Title> : null }
    <Element.InnerWrapper withTitle = {!!title}>
      {
        withError
          ? <Element.ReqErrorBlock>{withError}</Element.ReqErrorBlock>
          : empty
            ? <Element.EmptyImage>
                <img src = {emptyIMG} alt = 'Ничего не найдено' />
                <span>{empty}</span>
              </Element.EmptyImage>
            : children
      }
    </Element.InnerWrapper>
  </Element.Wrapper>
)

export default Card;