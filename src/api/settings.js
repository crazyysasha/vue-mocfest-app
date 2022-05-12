import axios from "@/utils/axios";

export const get = () => {
    return axios.get(`settings`);
}