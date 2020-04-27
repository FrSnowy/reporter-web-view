export const pending = state => {
  const { pending = false } = state.app;
  return pending;
};