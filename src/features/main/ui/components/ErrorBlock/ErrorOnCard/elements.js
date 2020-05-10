import styled from 'styled-components';
import { getColor } from '../../../../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 12px;
  color: ${props => getColor('content-main', 75, props.theme)};
`;

export const Date = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`;

export const ErrorContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 4px 8px;
  color: ${props => getColor('wrong', 100, props.theme)};
  font-size: 13px;
  line-height: 19px;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  word-break: unset;
  white-space: nowrap;
  width: 498px;
  border: 1px solid ${props => getColor('wrong', 100, props.theme)};
  margin-right: 8px;
  border-radius: 4px;

  @media (max-width: 1279px) {
    width: 366px  ;
  }

  @media (max-width: 1023px) {
    width: 530px;
  }

  @media (max-width: 512px) {
    width: 490px;
    line-height: 13px;
  }
`;