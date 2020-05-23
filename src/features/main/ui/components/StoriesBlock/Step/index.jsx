import React from 'react';
import * as Step from './elements';
import Icon from '../../../../../shared/Icon';
import Tooltip from '../../../../../shared/Tooltip';
import dayjs from 'dayjs';

const SingleStep = ({ type = 'error', fired_at = '', info = { } }) => (
  <Step.Container error = {type === 'error'} href = {info.url}>
    <Step.Time>{dayjs(fired_at).format('DD.MM.YYYY HH:mm')}</Step.Time>
    <Step.Info error = {type === 'error'}>
      <Step.Image>
        <Icon name = {type === 'error' ? 'warning' : 'footprint'} />
      </Step.Image>
      <Step.Text>
        {info.message}
      </Step.Text>
    </Step.Info>
    <Tooltip>{info.message}</Tooltip>
  </Step.Container>
);

export default SingleStep;