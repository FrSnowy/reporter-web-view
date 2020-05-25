import React from 'react';
import TableView from '../../shared/TableView';
import Story from './components/Story';

const StoriesView = ({ count, list, error, maxPage, page }) => <TableView
  link = '/stories'
  title = 'Истории'
  error = {error}
  count = {count}
  list = {list}
  page = {page}
  maxPage = {maxPage}
  component = {props => <Story {...props} /> }
/>

export default StoriesView;