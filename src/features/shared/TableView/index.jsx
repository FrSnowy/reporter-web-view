import React from 'react';
import * as Table from './elements';
import Link from '../../shared/Link';
import Icon from '../Icon';
import chunk from 'lodash/chunk';

class TableView extends React.Component {
  render() {
    const { link, title, count = 0, list = [], component = () => null } = this.props;
    return <Table.Container justify = 'flex-start' align = 'flex-start'>
      {
        list.length > 0 && (
          <>
            <Table.Instruments align = 'flex-start'>
              <Table.InstrumentsTitle>
                <Link href = {link}><strong>{title}</strong></Link> ({count})
              </Table.InstrumentsTitle>
            </Table.Instruments>
            <Table.View>
            {
              chunk(list, 2).map((row, i) =>
                <Table.Row key = {i}>
                  {row.map((props, j) =>
                    <Table.Column key = {j}>
                      { component(props) }
                    </Table.Column>
                  )}
                </Table.Row>  
              )
            }
          </Table.View>
          </>
        )
      }
      {
        list.length === 0 && (
          <Table.View>
            <Table.Empty>
              <Icon name = 'no-content' />
              <Table.Nothing>Здесь ничего нет</Table.Nothing>
            </Table.Empty>
          </Table.View>
        )
      }
    </Table.Container>
  }
}

export default TableView;