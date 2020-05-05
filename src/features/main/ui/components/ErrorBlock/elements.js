import styled, { css } from 'styled-components';
import { getColor } from '../../../../../utils/colors';

export const CountBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

export const ErrorsCountBlock = styled.div`
  display: flex;
  flex-direction: row;
  border-right: 1px solid ${props => getColor('content-lighter', 35, props.theme)};
  padding-right: 12px;
  margin-right: 12px;

  @media (max-width: 512px) {
    border-right: none;
    border-bottom: 1px solid ${props => getColor('content-lighter', 35, props.theme)};
    padding-right: 0;
    margin-right: 0;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
`;

export const ErrorsCountBlockNumber = styled.div`
  font-size: 24px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;

  ${props => props.type === 'good' && css`
    color: ${getColor('accent-success', 100, props.theme)};
  `};

  ${props => props.type === 'warning' && css`
    color: ${getColor('warning', 100, props.theme)};
  `};

  ${props => props.type === 'bad' && css`
    color: ${getColor('wrong', 100, props.theme)};
  `};
`;

export const ErrorsCountBlockText = styled.div`
  font-size: 12px;
  line-height: 12px;
  display: flex;
  flex-direction: column;
`;

export const ErrorsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 32px);

  @media (max-width: 512px) {
    & > div:last-child {
      display: none;
    }
  }
`;

export const ReqErrorBlock = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: ${props => getColor('wrong', 100, props.theme)};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;