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

export const pending = state => {
  const { pending = false } = state.auth;
  return pending;
}

export const error = state => {
  const { error = null } = state.auth;
  return error;
}