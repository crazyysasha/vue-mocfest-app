import { create, getById, pay, update } from "@/api/orders.js";
import { useStorage } from "@vueuse/core";
import { readonly, ref } from "vue";

const orders = useStorage('orders');

// доработать до конца

export default function useOrder() {
	const onCreate = () => {

		const data = ref();

		const isLoading = ref(false);

		const error = ref();

		const exec = async (credentials = { event, date, time, quantity }) => {
			isLoading.value = true;
			return await create(credentials).then((res) => {
				return res.data;
			}).then(orderData => {
				isLoading.value = false;
				data.value = orderData;
				return orderData;
			}).catch(orderError => {
				isLoading.value = false;
				error.value = orderError.response?.data?.error;
			});
		}

		return {
			isLoading: readonly(isLoading),
			error: readonly(error),
			data: data,
			exec,
		};
	};
	const onUpdate = () => {

		const data = ref();

		const isLoading = ref(false);

		const error = ref();

		const exec = async (orderId, credentials = { phone, email, payment_type }) => {
			isLoading.value = true;
			return await update(orderId, credentials).then((res) => {
				return res.data;
			}).then(orderData => {
				isLoading.value = false;
				data.value = orderData;
				return orderData;
			}).catch(orderError => {
				isLoading.value = false;
				error.value = orderError.response?.data?.error;
			});
		}

		return {
			isLoading: readonly(isLoading),
			error: readonly(error),
			data: readonly(data),
			exec,
		};
	}

	const onPay = () => {
		const data = ref();

		const isLoading = ref(false);

		const error = ref();

		const exec = async (orderId) => {
			isLoading.value = true;
			return await pay(orderId).then((res) => {
				return res.data;
			}).then(orderData => {
				isLoading.value = false;
				data.value = orderData;
				return orderData;
			}).catch(orderError => {
				isLoading.value = false;
				error.value = orderError.response?.data?.error;
			});
		}

		return {
			isLoading: readonly(isLoading),
			error: readonly(error),
			data: readonly(data),
			exec,
		};
	};
	const onGet = () => {
		const data = ref();

		const isLoading = ref(false);

		const error = ref();

		const exec = async (orderId) => {
			isLoading.value = true;
			return await getById(orderId).then((res) => {
				return res.data;
			}).then(orderData => {
				isLoading.value = false;
				data.value = orderData;
				return orderData;
			}).catch(orderError => {
				isLoading.value = false;
				error.value = orderError.response?.data?.error;
			});
		}

		return {
			isLoading: readonly(isLoading),
			error: readonly(error),
			data: readonly(data),
			exec,
		};
	};
	return {
		onCreate,
		onUpdate,
		onPay,
		onGet,
		orders: readonly(orders),
	};
}