import { handleActions } from 'redux-actions';
import { getStoriesInfoAction, getStoriesCountAction } from './actions';

const initialState = {
  pending: false,
  list: [],
  error: false,
  count: 0,
};

export default handleActions(
	{
    [getStoriesInfoAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getStoriesInfoAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      list: payload.stories,
    }),
    [getStoriesInfoAction.failure]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload.error,
    }),
    [getStoriesCountAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getStoriesCountAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      count: payload.count,
    }),
    [getStoriesCountAction.failure]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload.error,
    }),
	},
	initialState,
);