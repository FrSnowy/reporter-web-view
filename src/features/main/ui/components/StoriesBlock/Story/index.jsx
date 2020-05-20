import React from 'react';
import * as Story from './elements';
import getText from '../../../../../shared/Text';
import Link from '../../../../../shared/Link';
import SingleStep from '../Step';

const text = getText('MAIN')

const SingleStory = ({ userID, steps = [] }) => {
  if (!steps || steps.length === 0) return 123;

  return <Story.Container>
    <Story.Title>
      <span>{text('STORIES_STORY_BLOCK_TITLE')}<br /></span>
      <span>{userID}</span>
    </Story.Title>
    <Story.Steps>
      {
        steps
          .filter((_, i) => i < 4)
          .map((step, i) => <SingleStep key = {i} {...step} /> )
      }
      { steps.length > 4 && <Link>Далее</Link> }
    </Story.Steps>
  </Story.Container>;
}

export default SingleStory;