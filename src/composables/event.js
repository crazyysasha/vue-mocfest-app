import { getByIdOrSlug } from "@/api/events.js";
import { ref } from "vue";
import { afterChange } from "./locale";

const isLoading = ref(false);
const isLoaded = ref(false);

const event = ref(null);

const error = ref(null);

const fetchEvent = async (idOrSlug) => {
    isLoading.value = true;
    getByIdOrSlug(idOrSlug).then((res) => {
        event.value = res.data;
        isLoading.value = false;
        isLoaded.value = true;
    }).catch((reason) => error.value = reason);
};

afterChange(() => {
    if (isLoaded.value) fetchEvent(event?.value?.slug);
});

export default function useEvent() {
    return { isLoading, event, error, fetchEvent };
}