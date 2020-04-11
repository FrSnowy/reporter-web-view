import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';
import { createAction } from 'redux-actions';

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
    console.log(res);
    action.success({ res });
  } catch (e) {
    console.log(e);
    action.failure();
  }
}