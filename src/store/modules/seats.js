 import {getSeats} from "@/api/seats";

export default {
    state: {
        seats: [],
    },
    mutations: {
        SET_SEATS(state, payload) {
            state.seats.push(payload)
        },
    },
    actions: {
        async loadSeats({ commit }, payload) {
            const seats = await getSeats(payload).then(response => response.data)
            commit('SET_SEATS', {sector: payload, seats})
        },
    },
    getters: {
        getSector: (state) => (id) => {
            return state.seats.find(item => item.sector === id)
        }
    },
};