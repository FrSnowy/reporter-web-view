import React from 'react';
import { Container, BlockTitle } from './elements';
import getText from '../../../../../shared/Text';

const text = getText('MAIN')

const Story = ({ userID, steps = [] }) => {
  if (!steps || steps.length === 0) return 123;

  return <Container>
    <BlockTitle>
      <span>{text('STORIES_STORY_BLOCK_TITLE')}<br /></span>
      <span>{userID}</span>
    </BlockTitle>
  </Container>;
}

export default Story;