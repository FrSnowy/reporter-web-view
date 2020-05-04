import { combineReducers } from 'redux';
import * as app from '../features/app/duck';
import * as auth from '../features/auth/duck';
import * as main from '../features/main/duck';

export default () =>
	combineReducers({
		app: app.reducer,
		auth: auth.reducer,
		main: main.reducer,
	});