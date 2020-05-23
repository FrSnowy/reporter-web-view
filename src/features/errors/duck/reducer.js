import { handleActions } from 'redux-actions';
import { getErrorsInfoAction, getErrorsCountAction } from './actions';

const initialState = {
  pending: false,
  list: [],
  error: false,
  count: 0,
};

export default handleActions(
	{
    [getErrorsInfoAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getErrorsInfoAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      list: payload.errors,
    }),
    [getErrorsInfoAction.failure]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload.error,
    }),
    [getErrorsCountAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getErrorsCountAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      count: payload.count,
    }),
    [getErrorsCountAction.failure]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: payload.error,
    }),
	},
	initialState,
);