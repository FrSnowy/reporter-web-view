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
  white-space: nowrap;

  @media (max-width: 512px) {
    left: 0;
    z-index: 1000;
  }
`;

const Icon = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  background-size: cover;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  img { width: 14px; height: 14px };  

  &:hover {
    ${Tooltip} {
      display: block;
    }
  }
`;

export const BrowserIcon = styled(Icon)`
  @media (max-width: 512px) {
    right: 0;
  }
`;

export const PlatformIcon = styled(Icon)`
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
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  word-break: unset;
  white-space: nowrap;
  width: 498px;
  border: 1px solid rgba(200, 50, 50, 1);
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