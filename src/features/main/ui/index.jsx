import React from 'react';
import * as Main from './elements';
import ErrorBlock from './components/ErrorBlock';
import UserBlock from './components/UsersBlock';
import StoriesBlock from './components/StoriesBlock';
import StatBlock from './components/StatBlock';

const MainView = props => {
  return (
    <>
      <Main.CardsRow>
        <Main.CardsCell wide>
          <Main.CardColumn>
            <ErrorBlock {...props.error}/>
          </Main.CardColumn>
        </Main.CardsCell>
        <Main.CardsCell>
          <Main.CardColumn>
            <StoriesBlock {...props.stories}/>
          </Main.CardColumn>
        </Main.CardsCell>
      </Main.CardsRow>
      <Main.CardsRow>
        <Main.CardsCell>
          <Main.CardColumn>
            <StatBlock errors = {props.error} users = {props.users}/>
          </Main.CardColumn>
        </Main.CardsCell>
        <Main.CardsCell wide>
          <Main.CardColumn>
            <UserBlock {...props.users}/>
          </Main.CardColumn>
        </Main.CardsCell>
      </Main.CardsRow>
    </>
  )
}

export default MainView;