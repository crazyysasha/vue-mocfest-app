import axios from "axios";

export const getAll = () => {
  return axios.get(`${process.env.VUE_APP_API_URL}/partners`);
}



// import axios from "axios";
// export const getAllEvents = async () => {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
//     return data;
// };

