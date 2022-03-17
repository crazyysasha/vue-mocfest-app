import axios from "axios";

export const createOrder = (order) => {
	const article = order;
	return axios.post(`${process.env.VUE_APP_API_URL}/order`, article)
		.then(response => console.log(response))
		.catch(error => console.log(error));
};
