import styled, { css } from 'styled-components';
import { getColor } from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const Block = styled.div`
  display: flex;
`;

export const Link = styled.a`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => getColor('clear-white', 100, props.theme)};
  border: 1px solid ${props => getColor('accent', 50, props.theme)};
  color: ${props => getColor('accent', 75, props.theme)};
  text-decoration: none;

  transition: border 125ms ease-in-out, color 125ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 8px;
  }

  &:hover {
    border: 1px solid ${props => getColor('accent', 80, props.theme)};
    color: ${props => getColor('accent', 90, props.theme)};
  }

  ${props => props.active && css`
    border: 1px solid ${props => getColor('success', 50, props.theme)};
    color: ${props => getColor('success-dark', 75, props.theme)};

    &:hover {
      border: 1px solid ${props => getColor('success', 80, props.theme)};
      color: ${props => getColor('success-dark', 90, props.theme)};
    }
  `}
`;