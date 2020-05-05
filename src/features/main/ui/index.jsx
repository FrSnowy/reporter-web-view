import React from 'react';
import { CardsRow, CardsCell, CardColumn } from './elements';
import Card from '../../shared/Card';
import ErrorBlock from './components/ErrorBlock';
import UserBlock from './components/UsersBlock';

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
            <UserBlock />
          </CardColumn>
        </CardsCell>
      </CardsRow>
    </>
  )
}

export default MainView;