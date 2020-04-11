export const loginInputValue = state => {
  const { login = '' } = state.auth.input;
  return login || '';
};

export const passwordInputValue = state => {
  const { password = '' } = state.auth.input;
  return password || '';
};

export const isButtonEnabled = state => {
  const { enabled = false } = state.auth.button;
  return enabled;
}