import axios from "@/utils/axios";

export const getAll = () => {
  return axios.get(`partners`);
}

