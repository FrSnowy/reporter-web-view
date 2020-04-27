import { handleActions } from 'redux-actions';
import { isLoggedInAction } from './actions';

const initialState = {
  pending: false,
};

export default handleActions(
	{
    [isLoggedInAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [isLoggedInAction.success]: (state) => ({
      ...state,
      pending: false,
    }),
    [isLoggedInAction.failure]: state => ({
      ...state,
      pending: false,
    }),
	},
	initialState,
);