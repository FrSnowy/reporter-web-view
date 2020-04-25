import styled from 'styled-components';
import { Container, Card } from '../../shared/elements';
import { getColor } from '../../../utils/colors';

export const AuthContainer = styled(Container)`
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

export const AuthIconWrapper = styled.div`
  margin-bottom: 6px;
`;

export const AuthInnerContainer = styled(Container)`
  width: 360px;
  flex-direction: column;
`;

export const AuthCard = styled(Card)`
  flex-direction: column;
`;

export const AuthTitleTextContainer = styled.div`
  width: 100%;
  margin: 8px 0 12px;
  text-align: center;
`;

export const AuthInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export const AuthButtonWrapper = styled.div`
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