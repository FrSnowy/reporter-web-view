export const pending = state => {
  const { pending = false } = state.app;
  return pending;
};

export const locale = state => {
  const { locale = 'ru' } = state.app;
  return locale;
};

export const userName = state => {
  const { userName = null } = state.app;
  return userName;
}