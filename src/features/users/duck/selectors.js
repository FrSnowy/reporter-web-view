export const isPending = state => {
  const { pending = false } = state.errors;
  return pending;
};

export const getUsers = state => {
  const { list = [] } = state.users;
  return list;
};

export const getUsersCount = state => {
  const { count = 0 } = state.users;
  return count;
};

export const getRequestError = state => {
  const { error = false } = state.users;
  return error;
};