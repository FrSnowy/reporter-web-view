import { handleActions } from 'redux-actions';
import {
  changeInputValue,
  loginAction,
  registerAction,
} from './actions';

const initialState = {
  pending: false,
  error: null,
  input: {
    login: null,
    password: null,
  },
  button: {
    enabled: false,
  },
};

export default handleActions(
	{
		[changeInputValue]: (state, { payload }) => ({
      ...state,
      input: {
        ...state.input,
        login: payload.login,
        password: payload.password,
      },
      button: {
        ...state.button,
        enabled: payload.buttonEnabled,
      }
    }),
    [loginAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [loginAction.success]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      token: payload.token,
      pending: false,
    }),
    [loginAction.failure]: state => ({
      ...state,
      pending: false,
    }),
    [registerAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [registerAction.success]: state => ({
      ...state,
      pending: false,
      error: null,
    }),
    [registerAction.failure]: (state, { payload }) => ({
      ...state,
      pending: false,
      error: { login: payload.error },
    }),
	},
	initialState,
);