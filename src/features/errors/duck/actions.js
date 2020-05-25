import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const getErrorsInfoAction = createAsyncAction(actionTypes.GET_ERRORS);
export const getErrors = (props = { }) => async dispatch => {
  const { from = '', to = '', limit = '' } = props;
  const action = bindActionCreators(getErrorsInfoAction, dispatch);
  action.started();

  try {
    const errors = await api.getErrors({ from, to, limit });
    action.success({ errors: errors.response });
    return errors.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};

export const getErrorsCountAction = createAsyncAction(actionTypes.GET_ERRORS_COUNT);
export const getErrorsCount = (props = { }) => async dispatch => {
  const { from = '', to = '' } = props;
  const action = bindActionCreators(getErrorsCountAction, dispatch);
  action.started();

  try {
    const count = await api.getErrorsCount({ from, to });
    action.success({ count: count.response });
    return count.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};
