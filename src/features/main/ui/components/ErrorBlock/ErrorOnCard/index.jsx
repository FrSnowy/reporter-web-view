import React from 'react';
import { Container, Date, Info, ErrorContainer } from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import Link from '../../../../../shared/Link';
import Icon from '../../../../../shared/Icon';
import IconContainer from '../../shared/IconContainer';
import Tooltip from '../../shared/Tooltip';

const platformText = getText('PLATFORM');
const mainText = getText('MAIN');

const ErrorOnCard = props => <Container>
  <Date>
    <IconContainer>
      <Icon name = {`browser-${props.browser.name.toLowerCase()}`} />
      <Tooltip>{props.browser.name} {props.browser.version}</Tooltip>
    </IconContainer>
    <IconContainer>
      <Icon name = {`platform-${props.platform.toLowerCase()}`} />
      <Tooltip>{platformText(props.platform.toUpperCase())}</Tooltip>
    </IconContainer>
    <IconContainer>
      <Icon name = {`os-${props.os.name.toLowerCase()}`} />
      <Tooltip>{props.os.name} {props.os.version}</Tooltip>
    </IconContainer>
    <span>{dayjs(props.server_fired_at).format('DD.MM.YYYY, HH:mm')}</span>
    <span style = {{ marginLeft: 8 }}><Link href = {props.error.url}>{mainText('CHECK_OUT')}</Link></span>
  </Date>
  <Info>
    <ErrorContainer>
      <span>{ props.error.message }</span>
    </ErrorContainer>
    <Link href = {props.error.url}>{mainText('WATCH_MORE')}</Link>
  </Info>
</Container>

export default ErrorOnCard;