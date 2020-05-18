import React from 'react';
import Card from '../../../../shared/Card';
import getText from '../../../../shared/Text';
import * as Graphics from 'react-chartjs-2';
import { getDates, getErrorsData, getUsersData } from './helpers';

const text = getText('MAIN');

const StatBlock = ({ errors = { }, users = { } }) => {
  if (errors.pending || users.pending) return null;
  if (errors.error || users.error) return <Card stretch title = {text('STAT_BLOCK_TITLE')} withError = {errors.error ? users.error ? users.errror : errors.error : null}/>

  const dates = getDates(errors.list);
  const errorsData = dates ? getErrorsData(errors.list, dates.values) : null;
  const usersData = dates ? getUsersData(users.list, dates.values) : null;

  if (!errorsData || !usersData) return <Card stretch title = {text('STAT_BLOCK_TITLE')} empty = {text('STAT_EMPTY')} />

  return (
    <Card stretch title = {text('STAT_BLOCK_TITLE')}>
      <Graphics.Line
        data = {{
          labels: [text('STAT_LINE_BEFORE'), ...dates.labels],
          datasets: [{
            data: usersData,
            backgroundColor: 'rgba(239, 131, 24, 0.25)',
            borderColor: 'rgba(239, 131, 24, 0.35)',
            label: text('STAT_VISITORS'),
          }, {
            data: errorsData,
            backgroundColor: 'rgba(200, 50, 50, 0.25)',
            borderColor: 'rgba(200, 50, 50, 0.35)',
            label: text('STAT_ERRORS'),
          }]
        }}
        options = {{
          maintainAspectRatio: false
        }}
      />
    </Card>
  )
}

export default StatBlock;