import { create, update } from "@/api/orders.js";
import { useStorage } from "@vueuse/core";
import { readonly, ref } from "vue";

const orders = useStorage();

// доработать до конца

export default function useOrder() {
	const isLoading = ref(true);
	const error = ref(); 
	const data = ref();
	const onCreate = async (tickets) => {
		await create(tickets).then((res) => {
			data.value = res
		});
	};
	const onUpdate = async (data) => {
		await update(data).then((res) => {
			data.value = res
		}).catch((e) => error.value = e);
	}

	return {
		onCreate,
		onUpdate,
		orders: readonly(orders),
		isLoading: readonly(isLoading),
		orderError: readonly(error),
		data: readonly(data),
	};
}