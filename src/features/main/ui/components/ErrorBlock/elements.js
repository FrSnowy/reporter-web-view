import styled, { keyframes } from 'styled-components';

const showMeUp = keyframes`
  0% {
    left: -100%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 32px);
  position: relative;
  top: 0;
  left: 0;
  animation: ${showMeUp} 1s;

  @media (max-width: 512px) {
    & > div:last-child {
      display: none;
    }
  }
`;