import { create, update } from "@/api/orders.js";
import { useStorage } from "@vueuse/core";
import { readonly, ref } from "vue";

const orders = useStorage();

// доработать до конца

export default function useOrder() {
	const isLoading = ref(false);
	const error = ref(); 
	const data = ref();
	const onCreate = async (tickets) => {
		const response = await create(tickets);
	};
	const onUpdate = async (data) => {
		const response = await update(data);
	}
	const onBuy = () => {

	}

	return {
		onCreate,
		onUpdate,
		onBuy,
		orders: readonly(orders),
		isLoading: readonly(isLoading),
		error: readonly(error),
		data: readonly(data),
	};
}