import styled, { css } from 'styled-components';
import { getColor } from '../../../utils/colors';

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  margin: 20px 0 0;
  transition: margin 125ms ease-in-out;

  ${props => !props.disabled && props.error && css`
    margin: 20px 0 14px;
  `}
`;

export const Title = styled.div`
  position: absolute;;
  top: 0;
  left: 8px;
  font-size: 14px;
  line-height: 19px;
  color: ${props => getColor('content-light', 80, props.theme)};
  padding: 0 8px;
  background: #fff;
  transform: translateY(-55%);
  transition: left 125ms ease-in-out,
              padding-left 125ms ease-in-out,
              transform 125ms ease-in-out;

  ${props => props.isOnTop && css`
    left: 0;
    padding-left: 2px;
    transform: translateY(-100%);
  `};

  ${props => props.error && css`
    color: ${props => getColor('wrong-dark', 80, props.theme)};
  `};

  ${props => props.disabled && css`
    color: ${props => getColor('content-lighter', 100, props.theme)};
  `};
`;

export const RedStar = styled.span`
  font-size: 10px;
  line-height: 14px;
  color: ${props => getColor('wrong', 100, props.theme)};
  padding-left: 2px;
  font-weight: bold;
  position: relative;
  left: 0;
  top: -3px;
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  color: ${props => getColor('content-light', 100, props.theme)};
  outline: none;
  border: 1px solid ${props => getColor('content-main', 25, props.theme)};
  border-radius: 4px;
  padding: 2px 16px 0;
  box-sizing: border-box;
  transition: border-color 125ms ease-in-out;
  background: ${props => getColor('clear-white', 100, props.theme)};

  &:active, &:focus {
    border: 1px solid ${props => getColor('content-main', 60, props.theme)};
  }

  &::placeholder {
    color: ${props => getColor('content-light', 60, props.theme)}
  }

  ${props => props.error && css`
    color: ${props => getColor('wrong-dark', 60, props.theme)};
    border: 1px solid ${props => getColor('wrong-dark', 60, props.theme)};

    &:active, &:focus {
      border: 1px solid ${props => getColor('wrong-dark', 100, props.theme)};
    }

    &::placeholder {
      color: ${props => getColor('wrong-dark', 40, props.theme)}
    }
  `};

  ${props => props.disabled && css`
    color: ${props => getColor('content-lighter', 100, props.theme)};
    border: 1px solid ${props => getColor('content-lighter', 100, props.theme)};
    &::placeholder {
      color: ${props => getColor('content-lighter', 100, props.theme)};
    }
  `};
`;

export const Error = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  color: ${props => getColor('wrong', 90, props.theme)};
  font-size: 12px;
  line-height: 17px;
  padding: 0 16px;
`;