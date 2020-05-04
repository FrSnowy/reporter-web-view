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
  width: ${props => props.wide ? 60 : 40}%;
  height: 1px;
  min-height: 400px;
  padding: 16px 24px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    padding: 16px 8px;
    width: ${props => props.wide ? 55 : 45}%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px 24px;
  }

  @media (max-width: 512px) {
    padding: 16px 8px;
  }
`;