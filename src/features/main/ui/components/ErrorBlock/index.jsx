import React from 'react';
import Card from '../../../../shared/Card';
import getText from '../../../../shared/Text';
import { CountBlock, ErrorsCountBlock, ErrorsCountBlockNumber, ErrorsCountBlockText, ErrorsList, ReqErrorBlock } from './elements';
import ErrorOnCard from './ErrorOnCard';

const text = getText('MAIN');

const getTypeOfLastErrors = (listLast, listAll) => {
  const countOfLast = listLast.length;
  const countOfAll = listAll.length;
  const koeffOfError = countOfLast / countOfAll;

  if (countOfLast === 0) return 'good';

  if (koeffOfError <= 0.1) return 'good';
  else if (koeffOfError <= 0.4) return 'warning';
  else return 'bad';
};

const ErrorBlock = ({ pending, listLast, listAll, error }) => {
  if (pending) return null;
  if (error) return (
    <Card stretch title = {text('ERRORS_BLOCK_TITLE')} withError>
      <ReqErrorBlock>{text('ERRORS_CONNECTION_ERROR')}<br />[{error}]</ReqErrorBlock>
    </Card>
  )

  return (
    <Card stretch title = {text('ERRORS_BLOCK_TITLE')}>
      <CountBlock>
        {
          listLast && listAll
            ? <ErrorsCountBlock>
                <ErrorsCountBlockNumber type = {getTypeOfLastErrors(listLast, listAll)}>
                  {listLast.length}
                </ErrorsCountBlockNumber>
                <ErrorsCountBlockText>
                  <div>{text('ERRORS_COUNT_TOP')}</div>
                  <div>{text('ERRORS_CURRENT_COUNT_BOTTOM')}</div>
                </ErrorsCountBlockText>
              </ErrorsCountBlock>
            : null
        }
        {
          listAll
            ? <ErrorsCountBlock>
                <ErrorsCountBlockNumber type = {listAll.length === 0 ? 'good' : 'bad'}>{listAll.length}</ErrorsCountBlockNumber>
                <ErrorsCountBlockText>
                  <div>{text('ERRORS_COUNT_TOP')}</div>
                  <div>{text('ERRORS_ALL_COUNT_BOTTOM')}</div>
                </ErrorsCountBlockText>
              </ErrorsCountBlock>
            : null
        }
      </CountBlock>
      {
        listAll && listAll.length > 0
          ? <ErrorsList>{listAll.filter((_, i) => i < 4).map((error, i) => <ErrorOnCard {...error} key = {i}/>)}</ErrorsList>
          : null
      }
    </Card>
  )
}

export default ErrorBlock;