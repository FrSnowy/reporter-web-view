import styled from 'styled-components';
import { getColor } from '../../../../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 16px;
  box-sizing: border-box;
  
  &:not(:last-child) {
    margin-right: 16px;
    border-right: 1px solid ${props => getColor('accent-opposite', 85, props.theme)};
  }

  @media (max-width: 1279px) {
    width: 100%;

    &:not(:last-child) {  border-right: none; }
    &:last-child { display: none }
  }

  @media (max-width: 767px) {
    width: 50%;
  
    &:not(:last-child) {
      border-right: 1px solid ${props => getColor('accent-opposite', 85, props.theme)};
    }
    &:last-child { display: flex }
  }

  @media (max-width: 567px) {
    width: 100%;

    &:not(:last-child) {  border-right: none; }
    &:last-child { display: none }
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 19px;
  color: ${props => getColor('content-main', 85, props.theme)};

  span {
    display: block;
    width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(2) {
      color: ${props => getColor('content-light', 75, props.theme)};
      padding: 4px 8px;
      border: 1px solid ${props =>  getColor('content-light', 75, props.theme)};
      border-radius: 4px;
      margin-top: 4px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;