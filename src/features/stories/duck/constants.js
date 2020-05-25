import keyMirror from '../../../utils/key-mirror';

export const FEATURE_NAME = 'stories';

export const actionTypes = keyMirror(
	{
    GET_STORIES: null,
    GET_STORIES_COUNT: null,
	},
	FEATURE_NAME,
);