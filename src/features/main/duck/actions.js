import * as api from '../api';
import { bindActionCreators } from 'redux';
import { createAsyncAction } from '../../../utils/async-action-creator';
import { actionTypes } from './constants';
import dayjs from 'dayjs';

export const getErrorInfoAction = createAsyncAction(actionTypes.GET_LIST_ALL_ERRORS);
export const getErrorInfo = () => async dispatch => {
  const action = bindActionCreators(getErrorInfoAction, dispatch);
  action.started();

  try {
    const currentDate = dayjs();
    const [lastErrors, lastErrorsCount, allErrorsCount] = await Promise.all([
      api.getErrors({ from: currentDate.add(-7, 'day').format(), to: currentDate.format(), limit: 4 }),
      api.getErrorsCount({ from: currentDate.add(-7, 'day').format(), to: currentDate.format() }),
      api.getErrorsCount({ })
    ]);

    const result = { list: lastErrors.response, lastWeekCount: lastErrorsCount.response, allTimeCount: allErrorsCount.response };
    action.success(result);
    return result;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
};

export const getUsersInfoAction = createAsyncAction(actionTypes.GET_LIST_ALL_USERS);
export const getUsersInfo = () => async dispatch => {
  const action = bindActionCreators(getUsersInfoAction, dispatch);
  action.started();

  try {
    const currentDate = dayjs();
    const [users, lastUsersCount, allUsersWithErrorCount, allUsersCount] = await Promise.all([
      api.getUsers(),
      api.getUsersCount({ from: currentDate.add(-7, 'day').format(), to: currentDate.format() }),
      api.getUsersCount({ onlyWithError: true }),
      api.getUsersCount(),
    ]);

    const result = { list: users.response, lastUsersCount: lastUsersCount.response, allUsersCount: allUsersCount.response, allUsersWithErrorCount: allUsersWithErrorCount.response };
    action.success(result);
    return result;
  } catch (e) {
    action.failure({ error: e.message });
    return false;
  }
}
