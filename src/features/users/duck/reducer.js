import { handleActions } from 'redux-actions';
import { getUsersInfoAction, getUsersCountAction } from './actions';

const initialState = {
  pending: false,
  list: [],
  count: 0,
};

export default handleActions(
	{
    [getUsersInfoAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getUsersInfoAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      list: payload.users,
    }),
    [getUsersInfoAction.failure]: state => ({
      ...state,
      pending: false,
    }),
    [getUsersCountAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [getUsersCountAction.success]: (state , { payload }) => ({
      ...state,
      pending: false,
      count: payload.count,
    }),
    [getUsersCountAction.failure]: state => ({
      ...state,
      pending: false,
    }),
	},
	initialState,
);