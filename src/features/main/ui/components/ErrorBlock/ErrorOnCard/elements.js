import styled from 'styled-components';
import { getColor } from '../../../../../../utils/colors';
import getBrowserIcon from '../../../../../shared/assets/icons/browser';
import getPlatformIcon from '../../../../../shared/assets/icons/platform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 16px;
  color: ${props => getColor('content-main', 75, props.theme)};
`;

export const Date = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 19px;
  margin-bottom: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`;

export const Tooltip = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: ${props => getColor('accent-opposite', 100, props.theme)};
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  top: -4px;
  left: 0;
  display: none;
  background: ${props => getColor('content-main', 85, props.theme)};
  transform: translateY(-100%);

  @media (max-width: 512px) {
    left: auto;
    right: 0;
    z-index: 1000;
  }
`;

const Icon = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-size: cover;

  &:hover {
    ${Tooltip} {
      display: block;
    }
  }

  @media (max-width: 1023px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 512px) {
    flex: none;
    position: absolute;
    left: auto;
    top: 115%;
  }
`;

export const BrowserIcon = styled(Icon)`
  background-image: url(${props => getBrowserIcon(props.browser)});

  @media (max-width: 512px) {
    right: 0;
  }
`;

export const PlatformIcon = styled(Icon)`
  background-image: url(${props => getPlatformIcon(props.platform)});

  @media (max-width: 512px) {
    right: 24px;
  }
`;

export const ErrorContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 4px 8px;
  color: ${props => getColor('wrong', 100, props.theme)};
  font-size: 13px;
  line-height: 19px;
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  word-break: unset;
  white-space: nowrap;

  @media (max-width: 1023px) {
    max-width: 480px;
  }

  @media (max-width: 512px) {
    max-width: 490px;
    line-height: 13px;
    padding-left: 0;
  }
`;