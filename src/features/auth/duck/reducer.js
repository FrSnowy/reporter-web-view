import { handleActions } from 'redux-actions';
import {
  changeInputValue,
  loginAction,
  registerAction,
  autoLoginAction,
} from './actions';

const initialState = {
  isLoggedIn: false,
  token: null,
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
    [autoLoginAction.started]: state => ({
      ...state,
      pending: true,
    }),
    [autoLoginAction.failure]: state => ({
      ...state,
      pending: false,
      isLoggedIn: false,
      token: null,
    }),
    [autoLoginAction.success]: (state, { payload }) => ({
      ...state,
      pending: false,
      isLoggedIn: true,
      token: payload.token,
    })
	},
	initialState,
);