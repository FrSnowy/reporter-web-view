import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const getUsersInfoAction = createAsyncAction(actionTypes.GET_USERS);
export const getUsers = (props = { }) => async dispatch => {
  const { from = '', to = '', limit = '' } = props;
  const action = bindActionCreators(getUsersInfoAction, dispatch);
  action.started();

  try {
    const users = await api.getUsers({ from, to, limit });
    action.success({ users: users.response });
    return users.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};

export const getUsersCountAction = createAsyncAction(actionTypes.GET_ERRORS_COUNT);
export const getUsersCount = (props = { }) => async dispatch => {
  const { from = '', to = '' } = props;
  const action = bindActionCreators(getUsersCountAction, dispatch);
  action.started();

  try {
    const count = await api.getUsersCount({ from, to });
    action.success({ count: count.response });
    return count.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};
