import styled, { keyframes } from 'styled-components';

const showMeUp = keyframes`
  0% {
    left: 100%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
`;

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  animation: ${showMeUp} 1s;
`;