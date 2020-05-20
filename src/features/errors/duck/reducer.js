import { handleActions } from 'redux-actions';
import { getErrorsInfoAction, getErrorsCountAction } from './actions';

const initialState = {
  pending: false,
  list: [],
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
    [getErrorsInfoAction.failure]: state => ({
      ...state,
      pending: false,
    }),
    [getErrorsCountAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getErrorsCountAction.success]: (state , { payload }) => ({
      ...state,
      pending: true,
      count: payload.count,
    }),
    [getErrorsCountAction.failure]: state => ({
      ...state,
      pending: false,
    }),
	},
	initialState,
);