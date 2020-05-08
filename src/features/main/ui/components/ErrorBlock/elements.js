import styled from 'styled-components';

export const ErrorsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 32px);

  @media (max-width: 512px) {
    & > div:last-child {
      display: none;
    }
  }
`;