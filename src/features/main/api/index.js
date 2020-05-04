import pathes from "../../../config/pathes";
import axios from "axios";

export const getLastErrors = async () => {
  const dates = {
    from: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
    to: new Date().toISOString()
  };

  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/errors?from=${dates.from}&to=${dates.to}&limit=10`,
    { withCredentials: true }
  );

  return response.data;
};

export const getAllErrors = async () => {
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/errors`,
    { withCredentials: true }
  );

  return response.data;
}