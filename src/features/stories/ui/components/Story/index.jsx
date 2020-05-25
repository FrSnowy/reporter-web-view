import React from 'react';
import dayjs from 'dayjs';
import Link from '../../../../shared/Link';
import * as TableView from '../../../../shared/TableViewElements'
import * as Story from './elements';
import SingleStep from '../Step';

const StoryComponent = props => <Story.Container>
  <TableView.Card actual = {dayjs(props.steps[props.steps.length - 1].fired_at).isAfter(dayjs().add(-7, 'day'))}>
    <TableView.Icons>
      <Story.UserName>
        <strong>Пользователь</strong>
        <span>{props.user}</span>
      </Story.UserName>
      <TableView.Dates>
        <div>
          <span>C </span>
          <strong>{dayjs(props.steps[0].fired_at).format('DD.MM.YYYY, HH:mm')} </strong>
          <span>по </span>
          <strong>{dayjs(props.steps[props.steps.length - 1].fired_at).format('DD.MM.YYYY, HH:mm')}</strong>
        </div>
      </TableView.Dates>
    </TableView.Icons>
    <Story.Content>
      {
        props.steps
          .filter((_, i) => i < 2)
          .map((step, i) => <SingleStep key = {i} {...step} /> )
      }
      {
        props.steps.length - 2 > 0 && (
          <Story.More>
            <Story.Hidden>
              Ещё {props.steps.length - 2} шт. скрыто
            </Story.Hidden>
            {
              !!props.steps.find(step => step.type === 'error') && (
                <Story.Errors>
                  , содержит ошибки
                </Story.Errors>
              )
            }
          </Story.More>
        )
      }
    </Story.Content>
    <TableView.Links>
      <div>
        <Link>Подробнее</Link>
      </div>
    </TableView.Links>
  </TableView.Card>
</Story.Container>

export default StoryComponent;