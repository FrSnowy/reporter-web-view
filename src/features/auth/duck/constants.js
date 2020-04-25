import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'auth';

export const actionTypes = keyMirror(
	{
		CHANGE_INPUTS_VALUE: null,
		LOGIN: null,
		REGISTER: null,
	},
	FEATURE_NAME,
);