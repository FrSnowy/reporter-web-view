export const errorBlock = state => {
  const { errors = { } } = state.main;
  const { pending = false, listLast = null, listAll = null, error = null } = errors;

  return { pending, listLast, listAll, error };
};