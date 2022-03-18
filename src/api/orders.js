import axios from "axios";

/** нет необходимости писать название сущности, т.к. название файла определяет саму сущность
	  BAD: в место create(order) {
		 ....
	} 
		лучше обозначить конкретные данные которые принимаются от пользователя, скажем будем принимать обьект, и сразу же деструктизируем
		и зададим дефолтное значение для того что бы не допустить выброс искючение на уровне javascript
*/

export const create = (tickets) => {
	return axios.post(`${process.env.VUE_APP_API_URL}/orders`, tickets)
		.then(response => console.log(response))
		.catch(error => console.log(error));
};

// метод изменения заказа, нужен для того что бы задать номер телефона к заказу и почту 
export const update = ({
	id, phone, email
}) => {
	return axios.post(`${process.env.VUE_APP_API_URL}/order/${id}`, {email, phone})
		.then(response => console.log(response))
		.catch(error => console.log(error));
}

/// метод оплаты заказа
export const buy = (id) => {
	// TODO: описать полностью
};