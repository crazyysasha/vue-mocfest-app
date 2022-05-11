import axios from "@/utils/axios";

export const getAll = () => {
  return axios.get(`events`);
}


export const getByIdOrSlug = (idOrSlug) => {
  return axios.get(`events/${idOrSlug}`);
}

// import axios from "axios";
// export const getAllEvents = async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
//     return data;
// };

 