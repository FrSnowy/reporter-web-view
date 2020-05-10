import React from 'react';
import { Container, TopBlock, ContentBlock, UserHash, UserIP, ErrorsContainer, FootprintsContainer, Count } from './elements';
import dayjs from 'dayjs';
import getText from '../../../../../shared/Text';
import IconContainer from '../../shared/IconContainer';
import Tooltip from '../../shared/Tooltip';
import Icon from '../../../../../shared/Icon';
import Link from '../../../../../shared/Link';

const text = getText('MAIN')
const platformText = getText('PLATFORM');

const UserOnCard = props => {
  console.log(props);
  return (
    <Container>
      <TopBlock>
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
      </TopBlock>
      <ContentBlock>
        <UserHash>
          {props.hash}
        </UserHash>
        <UserIP>
          <span>{props.ip}</span>
          <Tooltip>{text('USERS_IP_ADDRESS')}</Tooltip>
        </UserIP>
        <ErrorsContainer>
          <Count>{props.errors_count}</Count>
          <Icon name = 'warning' />
          <Tooltip>{text('USERS_ERRORS_TOOLTIP')}</Tooltip>
        </ErrorsContainer>
        <FootprintsContainer>
          <Count>{props.events_count}</Count>
          <Icon name = 'footprint' />
          <Tooltip>{text('USERS_STEPS_TOOLTIP')}</Tooltip>
        </FootprintsContainer>
      <Link href = '#'>{text('WATCH_MORE')}</Link>
      </ContentBlock>
    </Container>
  );
}

export default UserOnCard;