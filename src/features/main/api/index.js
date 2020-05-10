import pathes from "../../../config/pathes";
import axios from "axios";

export const getErrorsCount = async (props = { }) => {
  const { from = '', to = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/reports/errors_count?from=${from}&to=${to}`,
    { withCredentials: true }
  );
  return response.data;
};

export const getErrors = async (props = { }) => {
  const { from = '', to = '', limit = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/reports/errors?from=${from}&to=${to}&limit=${limit}`,
    { withCredentials: true }
  );

  return response.data;
};

export const getUsersCount = async (props = { }) => {
  const { onlyWithError = '', from = '', to = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/visitors/count?from=${from}&to=${to}&withError=${onlyWithError}`,
    { withCredentials: true }
  );

  return response.data;
}

export const getUsers = async (props = { }) => {
  const { onlyWithError = false, from = '', to = '', limit = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/visitors/info?from=${from}&to=${to}&withError=${onlyWithError}&limit=${limit}`,
    { withCredentials: true }
  );

  return response.data;
}