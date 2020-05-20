export const isPending = state => {
  const { pending = false } = state.errors;
  return pending;
};

export const getErrors = state => {
  const { list = [] } = state.errors;
  return list;
};

export const getErrorsCount = state => {
  const { count = 0 } = state.errors;
  return count;
}
