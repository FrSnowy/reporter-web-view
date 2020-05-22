import React from 'react';
import TableView from '../../shared/TableView';
import Error from './components/Error';

class ErrorsView extends React.Component {
  render() {
    const { count, list, maxPage, ...props } = this.props;
    return <>
      <TableView
        link = '/errors'
        title = 'Ошибки'
        count = {this.props.count}
        list = {this.props.list}
        component = {props => <Error {...props}/> }
      />
    </>
  }
}

export default ErrorsView;