import React from 'react';
import { Container, BlockTitle, StepsContainer, StepContainer, StepTime, StepInfo, StepImage, StepText } from './elements';
import getText from '../../../../../shared/Text';
import Icon from '../../../../../shared/Icon';
import dayjs from 'dayjs';
import Tooltip from '../../shared/Tooltip';
import Link from '../../../../../shared/Link';

const text = getText('MAIN')

const Story = ({ userID, steps = [] }) => {
  if (!steps || steps.length === 0) return 123;

  return <Container>
    <BlockTitle>
      <span>{text('STORIES_STORY_BLOCK_TITLE')}<br /></span>
      <span>{userID}</span>
    </BlockTitle>
    <StepsContainer>
      {
        steps
          .filter((_, i) => i < 4)
          .map((step, i) => 
            <StepContainer key = {i} error = {step.type === 'error'} href = {step.info.url}>
              <StepTime>{dayjs(step.fired_at).format('DD.MM.YYYY HH:mm')}</StepTime>
              <StepInfo error = {step.type === 'error'}>
                <StepImage>
                  <Icon name = {step.type === 'error' ? 'warning' : 'footprint'} />
                </StepImage>
                <StepText>
                  {step.info.message}
                </StepText>
              </StepInfo>
              <Tooltip>{step.info.message}</Tooltip>
            </StepContainer>
          )
      }
      { steps.length > 4 && <Link>Далее</Link>}
    </StepsContainer>
  </Container>;
}

export default Story;