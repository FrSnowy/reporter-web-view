import React from 'react';
import * as User from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import IconContainer from '../../../../../shared/IconContainer';
import Tooltip from '../../../../../shared/Tooltip';
import Icon from '../../../../../shared/Icon';
import Link from '../../../../../shared/Link';

const text = getText('MAIN')
const platformText = getText('PLATFORM');

const UserOnCard = props => <User.Container>
  <User.TopBlock>
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
    <div>{dayjs(props.session_start).format('DD.MM.YYYY, HH:mm')}</div>
  </User.TopBlock>
  <User.ContentBlock>
    <User.Hash>
      {props.hash}
    </User.Hash>
    <User.IP>
      <span>{props.ip}</span>
      <Tooltip>{text('USERS_IP_ADDRESS')}</Tooltip>
    </User.IP>
    <User.ErrorsContainer>
      <User.Count>{props.errors_count}</User.Count>
      <Icon name = 'warning' />
      <Tooltip>{text('USERS_ERRORS_TOOLTIP')}</Tooltip>
    </User.ErrorsContainer>
    <User.FootprintsContainer>
      <User.Count>{props.events_count}</User.Count>
      <Icon name = 'footprint' />
      <Tooltip>{text('USERS_STEPS_TOOLTIP')}</Tooltip>
    </User.FootprintsContainer>
  <Link href = '#'>{text('WATCH_MORE')}</Link>
  </User.ContentBlock>
</User.Container>

export default UserOnCard;