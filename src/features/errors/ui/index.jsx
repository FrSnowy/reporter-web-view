import React from 'react';
import TableView from '../../shared/TableView';
import Error from './components/Error';

const ErrorsView = ({ count, list, maxPage, page }) => <TableView
  link = '/errors'
  title = 'Ошибки'
  count = {count}
  list = {list}
  page = {page}
  maxPage = {maxPage}
  component = {props => <Error {...props}/> }
/>

export default ErrorsView;