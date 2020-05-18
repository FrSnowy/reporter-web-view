import React from 'react';
import { CardsRow, CardsCell, CardColumn } from './elements';
import ErrorBlock from './components/ErrorBlock';
import UserBlock from './components/UsersBlock';
import StoriesBlock from './components/StoriesBlock';
import StatBlock from './components/StatBlock';

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
            <StoriesBlock {...props.stories}/>
          </CardColumn>
        </CardsCell>
      </CardsRow>
      <CardsRow>
        <CardsCell>
          <CardColumn>
            <StatBlock errors = {props.error} users = {props.users}/>
          </CardColumn>
        </CardsCell>
        <CardsCell wide>
          <CardColumn>
            <UserBlock {...props.users}/>
          </CardColumn>
        </CardsCell>
      </CardsRow>
    </>
  )
}

export default MainView;