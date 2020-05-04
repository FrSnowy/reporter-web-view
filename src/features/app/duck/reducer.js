import { handleActions } from 'redux-actions';
import { isLoggedInAction } from './actions';

const initialState = {
  pending: false,
  locale: 'ru',
  userName: null,
};

export default handleActions(
	{
    [isLoggedInAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [isLoggedInAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      userName: payload.name,
    }),
    [isLoggedInAction.failure]: state => ({
      ...state,
      pending: false,
    }),
	},
	initialState,
);