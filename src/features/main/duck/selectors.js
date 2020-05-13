export const errorBlock = state => {
  const { errors = { } } = state.main;
  const { pending = false, list = null, count = { lastWeek: 0, allTime: 0 }, error = null } = errors;

  return { pending, list, count, error };
};

export const usersBlock = state => {
  const { users = { } } = state.main;
  const { pending = false, list = null, count = { lastWeek: 0, allTime: 0, allTimeWithError: 0 }, error = null } = users;


  return { pending, list, count , error };
};

export const storiesBlock = state => {
  const { stories = { } } = state.main;
  const { pending = false, list = null, error = null } = stories;
  return { pending, list, error };
}