import axios from "axios";

/** нет необходимости писать название сущности, т.к. название файла определяет саму сущность
	  BAD: в место create(order) {
		 ....
	} 
		лучше обозначить конкретные данные которые принимаются от пользователя, скажем будем принимать обьект, и сразу же деструктизируем
		и зададим дефолтное значение для того что бы не допустить выброс искючение на уровне javascript
*/

export const create = (credentials = { event, date, time, quantity, }) => {
	return axios.post(`${process.env.VUE_APP_API_URL}/orders`, credentials);
};

// метод изменения заказа, нужен для того что бы задать номер телефона к заказу и почту 
export const update = (id, credentials = { email, phone }) => {
	return axios.post(`${process.env.VUE_APP_API_URL}/orders/${id}`, credentials)
}

/// метод оплаты заказа
export const pay = (id) => {
	return axios.post(`${process.env.VUE_APP_API_URL}/orders/${id}/pay`)
};
/// метод получения заказа
export const getById = (id) => {
	return axios.get(`${process.env.VUE_APP_API_URL}/orders/${id}`)
};