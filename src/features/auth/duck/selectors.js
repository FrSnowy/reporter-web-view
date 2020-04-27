export const isUserLoggedIn = state => {
  console.log(state);
  const { isLoggedIn = false } = state.auth;
  return isLoggedIn;
}

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
  const { error = { } } = state.auth;
  if (!error) return { login: false, password: false };
  if (!error.login) error.login = false;
  if (!error.password) error.password = false;
  return error;
}