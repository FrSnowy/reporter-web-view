import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'main';

export const actionTypes = keyMirror(
	{
    GET_LIST_LAST_ERRORS: null,
    GET_LIST_ALL_ERRORS: null,
	},
	FEATURE_NAME,
);