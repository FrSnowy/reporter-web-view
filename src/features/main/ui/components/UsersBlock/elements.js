import styled from 'styled-components';
import NumbersBlock from '../shared/NumbersBlock';

export const UsersNumbersBlock = styled(NumbersBlock)`
  & > div:first-child {
    @media (max-width: 1023px) {
      display: none;
    }
    @media (max-width: 767px) {
      display: flex;
    }
  }
`;

export const UsersContentBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 512px) {
    & > div:nth-child(3) { display: none }
    & > div:nth-child(4) { display: none }
  }
`;