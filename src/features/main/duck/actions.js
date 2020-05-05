import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';

export const getAllErrorsAction = createAsyncAction(actionTypes.GET_LIST_ALL_ERRORS);
export const getAllErrors = () => async dispatch => {
  const action = bindActionCreators(getAllErrorsAction, dispatch);
  action.started();

  try {
    const res = await api.getAllErrors();
    action.success({ list: res.response });
    return res.response;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};
