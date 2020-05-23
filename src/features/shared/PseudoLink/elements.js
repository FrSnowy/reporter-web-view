import styled, { css } from 'styled-components';
import { getColor } from '../../../utils/colors';

export const Link = styled.div`
  font-size: 14px;
  line-height: 23px;
  border-bottom: 1px solid transparent;
  transition: color 125ms ease-in-out, border-bottom 125ms ease-in-out;

  ${props => props.state === 'default' && css`
    cursor: pointer;
    pointer-events: all;
    color: ${props => getColor('accent', 70, props.theme)};

    &:hover {
      color: ${props => getColor('accent', 100, props.theme)};
      border-bottom: 1px solid ${props => getColor('accent-opposite', 100, props.theme)};
    }
  `};

  ${props => props.state === 'disabled' && css`
    pointer-events: none;
    color: ${props => getColor('disabled', 100, props.theme)};
  `};
`;