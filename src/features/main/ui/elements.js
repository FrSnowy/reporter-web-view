import styled from 'styled-components';

export const CardsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CardColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardsCell = styled.div`
  width: ${props => props.wide ? 55 : 45}%;
  height: 1px;
  min-height: 400px;
  box-sizing: border-box;

  &:first-of-type {
    padding: 16px 24px 16px 0;
  }

  &:last-of-type {
    padding: 16px 0 16px 24px;
  }

  @media (max-width: 1023px) {
    &:first-of-type {
      padding: 16px 8px 16px 0;
    }

    &:last-of-type {
      padding: 16px 0 16px 8px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    &:first-of-type, &:last-of-type { padding: 16px 24px; }
  }

  @media (max-width: 512px) {
    &:first-of-type, &:last-of-type { padding: 16px 8px; }
  }
`;