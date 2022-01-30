import axios from "axios";

export const getAllEvents = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    return data;
};

