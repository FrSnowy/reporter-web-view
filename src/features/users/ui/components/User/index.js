import React from 'react';
import * as TableView from '../../../../shared/TableViewElements';
import * as UserView from './elements';
import IconContainer from '../../../../shared/IconContainer';
import Icon from '../../../../shared/Icon';
import Tooltip from '../../../../shared/Tooltip';
import dayjs from 'dayjs';
import getText from '../../../../shared/Text';
import Link from '../../../../shared/Link';
import PseudoLink from '../../../../shared/PseudoLink';

const platformText = getText('PLATFORM');

const UserBlock = props => (
  <TableView.Container>
    <TableView.Card>
      <TableView.Icons>
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
        <TableView.Dates>
          <div><strong>Начало сессии:</strong> <span>{dayjs(props.session_start).format('DD.MM.YYYY, HH:mm')}</span></div>
        </TableView.Dates>
      </TableView.Icons>
      <UserView.Content>
        <UserView.Column>
          <UserView.Text><strong>Пользователь:</strong> <span>{props.hash}</span></UserView.Text>
          <UserView.Text><strong>IP:</strong> <span>{props.ip}</span></UserView.Text>
        </UserView.Column>
        <UserView.Column>
          <UserView.Errors>
            <Icon name = 'warning' />
            <strong>Ошибки:</strong>
            <span>{props.errors_count}</span>
          </UserView.Errors>
          <UserView.Footprints>
            <Icon name = 'footprint' />
            <strong>Действия: </strong>
            <span>{props.events_count - props.errors_count}</span>
          </UserView.Footprints>
        </UserView.Column>
      </UserView.Content>
      <TableView.Links>
        <div>
          <Link>Подробнее</Link>
        </div>
        <div>
          <PseudoLink>Удалить</PseudoLink>
        </div>
      </TableView.Links>
    </TableView.Card>
  </TableView.Container>
);

export default UserBlock;