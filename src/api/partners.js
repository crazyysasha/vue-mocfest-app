import axios from "axios";

export const getAll = () => {
  return axios.get(`${process.env.VUE_APP_API_URL}/partners`);
}

