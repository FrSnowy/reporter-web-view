import styled from 'styled-components';
import { Container as SharedContainer, Card as SharedCard } from '../../shared/elements';
import { getColor } from '../../../utils/colors';

export const Container = styled(SharedContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => `linear-gradient(
    -51deg,
    ${getColor('accent', 100, props.theme)} 0%,
    ${getColor('accent', 100, props.theme)} calc(50% - 31px),
    ${getColor('page-background', 100, props.theme)} calc(50% - 30px),
    ${getColor('page-background', 100, props.theme)} 100%
  )`};
  
  .icon {
    margin: 0 auto;
    img {
      width: 96px;
      height: 96px
    }
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 6px;
`;

export const InnerContainer = styled(SharedContainer)`
  width: 360px;
  flex-direction: column;
`;

export const Card = styled(SharedCard)`
  flex-direction: column;
`;

export const TitleTextContainer = styled.div`
  width: 100%;
  margin: 8px 0 12px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
`;

export const RegisterLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  color: ${props => getColor('wrong', 100, props.theme)};
`;