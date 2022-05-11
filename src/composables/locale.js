
import { useStorage } from "@vueuse/core";
import { readonly } from "vue";


const locale = useStorage('locale', 'ru');

const beforeCallbackHanlers = [];
const afterCallbackHanlers = [];


export const afterChange = (callback) => {
    afterCallbackHanlers.push(callback);
};

export const beforeChange = (callback) => {
    beforeCallbackHanlers.push(callback);
};

export default function useLocale() {
    const onChange = (selected = 'ru') => {
        for (const callback of beforeCallbackHanlers) {
            callback(selected);
        }
        locale.value = selected;
        for (const callback of afterCallbackHanlers) {
            callback(selected);
        }
    };
    return {
        locale: readonly(locale),
        onChange,
        afterChange,
        beforeChange,
    };
}