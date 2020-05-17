import styled, { css } from 'styled-components';
import { getColor } from '../../../../../../utils/colors';
import Tooltip from '../../shared/Tooltip';

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

export const BlockTitle = styled.div`
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

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StepContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 1px;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  text-decoration: none;

  ${Tooltip} {
    max-width: 214px;
    white-space: break-spaces;
  }

  &:hover {
    border-bottom: 1px solid ${props => getColor(props.error ? 'wrong' : 'warning-dark', 30, props.theme)};
    margin-bottom: 0;

    ${Tooltip} {
      display: block;
    }
  }
`;

export const StepTime = styled.div`
  display: flex;
  width: 100%;
  color: ${props => getColor('content-light', 75, props.theme)};
  font-size: 13px;
  line-height: 19px;
`;

export const StepInfo = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  line-height: 19px;
  color: ${props => getColor(props.error ? 'wrong' : 'warning-dark', 85, props.theme)};
  margin-bottom: 1px;
  box-sizing: border-box;
`;

export const StepImage = styled.div`
  width: 20px;
  height: 20px;

  & > div {
    width: 20px;
    height: 20px;
    padding: 0;

    & > img {
      width: 12px;
      height: 12px;
    }
  }
`;

export const StepText = styled.span`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;