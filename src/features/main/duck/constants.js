import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'main';

export const actionTypes = keyMirror(
	{
		GET_LIST_ALL_ERRORS: null,
		GET_LIST_ALL_USERS: null,
	},
	FEATURE_NAME,
);