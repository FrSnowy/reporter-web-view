import { handleActions } from 'redux-actions';
import { getErrorInfoAction, getUsersInfoAction, getStoriesInfoAction } from './actions';

const initialState = {
  errors: {
    pending: false,
    list: null,
    count: { lastWeek: null, allTime: null },
    error: null,
  },
  users: {
    pending: false,
    list: null,
    error: null,
    count: { lastWeek: null, allTime: null, allTimeWithError: null },
  },
  stories: {
    pending: false,
    list: null,
    error: null,
  },
};

export default handleActions(
	{
    [getErrorInfoAction.started]: state => ({
      ...state,
      errors: {
        ...state.errors,
        pending: true,
      }
    }),
    [getErrorInfoAction.success]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        list: payload.list,
        count: { lastWeek: payload.lastWeekCount, allTime: payload.allTimeCount },
      },
    }),
    [getErrorInfoAction.failure]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        error: payload.error,
      },
    }),
    [getUsersInfoAction.started]: state => ({
      ...state,
      users: {
        ...state.users,
        pending: true,
      },
    }),
    [getUsersInfoAction.success]: (state, { payload }) => ({
      ...state,
      users: {
        ...state.users,
        pending: false,
        list: payload.list,
        count: {
          lastWeek: payload.lastUsersCount,
          allTime: payload.allUsersCount,
          allTimeWithError: payload.allUsersWithErrorCount,
        },
      },
    }),
    [getUsersInfoAction.failure]: (state, { payload }) => ({
      ...state,
      users: {
        ...state.users,
        pending: false,
        error: payload.error,
      },
    }),
    [getStoriesInfoAction.started]: state => ({
      ...state,
      stories: {
        ...state.stories,
        pending: true,
      },
    }),
    [getStoriesInfoAction.success]: (state, { payload }) => ({
      ...state,
      stories: {
        ...state.stories,
        pending: false,
        list: payload.stories,
      }
    }),
    [getStoriesInfoAction.failure]: (state, { payload }) => ({
      ...state,
      stories: {
        ...state.stories,
        pending: false,
        error: payload.error,
      },
    })
	},
	initialState,
);