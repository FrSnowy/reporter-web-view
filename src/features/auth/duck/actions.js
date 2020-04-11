/*
import { bindActionCreators } from 'redux';
import { createAsyncAction } from 'utils/async-action-creator';
*/
import { actionTypes } from './constants';
import { createAction } from 'redux-actions';

export const changeInputValue = createAction(actionTypes.CHANGE_INPUTS_VALUE, payload => {
  const { login, password } = payload;
  payload.buttonEnabled = !(login === '' || password === '');
  return payload;
});