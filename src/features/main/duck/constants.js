import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'main';

export const actionTypes = keyMirror(
	{
		GET_ERRORS: null,
		GET_USERS: null,
		GET_STORIES: null,
	},
	FEATURE_NAME,
);