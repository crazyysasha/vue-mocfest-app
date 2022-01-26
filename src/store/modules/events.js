import eventsApi from "@/api/events";

export default {
    namespaced: true,
    state: {
        data: [],
        loading: false,
    },
    mutations: {
        set(state, payload) {

            state.data = payload;
        },
        loading(state, payload) {
            state.loading = payload;
        }
    },
    actions: {
        async getAll({ commit }) {
            commit('loading', true);
            const { data } = await eventsApi.getAll();
            commit('set', data);
            await new Promise(resolve => setTimeout(resolve, .01));
            commit('loading', false);
        }
    },
    getters: {
        all: (state) => state.data,
        isLoading: (state) => state.loading,
    },
};