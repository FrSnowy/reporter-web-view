import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;