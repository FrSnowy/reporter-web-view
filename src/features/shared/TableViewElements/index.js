import styled, { css } from 'styled-components';
import IconContainer from '../IconContainer';
import { getColor } from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 24px;

  &:first-of-type {
    padding-right: 12px;
  }

  &:last-of-type {
    padding-left: 12px;
  }

  strong {
    font-weight: normal;
    color: ${props => getColor('accent', 75, props.theme)};
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => getColor('clear-white', 100, props.theme)};
  box-sizing: border-box;
  border-radius: 5px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 0 5px ${props => getColor('shadow', 15, props.theme)};

  position: relative;
  top: 0;
  left: 0;
  transition: top 125ms ease-in-out, box-shadow 125ms ease-in-out;

  ${props => props.actual && css`
    border: 1px solid ${props => getColor('accent', 70, props.theme)};
  `};

  ${props => !props.actual && css`
    border: 1px solid ${props => getColor('shadow', 20, props.theme)};
  `};

  &:hover {
    top: -4px;
    box-shadow: 0 4px 5px ${props => getColor('shadow', 25, props.theme)};
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 24px);

  position: absolute;
  top: 12px;
  left: 12px;

  ${IconContainer} {
    width: 20px;
    height: 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(100% - 24px);
  height: 48px;

  position: absolute;
  top: 56px;
  left: 12px;

  font-size: 14px;
  line-height: 19px;
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 19px;
  color: ${props => getColor('content-light', 75, props.theme)};
  margin-left: 8px;
  text-align: right;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  box-sizing: border-box;
  width: calc(100% - 24px);

  font-size: 14px;
  line-height: 19px;

  position: absolute;
  left: 12px;
  bottom: 12px;
  justify-content: space-between;

  & > div {
    &:first-of-type {
      a:first-of-type {
        margin-right: 12px;
      }
    }
    &:last-of-type > div {
      color: ${props => getColor('wrong', 100, props.theme)};

      &:hover {
        border-bottom-color: ${props => getColor('wrong', 100, props.theme)}
      }
    }
  }
`;