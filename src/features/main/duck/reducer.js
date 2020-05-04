import { handleActions } from 'redux-actions';
import { getLastErrorsAction, getAllErrorsAction } from './actions';

const initialState = {
  errors: {
    pending: false,
    listLast: null,
    listAll: null,
    error: null,
  },
};

export default handleActions(
	{
    [getLastErrorsAction.started]: state => ({
      ...state,
      errors: {
        ...state.errors,
        pending: true,
      }
    }),
    [getLastErrorsAction.success]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        listLast: payload.listLast,
      },
    }),
    [getLastErrorsAction.failure]: (state, { payload }) => ({
      ...state,
      errors: {
        ...state.errors,
        pending: false,
        error: payload.error,
      },
    }),
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
        listAll: payload.listAll,
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