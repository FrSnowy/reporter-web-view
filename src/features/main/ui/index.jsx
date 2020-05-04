import React from 'react';
import { CardsRow, CardsCell, CardColumn } from './elements';
import Card from '../../shared/Card';
import ErrorBlock from './components/ErrorBlock';

const MainView = props => {
  return (
    <>
      <CardsRow>
        <CardsCell wide>
          <CardColumn>
            <ErrorBlock {...props.error}/>
          </CardColumn>
        </CardsCell>
        <CardsCell>
          <CardColumn>
            <Card stretch title = 'Истории' />
          </CardColumn>
        </CardsCell>
      </CardsRow>
      <CardsRow>
        <CardsCell>
          <CardColumn>
            <Card stretch title = 'Статистика' />
          </CardColumn>
        </CardsCell>
        <CardsCell wide>
          <CardColumn>
            <Card stretch title = 'Лента посетителей'/>
          </CardColumn>
        </CardsCell>
      </CardsRow>
    </>
  )
}

export default MainView;