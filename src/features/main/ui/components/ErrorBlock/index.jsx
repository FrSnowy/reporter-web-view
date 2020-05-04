import React from 'react';
import Card from '../../../../shared/Card';
import getText from '../../../../shared/Text';
import { CountBlock, ErrorsCountBlock, ErrorsCountBlockNumber, ErrorsCountBlockText, ErrorsList } from './elements';
import ErrorOnCard from './ErrorOnCard';

const text = getText('MAIN');

const getTypeOfLastErrors = (listLast, listAll) => {
  const countOfLast = listLast.length;
  const countOfAll = listAll.length;
  const koeffOfError = countOfLast / countOfAll;

  if (koeffOfError <= 0.1) return 'good';
  else if (koeffOfError <= 0.4) return 'warning';
  else return 'bad';
};

const ErrorBlock = ({ pending, listLast, listAll, error }) => {
  if (pending) return null;
  return (
    <Card stretch title = 'Лента ошибок'>
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
                <ErrorsCountBlockNumber type = 'bad'>{listAll.length}</ErrorsCountBlockNumber>
                <ErrorsCountBlockText>
                  <div>{text('ERRORS_COUNT_TOP')}</div>
                  <div>{text('ERRORS_ALL_COUNT_BOTTOM')}</div>
                </ErrorsCountBlockText>
              </ErrorsCountBlock>
            : null
        }
      </CountBlock>
      {
        listAll
          ? <ErrorsList>{listAll.filter((_, i) => i < 4).map(error => <ErrorOnCard {...error} />)}</ErrorsList>
          : null
      }
    </Card>
  )
}

export default ErrorBlock;