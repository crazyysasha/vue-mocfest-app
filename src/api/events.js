import axios from "axios";

export const getAll = () => {
  return axios.get('http://mocfest.loc/api/crazy/mocfest/v1.0.1/events');
}


export const getByIdOrSlug = (idOrSlug) => {
  return axios.get(`http://mocfest.loc/api/crazy/mocfest/v1.0.1/events/${idOrSlug}`);
}

// import axios from "axios";
// export const getAllEvents = async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
//     return data;
// };

