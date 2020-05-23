import styled, { css } from 'styled-components';
import { getColor } from '../../../../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-right: 1px solid ${props => getColor('content-lighter', 35, props.theme)};
  padding-right: 12px;
  margin-right: 12px;
  flex: none;

  @media (max-width: 512px) {
    border-right: none;
    border-bottom: 1px solid ${props => getColor('content-lighter', 35, props.theme)};
    padding-right: 0;
    margin-right: 0;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
`;

export const Number = styled.div`
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  ${props => props.type === 'good' && css`
    color: ${getColor('success', 100, props.theme)};
  `};

  ${props => props.type === 'warning' && css`
    color: ${getColor('warning', 100, props.theme)};
  `};

  ${props => props.type === 'bad' && css`
    color: ${getColor('wrong', 100, props.theme)};
  `};
`;

export const Text = styled.div`
  font-size: 12px;
  line-height: 12px;
  display: flex;
  flex-direction: column;
`;