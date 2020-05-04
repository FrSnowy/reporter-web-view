import styled from 'styled-components';
import { getColor } from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  position: relative;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 54px;
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => getColor('content-main', 85, props.theme)};
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: ${props => getColor('content-main', 85, props.theme)};
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 16px 32px;
  background-color: ${props => getColor('clear-white', 100, props.theme)};
  border: 1px solid ${props => getColor('shadow', 15, props.theme)};
  border-radius: 8px;
  box-shadow: 0 1px 2px 2px ${props => getColor('shadow', 10, props.theme)};
  transition: box-shadow 125ms ease-in-out;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 1px 2px 2px ${props => getColor('shadow', 15, props.theme)};
  }
`;