import pathes from "../../../config/pathes";
import axios from "axios";

export const getAllErrors = async () => {
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/reports/errors`,
    { withCredentials: true }
  );

  return response.data;
}