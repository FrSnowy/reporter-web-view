import pathes from "../../../config/pathes";
import axios from "axios";

export const isLoggedIn = async () => {
  const response = await axios.get(
    `${pathes.backend}/${pathes.namespace}/user/token_correct`,
    { withCredentials: true }
  );

  return response.data;
}