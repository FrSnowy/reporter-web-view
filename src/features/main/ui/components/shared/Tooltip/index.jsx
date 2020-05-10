import styled from 'styled-components';
import { getColor } from '../../../../../../utils/colors';

export default styled.div`
  font-size: 13px;
  line-height: 19px;
  color: ${props => getColor('accent-opposite', 100, props.theme)};
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  top: -4px;
  left: 0;
  display: none;
  background: ${props => getColor('content-main', 85, props.theme)};
  transform: translateY(-100%);
  white-space: nowrap;

  @media (max-width: 512px) {
    left: 0;
    z-index: 1000;
  }
`;