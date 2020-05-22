import React from 'react';
import * as Table from './elements';
import Link from '../../shared/Link';
import Icon from '../Icon';
import chunk from 'lodash/chunk';
import PaginationBlock from '../Pagination';

class TableView extends React.Component {
  render() {
    const { link, title, count = 0, list = [], page = 0, maxPage = 0, component = () => null } = this.props;
    return <Table.Container justify = 'flex-start' align = 'flex-start'>
      {
        list.length > 0 && (
          <>
            <Table.LeftContainer>
              <Table.Instruments align = 'flex-start'>
                <Table.InstrumentsTitle>
                  <Link href = {link}><strong>{title}</strong></Link> ({count})
                </Table.InstrumentsTitle>
              </Table.Instruments>
              <Table.Pagination>
                <PaginationBlock page = {page} maxPage = {maxPage}/>
              </Table.Pagination>
            </Table.LeftContainer>
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