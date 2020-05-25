import React from 'react';
import Card from '../../../../shared/Card';
import getText from '../../../../shared/Text';
import Story from './Story';
import * as Stories from './elements';

const text = getText('MAIN');

const StoriesBlock = ({ pending, list, error }) => {
  if (pending) return null;
  if (error) return <Card stretch title = {text('STORIES_BLOCK_TITLE')} withError = {error} />

  if (!list || Object.keys(list).length === 0) return <Card stretch link = '/stories' title = {text('STORIES_BLOCK_TITLE')} empty = {text('STORIES_EMPTY')} />

  return (
    <Card stretch title = {text('STORIES_BLOCK_TITLE')} link = '/stories'>
      <Stories.Container>
        { Object.keys(list).map((userID, i) => <Story steps = {list[userID]} userID = {userID} key = {i}/>) }
      </Stories.Container>
    </Card>
  );
}
export default StoriesBlock;