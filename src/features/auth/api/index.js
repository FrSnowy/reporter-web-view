import axios from 'axios'
import pathes from '../../../config/pathes'

export const login = async (login, password) => {
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/user/auth?login=${login}&password=${password}`,
    { withCredentials: true }
  );
  return response.data;
};

export const register = async (login, password) => {
  const response = await axios.post(
    `${pathes.backend}/${pathes.namespace}/user/auth`,
    {
      withCredentials: true,
      body: { login, password },
    }
  );
  return response.data;
};