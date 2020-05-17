import React from 'react';
import Card from '../../../../shared/Card';
import getText from '../../../../shared/Text';
import { ErrorsList } from './elements';
import ErrorOnCard from './ErrorOnCard';
import CountBlock, { TYPES } from '../shared/CountBlock';
import NumbersBlock from '../shared/NumbersBlock';

const text = getText('MAIN');

const getTypeOfLastErrors = (lastWeek, allTime) => {
  if (lastWeek === 0) return TYPES.GOOD;
  const koeffOfError = lastWeek / allTime;

  if (koeffOfError <= 0.1) return TYPES.GOOD;
  else if (koeffOfError <= 0.4) return TYPES.WARNING;
  else return TYPES.BAD;
};

const ErrorBlock = ({ pending, list, count, error }) => {
  if (pending) return null;
  if (error) return <Card stretch title = {text('ERRORS_BLOCK_TITLE')} withError = {error}/>

  if (!list || list.length === 0) return <Card stretch title = {text('ERRORS_BLOCK_TITLE')} empty = {text('ERRORS_EMPTY')} />

  return (
    <Card stretch title = {text('ERRORS_BLOCK_TITLE')}>
      <NumbersBlock>
          <CountBlock
            type = {getTypeOfLastErrors(count.lastWeek, count.allTime)}
            number = {count.lastWeek}
            title = {text('ERRORS_COUNT_TOP')}
            subtitle = {text('CURRENT_COUNT_BOTTOM')}
          />
          <CountBlock
            type = {count.allTime === 0 ? TYPES.GOOD : TYPES.BAD}
            number = {count.allTime}
            title = {text('ERRORS_COUNT_TOP')}
            subtitle = {text('ALL_COUNT_BOTTOM')}
          />
      </NumbersBlock>
      {
        list && list.length > 0
          ? <ErrorsList>{list.filter((_, i) => i < 4).map((error, i) => <ErrorOnCard {...error} key = {i}/>)}</ErrorsList>
          : null
      }
    </Card>
  )
}

export default ErrorBlock;