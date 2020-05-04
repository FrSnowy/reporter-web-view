import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const getLastErrorsAction = createAsyncAction(actionTypes.GET_LIST_LAST_ERRORS);
export const getLastErrors = () => async dispatch => {
  const action = bindActionCreators(getLastErrorsAction, dispatch);
  action.started();

  try {
    const res = await api.getLastErrors();
    action.success({ listLast: res.response });
    return res.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};

export const getAllErrorsAction = createAsyncAction(actionTypes.GET_LIST_ALL_ERRORS);
export const getAllErrors = () => async dispatch => {
  const action = bindActionCreators(getAllErrorsAction, dispatch);
  action.started();

  try {
    const res = await api.getAllErrors();
    action.success({ listAll: res.response });
    return res.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};
