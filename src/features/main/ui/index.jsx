import React from 'react';
import { CardsRow, CardsCell, CardColumn } from './elements';
import Card from '../../shared/Card';
import ErrorBlock from './components/ErrorBlock';
import UserBlock from './components/UsersBlock';
import StoriesBlock from './components/StoriesBlock';
import * as Graphics from 'react-chartjs-2';

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
            <Card stretch title = 'Статистика'>
              <Graphics.Line
                data = {{
                  labels: ['10.05', '11.05', '12.05', '13.05', '14.05', '15.05', '16.05', '17.05'],
                  datasets: [{
                    data: [0, 5, 3, 1, 2, 5, 0, 10],
                    label: 'Ошибочки'
                  }]
                }}
                options = {{
                  maintainAspectRatio: false
                }}
              />
            </Card>
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