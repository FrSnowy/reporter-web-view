export const isPending = state => {
  const { pending = false } = state.stories;
  return pending;
};

export const getStories = state => {
  const { list = { } } = state.stories;
  const storiesAsArray = Object.keys(list).map(key => ({
    steps: list[key],
    user: key,
  }));

  return storiesAsArray;
};

export const getStoriesCount = state => {
  const { count = 0 } = state.stories;
  return count;
};

export const getRequestError = state => {
  const { error = false } = state.stories;
  return error;
};