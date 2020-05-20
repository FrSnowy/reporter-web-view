import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'errors';

export const actionTypes = keyMirror(
	{
    GET_ERRORS: null,
    GET_ERRORS_COUNT: null,
	},
	FEATURE_NAME,
);