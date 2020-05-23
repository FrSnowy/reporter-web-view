import pathes from "../../../config/pathes";
import axios from "axios";

export const getStories = async (props = { }) => {
  const { limit = '' } = props;
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/visitors/stories?limit=${limit}`,
    { withCredentials: true }
  );

  return response.data;
}