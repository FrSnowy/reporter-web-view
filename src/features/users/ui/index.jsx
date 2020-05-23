import React from 'react';
import TableView from '../../shared/TableView';
import User from './components/User';

const UsersView = ({ count, list, error, maxPage, page }) => <TableView
  link = '/users'
  title = 'Пользователи'
  error = {error}
  count = {count}
  list = {list}
  page = {page}
  maxPage = {maxPage}
  component = {props => <User {...props} /> }
/>

export default UsersView;