import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const isLoggedInAction = createAsyncAction(actionTypes.TOKEN_CORRECT);
export const isLoggedIn = () => async dispatch => {
  const action = bindActionCreators(isLoggedInAction, dispatch);
  action.started();

  try {
    await api.isLoggedIn();
    action.success()
    return true;
  } catch (e) {
    action.failure();
    return false;
  }
}
