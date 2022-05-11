import { readonly, ref } from "vue";

export const count = ref(0);

export const increment = () => {
    count.value++;
}
export const decrement = () => {
    count.value--;
}

export function useCounter() {
    return { count: readonly(count), increment, decrement };
}