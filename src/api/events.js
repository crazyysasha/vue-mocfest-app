import axios from "@/utils/axios";

export const getAll = () => {
  return axios.get(`events`);
}


export const getByIdOrSlug = (idOrSlug) => {
  return axios.get(`events/${idOrSlug}`);
}
