import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'auth';

export const actionTypes = keyMirror(
	{
		CHANGE_INPUTS_VALUE: null,
		LOGIN: null,
		REGISTER: null,
		AUTO_LOGIN_IF_COOKIE_PRESENTS: null,
	},
	FEATURE_NAME,
);