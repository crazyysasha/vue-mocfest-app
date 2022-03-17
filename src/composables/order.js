import { createOrder } from "@/api/order.js";

export default function useOrder(order) {
	
	const addOrder = () => {		
		createOrder(order).then(res => console.log(res))
	} 
	return { addOrder };
}