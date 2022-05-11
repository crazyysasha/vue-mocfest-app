import useLocale, { beforeChange } from "@/composables/locale";
import axios from "axios";

const { locale, afterChange } = useLocale();


const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale.value,
    },
});

beforeChange((selected) => {
    instance.defaults.headers["Accept-Language"] = selected;
});

export default instance;