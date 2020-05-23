import React from 'react';
import dayjs from 'dayjs';
import IconContainer from '../../../../shared/IconContainer';
import Icon from '../../../../shared/Icon';
import Tooltip from '../../../../shared/Tooltip';
import Link from '../../../../shared/Link';
import PseudoLink from '../../../../shared/PseudoLink';
import getText from '../../../../shared/Text';
import * as TableView from '../../../../shared/TableViewElements'
import * as ErrorView from './elements';

const platformText = getText('PLATFORM');

const ErrorComponent = props => <TableView.Container>
  <TableView.Card actual = {dayjs(props.fired_at.server).isAfter(dayjs().add(-7, 'day'))}>
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
        <div><strong>По серверу:</strong> {dayjs(props.fired_at.server).format('DD.MM.YYYY, HH:mm')}</div>
        <div><strong>По клиенту:</strong> {dayjs(props.fired_at.client).format('DD.MM.YYYY, HH:mm')}</div>
      </TableView.Dates>
    </TableView.Icons>
    <ErrorView.Content>
      {props.error.message}
    </ErrorView.Content>
    <TableView.Links>
      <div>
        <Link href = {props.error.url}>На страницу</Link>
        <Link>Подробнее</Link>
      </div>
      <div>
        <PseudoLink>Удалить</PseudoLink>
      </div>
    </TableView.Links>
  </TableView.Card>
</TableView.Container>

export default ErrorComponent;