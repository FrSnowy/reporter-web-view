import React from 'react';
import { Container, Date, Info, BrowserIcon, PlatformIcon, Tooltip, ErrorContainer } from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import Link from '../../../../../shared/Link';
import Icon from '../../../../../shared/Icon';

const platformText = getText('PLATFORM');
const mainText = getText('MAIN');

const ErrorOnCard = props => <Container>
  <Date>
    <BrowserIcon>
      <Icon name = {`browser-${props.browser.name.toLowerCase()}`} />
      <Tooltip>{props.browser.name} {props.browser.version}</Tooltip>
    </BrowserIcon>
    <PlatformIcon>
      <Icon name = {`platform-${props.platform.toLowerCase()}`} />
      <Tooltip>{platformText(props.platform.toUpperCase())}</Tooltip>
    </PlatformIcon>
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