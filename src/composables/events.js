import { getAll } from "@/api/events";
import { ref } from "vue";

const isLoading = ref(false);
const isLoaded = ref(false);
const events = ref([]);

const error = ref(null);

export default function useEvents() {

    const fetchEvents = () => {
        isLoading.value = true;
        getAll().then((res) => {
            events.value = res.data;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch((reason) => error.value = reason);
    };

    return { isLoading, events, error, fetchEvents, isLoaded };

}