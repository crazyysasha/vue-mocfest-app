import { get } from "@/api/privacyPolicy";
import { reactive, readonly, ref } from "vue";
import { afterChange, beforeChange } from "@/composables/locale";

const data = reactive({
    title: '',
    description: '',
    content: '',
});
const isLoading = ref(false);

const isLoaded = ref(false);

afterChange(() => {
    if (isLoaded.value) exec();
});
const onGet = () => {

    return {
        data: readonly(data),
        isLoaded: readonly(isLoaded),
        isLoading: readonly(isLoading),
        exec,
    };
};
const exec = async () => {
    isLoading.value = true;
    await get().then(respose => respose.data.data).then(faq => {
        Object.assign(data, faq);

        isLoaded.value = true;
        isLoading.value = false;
    });
};

export default function usePrivacyPolicy() {

    return {
        data: readonly(data),
        isLoaded: readonly(isLoaded),
        isLoading: readonly(isLoading),
        onGet,
    };
}