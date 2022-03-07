

import { getByIdOrSlug } from "@/api/events.js";
import { ref } from "vue";

const isLoading = ref(false);

const event = ref(null);

const error = ref(null);

export default function useEvent(idOrSlug) {

    const fetchEvent = async () => {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        getByIdOrSlug(idOrSlug).then((res) => {
            event.value = res.data;
            isLoading.value = false;
        }).catch((reason) => error.value = reason);
    };

    return { isLoading, event, error, fetchEvent };

}