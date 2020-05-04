import React from 'react';
import { Container, Date, Info, BrowserIcon, PlatformIcon, Tooltip, ErrorContainer } from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import Link from '../../../../../shared/Link';

const platformText = getText('PLATFORM');
const mainText = getText('MAIN');

const ErrorOnCard = props => <Container>
  {console.log(props)}
  <Date>{dayjs(props.server_fired_at).format('DD.MM.YYYY, HH:mm')}</Date>
  <Info>
    <BrowserIcon browser = {props.browser.toLowerCase()}>
      <Tooltip>{props.browser}</Tooltip>
    </BrowserIcon>
    <PlatformIcon platform = {props.platform.toLowerCase()}>
      <Tooltip>{platformText(props.platform.toUpperCase())}</Tooltip>
    </PlatformIcon>
    <ErrorContainer>{ props.message }</ErrorContainer>
    <Link href = {props.url}>{mainText('WATCH_MORE')}</Link>
  </Info>
</Container>

export default ErrorOnCard;