import axios from 'axios'

export const login = async (login, password) => {
  const response = await axios.get(
    `http://localhost:5000/api/v1/auth?login=${login}&password=${password}`,
    { withCredentials: false }
  );
  return response.data;
};

export const register = async (login, password) => {
  const response = await axios.post(
    'http://localhost:5000/api/v1/auth',
    {
      withCredentials: false,
      body: { login, password },
    }
  );
  return response.data;
};
