import React from 'react';
import * as Error from './elements';
import dayjs from 'dayjs';
import IconContainer from '../../../../main/ui/components/shared/IconContainer';
import Icon from '../../../../shared/Icon';
import Tooltip from '../../../../main/ui/components/shared/Tooltip';
import Link from '../../../../shared/Link';
import PseudoLink from '../../../../shared/PseudoLink';
import getText from '../../../../shared/Text';

const platformText = getText('PLATFORM');

const ErrorComponent = props => <Error.Container>
  <Error.Card actual = {dayjs(props.fired_at.server).isAfter(dayjs().add(-7, 'day'))}>
    <Error.Icons>
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
      <Error.FiredAt>
        <div><strong>По серверу:</strong> {dayjs(props.fired_at.server).format('DD.MM.YYYY, HH:mm')}</div>
        <div><strong>По клиенту:</strong> {dayjs(props.fired_at.client).format('DD.MM.YYYY, HH:mm')}</div>
      </Error.FiredAt>
    </Error.Icons>
    <Error.Content>
      {props.error.message}
    </Error.Content>
    <Error.Links>
      <div>
        <Link href = {props.error.url}>На страницу</Link>
        <Link>Подробнее</Link>
      </div>
      <div>
        <PseudoLink>Удалить</PseudoLink>
      </div>
    </Error.Links>
  </Error.Card>
</Error.Container>

export default ErrorComponent;