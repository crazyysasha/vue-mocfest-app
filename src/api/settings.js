import axios from "axios";

export const get = () => {
    return axios.get(`${process.env.VUE_APP_API_URL}/settings`);
}
export const getImagesGallery = () => {
    return axios.get(`${process.env.VUE_APP_API_URL}/gallery`);
}