import React from 'react';
import * as Card from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import Link from '../../../../../shared/Link';
import Icon from '../../../../../shared/Icon';
import IconContainer from '../../../../../shared/IconContainer';
import Tooltip from '../../../../../shared/Tooltip';

const platformText = getText('PLATFORM');
const mainText = getText('MAIN');

const ErrorOnCard = props => (
  <Card.Container>
    <Card.Date>
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
      <span>{dayjs(props.fired_at.server).format('DD.MM.YYYY, HH:mm')}</span>
      <span style = {{ marginLeft: 8 }}><Link href = {props.error.url}>{mainText('CHECK_OUT')}</Link></span>
    </Card.Date>
    <Card.Info>
      <Card.ErrorContainer>
        <span>{ props.error.message }</span>
      </Card.ErrorContainer>
      <Link href = {props.error.url}>{mainText('WATCH_MORE')}</Link>
    </Card.Info>
  </Card.Container>
)

export default ErrorOnCard;