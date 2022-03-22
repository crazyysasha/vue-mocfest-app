import { getAll } from "@/api/events";
import { readonly, ref } from "vue";

const isLoading = ref(false);
const isLoaded = ref(false);
const events = ref([]);

const error = ref(null);

export default function useEvents() {

    const fetchEvents = async () => {
        isLoading.value = true;
        await getAll().then((res) => {
            events.value = res.data;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch((reason) => error.value = reason);
    };

    return {
        fetchEvents,
        events: readonly(events),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        error: readonly(error),
    };

}