import styled from 'styled-components';
import { getColor } from '../../../../../../utils/colors';
import IconContainer from '../../shared/IconContainer';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 19px;
  color: ${props => getColor('content-main', 75, props.theme)};
  padding-bottom: 12px;
`;

export const TopBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Hash = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 4px 8px;
  color: ${props => getColor('content-light', 75, props.theme)};
  font-size: 13px;
  line-height: 19px;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
  word-break: unset;
  white-space: nowrap;
  width: 164px;
  border: 1px solid ${props => getColor('content-light', 75, props.theme)};
  margin-right: 8px;
  border-radius: 4px;

  @media (max-width: 1023px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 512px) {
    display: none;
  }
`;

export const Count = styled.div`
  font-weight: bold;
`;


const BaseBottomContainer = styled(IconContainer)`
  width: auto;
  height: auto;
  padding: 0 4px;
  margin-right: 8px;
  border-radius: 4px;

  @media (max-width: 512px) {
    margin-right: 4px;
  }

  img { 
    width: 18px;
    height: 18px;

    @media (max-width: 512px) {
      display: none;
    }
  }

  & > div:nth-child(2) {
    padding: 4px;

    @media (max-width: 512px) {
      display: none;
    }
  }
`;

export const IP = styled(BaseBottomContainer)`
  padding: 4px;
  width: 100px;
  border: 1px solid ${props => getColor('accent', 75, props.theme)};
  color: ${props => getColor('accent', 75, props.theme)};

  @media (max-width: 512px) {
    width: 88px;
    font-size: 12px;
  }
`;

export const ErrorsContainer = styled(BaseBottomContainer)`
  border: 1px solid ${props => getColor('wrong', 75, props.theme)};

  ${Count} {
    color: ${props => getColor('wrong', 75, props.theme)};
  }
`;

export const FootprintsContainer = styled(BaseBottomContainer)`
  border: 1px solid ${props => getColor('warning', 75, props.theme)};

  ${Count} {
    color: ${props => getColor('warning', 75, props.theme)};
  }
`;