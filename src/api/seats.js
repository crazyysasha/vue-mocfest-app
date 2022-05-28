import axios from "@/utils/axios";

export const getSeats = (idOrSlug) => {
    return axios.get(`seats/${idOrSlug}`);
}