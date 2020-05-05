import { handleActions } from 'redux-actions';
import { getAllErrorsAction } from './actions';

const initialState = {
  errors: {
    pending: false,
    list: null,
    error: null,
  },
};

export default handleActions(
	{
    [getAllErrorsAction.started]: state => ({
      ...state,
      errors: {
        ...state.errors,
        pending: true,
      }
    }),
    [getAllErrorsAction.success]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        list: payload.list,
      },
    }),
    [getAllErrorsAction.failure]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        error: payload.error,
      },
    }),
	},
	initialState,
);