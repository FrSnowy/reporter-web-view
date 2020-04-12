import axios from 'axios'


export const login = async (login, password) => {
  const response = await axios.get(
    `http://localhost:5000/api/v1/auth?login=${login}&password=${password}`,
    { withCredentials: true }
  );
  return response.data;
};


// Временно вместо реги
/*
export const login = async (login, password) => {
  const response = await axios.post(
    'http://localhost:5000/api/v1/auth',
    {
      withCredentials: true,
      body: { login, password },
    }
  );
  return response.data;
};
*/
