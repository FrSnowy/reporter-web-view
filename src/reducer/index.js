import { combineReducers } from 'redux';
import * as auth from '../features/auth/duck';

export default () =>
	combineReducers({
		auth: auth.reducer,
	});