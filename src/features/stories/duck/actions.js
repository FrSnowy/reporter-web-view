import * as api from '../api';
import * as userAPI from '../../users/api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const getStoriesInfoAction = createAsyncAction(actionTypes.GET_STORIES);
export const getStories = (props = { }) => async dispatch => {
  const { limit = '' } = props;
  const action = bindActionCreators(getStoriesInfoAction, dispatch);
  action.started();

  try {
    const stories = await api.getStories({ limit });
    action.success({ stories: stories.response });
    return stories.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};

export const getStoriesCountAction = createAsyncAction(actionTypes.GET_ERRORS_COUNT);
export const getStoriesCount = (props = { }) => async dispatch => {
  const { from = '', to  = '' } = props;
  const action = bindActionCreators(getStoriesCountAction, dispatch);
  action.started();

  try {
    const count = await userAPI.getUsersCount({ from, to });
    action.success({ count: count.response });
    return count.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};
