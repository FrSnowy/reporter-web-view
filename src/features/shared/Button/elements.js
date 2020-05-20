import styled, { css } from 'styled-components';
import { Container as SharedContainer } from '../elements';
import { getColor } from '../../../utils/colors';

export const Container = styled(SharedContainer)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 23px;
  color: ${props => getColor('accent-opposite', 100, props.theme)};
  transition: background-color 125ms ease-in-out;

  ${props => props.state === 'default' && css`
    background-color: ${props => getColor('accent', 90, props.theme)};
    cursor: pointer;
    pointer-events: all;
    
    &:hover {
      background-color: ${props => getColor('accent', 100, props.theme)};
    }
  `};

  ${props => props.state === 'success' && css`
    background-color: ${props => getColor('accent-success', 100, props.theme)};
    pointer-events: none;
  `};

  ${props => props.state === 'disabled' && css`
    background-color: ${props => getColor('accent-disabled', 100, props.theme)};
    pointer-events: none;
  `};
`;