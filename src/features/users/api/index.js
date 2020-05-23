import pathes from "../../../config/pathes";
import axios from "axios";

export const getUsers = async (props = { }) => {
  const { onlyWithError = false, from = '', to = '', limit = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/visitors/info?from=${from}&to=${to}&withError=${onlyWithError}&limit=${limit}`,
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
};