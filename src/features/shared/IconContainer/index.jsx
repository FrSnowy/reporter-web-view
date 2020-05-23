import styled from 'styled-components';
import Tooltip from '../Tooltip';

export default styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  background-size: cover;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  img { width: 14px; height: 14px };  

  &:hover {
    ${Tooltip} {
      display: block;
    }
  }
`;