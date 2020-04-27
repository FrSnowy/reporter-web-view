import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';
import { createAction } from 'redux-actions';
import getCookieValue from '../../../utils/getCookieValue';

export const changeInputValue = createAction(actionTypes.CHANGE_INPUTS_VALUE, payload => {
  const { login, password } = payload;
  payload.buttonEnabled = !(login === '' || password === '');
  return payload;
});

export const loginAction = createAsyncAction(actionTypes.LOGIN);
export const sendLoginRequest = (login, password) => async dispatch => {
  const action = bindActionCreators(loginAction, dispatch);
  action.started();

  try {
    const res = await api.login(login, password);
    document.cookie = `auth-token=${res.response}; max-age=86400`;
    action.success({ token: res.response });
  } catch (e) {
    console.log(e);
    action.failure();
  }
}

export const registerAction = createAsyncAction(actionTypes.REGISTER);
export const sendRegisterRequest = (login, password) => async dispatch => {
  const action = bindActionCreators(registerAction, dispatch);
  action.started();

  try {
    const res = await api.register(login, password);
    if (res.status === 'Error') {
      switch (res.response) {
        case 'Login is busy':
          action.failure({ error: 'Этот логин занят' });
          break;
        default:
          action.failure({ error: res.response });
          break;
      }
    }
    else action.success({ res });
  } catch (e) {
    console.log(e);
    action.failure({ error: e.message });
  }
}

export const autoLoginAction = createAsyncAction(actionTypes.AUTO_LOGIN_IF_COOKIE_PRESENTS);
export const autoLoginIfCookiePresent = () => async dispatch => {
  const action = bindActionCreators(autoLoginAction, dispatch);
  action.started();
  
  const authToken = getCookieValue('auth-token');
  if (!authToken) action.failure();

  try {
    const res = await api.isAuthTokenCorrect(authToken);
    if (res.response) {
      action.success({ token: authToken });
      window.location.href = '/main';
    }
    else action.failure();
  } catch (e) {
    console.log(e);
    action.failure();
  }
}