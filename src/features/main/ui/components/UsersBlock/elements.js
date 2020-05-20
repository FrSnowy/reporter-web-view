import styled, { keyframes } from 'styled-components';
import SharedNumbers from '../shared/NumbersBlock';

export const NumbersBlock = styled(SharedNumbers)`
  & > div:first-child {
    @media (max-width: 1023px) {
      display: none;
    }
    @media (max-width: 767px) {
      display: flex;
    }
  }
`;

const showMeUp = keyframes`
  0% {
    top: 100%;
    opacity: 0;
  }
  100%: {
    top: 0;
    opacity: 1;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;

  animation: ${showMeUp} 1s;

  @media (max-width: 512px) {
    & > div:nth-child(3) { display: none }
    & > div:nth-child(4) { display: none }
  }
`;