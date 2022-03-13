import { getAll } from "@/api/partners";
import { ref } from "vue";

const isLoading = ref(false);
const isLoaded = ref(false);
const partners = ref([]);

const error = ref(null);

export default function usePartners() {

    const fetchPartners = () => {
        isLoading.value = true;
        getAll().then((res) => {
            partners.value = res.data;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch((reason) => error.value = reason);
    };

    return { isLoading, partners, error, fetchPartners, isLoaded };

}