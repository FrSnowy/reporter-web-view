import { handleActions } from 'redux-actions';
import { changeInputValue } from './actions';

const initialState = {
  pending: false,
  input: {
    login: null,
    password: null,
  },
  button: {
    enabled: false,
  }
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
	},
	initialState,
);