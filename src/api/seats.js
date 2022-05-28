import axios from "@/utils/axios";

export const getSeats = (idOrSlug) => {
    return axios.get(`seats/${idOrSlug}`);
}

export const getSeatsPrices = () => {
    return axios.get('seats/groups')
}