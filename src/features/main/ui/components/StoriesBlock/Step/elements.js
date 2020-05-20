import styled from 'styled-components';
import Tooltip from '../../shared/Tooltip';
import { getColor } from '../../../../../../utils/colors';

export const Container = styled.a`
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

export const Time = styled.div`
  display: flex;
  width: 100%;
  color: ${props => getColor('content-light', 75, props.theme)};
  font-size: 13px;
  line-height: 19px;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  line-height: 19px;
  color: ${props => getColor(props.error ? 'wrong' : 'warning-dark', 85, props.theme)};
  margin-bottom: 1px;
  box-sizing: border-box;
`;

export const Image = styled.div`
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

export const Text = styled.span`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;