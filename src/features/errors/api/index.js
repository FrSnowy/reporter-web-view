import pathes from "../../../config/pathes";
import axios from "axios";

export const getErrors = async (props = { }) => {
  const { from = '', to = '', limit = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/reports/errors?from=${from}&to=${to}&limit=${limit}`,
    { withCredentials: true }
  );

  return response.data;
};

export const getErrorsCount = async (props = { }) => {
  const { from = '', to = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/reports/errors_count?from=${from}&to=${to}`,
    { withCredentials: true }
  );
  return response.data;
};