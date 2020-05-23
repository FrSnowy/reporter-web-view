import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'users';

export const actionTypes = keyMirror(
	{
    GET_USERS: null,
    GET_USERS_COUNT: null,
	},
	FEATURE_NAME,
);