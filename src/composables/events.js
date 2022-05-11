import { getAll } from "@/api/events";
import { readonly, ref } from "vue";
import { afterChange } from "./locale";

const isLoading = ref(false);
const isLoaded = ref(false);
const events = ref([]);

const error = ref(null);
const fetchEvents = async () => {
    isLoading.value = true;
    await getAll().then((res) => {
        events.value = res.data;
        isLoading.value = false;
        isLoaded.value = true;
    }).catch((reason) => error.value = reason);
};

afterChange(() => {
    if (isLoaded.value) fetchEvents();
});

export default function useEvents() {
    return {
        fetchEvents,
        events: readonly(events),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        error: readonly(error),
    };

}