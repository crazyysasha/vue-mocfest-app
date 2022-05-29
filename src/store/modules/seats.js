 import {getSeats} from "@/api/seats";

export default {
    state: {
        seats: [],
        basket: [],
    },
    mutations: {
        SET_SEATS(state, payload) {
            state.seats.push(payload)
        },
        SET_BASKET(state, payload) {
            state.basket = payload
        },
    },
    actions: {
        async loadSeats({ commit }, payload) {
            const seats = await getSeats(payload).then(response => response.data)
            commit('SET_SEATS', {sector: payload, seats})
        },
        addBasket({commit}, payload) {
            commit('SET_BASKET', payload)
        }
    },
    getters: {
        getSector: (state) => (id) => {
            return state.seats.find(item => item.sector === id)
        },

        getBasket: (state) =>   state.basket
    },
};