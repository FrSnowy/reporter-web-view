import styled, { css } from 'styled-components';
import { getColor } from '../../../utils/colors';
import userImg from './assets/user.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  flex-direction: row;
  background-color: ${props => getColor('accent', 100, props.theme)};
`;

export const TitleBlock = styled.div`
  display: flex;
  font-size: 18px;
  line-height: 24px;

  a {
    color: ${props => getColor('clear-white', 100, props.theme)};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 1279px) {
    font-size: 24px;
    line-height: 40px;
  }

  @media (max-width: 575px) {
    font-size: 14px;
    line-height: 23px;
  }

  @media (max-width: 359px) {
    font-size: 18px;
    line-height: 28px;
    width: 15px;
    overflow: hidden;
  }
`;

export const LinkBlock = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  margin-left: 64px;

  a { 
    display: flex;
    margin-right: 24px;
    color: ${props => getColor('clear-white', 85, props.theme)};
    border-bottom: 1px solid ${props => getColor('clear-white', 0, props.theme)};
    text-decoration: none;
    transition: color 125ms ease-in-out, border-bottom-color 125ms ease-in-out;

    &:hover {
      color: ${props => getColor('clear-white', 100, props.theme)};
      border-bottom: 1px solid ${props => getColor('clear-white', 100, props.theme)};
    }

    @media (max-width: 575px) {
      margin-right: 12px;
    }
  }

  @media (max-width: 1279px) {
    padding-top: 6px;
  }

  @media (max-width: 1023px) {    
    margin-left: 32px;
    width: calc(100% - 160px);
  }

  @media (max-width: 575px) {
    margin-left: 16px;
    width: calc(100% - 108px);
    padding-top: 0;
  }

  @media (max-width: 359px) {
    font-size: 13px;
    line-height: 17px;
    margin-left: 12px;
    width: calc(100% - 60px);
  }
`;

export const UserBlock = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  justify-content: flex-end;
  width: 36px;
  height: 36px;
  flex: none;
  background-color: ${props => getColor('accent-opposite', 10, props.theme)};
  border: 1px solid ${props => getColor('clear-white', 85, props.theme)};
  box-sizing: border-box;
  border-radius: 50%;
  background-image: url(${userImg});
  background-size: 26px 26px;
  background-position: center bottom;
  background-repeat: no-repeat;
  transition: background-color 125ms ease-in-out, border-color 125ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => getColor('accent-opposite', 15, props.theme)};
    border: 1px solid ${props => getColor('clear-white', 100, props.theme)};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 64px;
  right: -6px;
  width: 250px;
  background: ${props => getColor('clear-white', 100, props.theme)};
  box-shadow: 0 5px 5px ${props => getColor('shadow', 25, props.theme)};
  z-index: 1000;
  box-sizing: border-box;
  padding: 16px 24px;
  transition: opacity 125ms ease-in-out;

  ${props => props.visible && css`
    opacity: 1;
    pointer-events: all;
  `};

  ${props => !props.visible && css`
    opacity: 0;
    pointer-events: none;
  `};

  hr {
    border-color: ${props => getColor('content-main', 5, props.theme)};
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: -20px;
    right: 12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 20px 10px;
    border-color: transparent transparent ${props => getColor('clear-white', 100, props.theme)} transparent;
  }
`;