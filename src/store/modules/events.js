import eventsApi from "@/api/events";

export default {
    namespaced: true,
    state: {
        data: [],
        loading: false,
        loaded: false,
    },
    mutations: {
        setData(state, payload) {

            state.data = payload;
        },
        setLoadingStatus(state, payload) {
            state.loading = payload;
        },
        setLoadedStatus(state) {
            state.loaded = true;
        }
    },
    actions: {
        async getAll({ commit }) {
            commit('setLoadingStatus', true);
            const { data } = await eventsApi.getAll();
            commit('setData', data);
            commit('setLoadedStatus');
            await new Promise(resolve => setTimeout(resolve, .01));
            commit('setLoadingStatus', false);
        },
    },
    getters: {
        all: (state) => state.data,
        isLoading: (state) => state.loading,
        isLoaded: (state) => state.loaded,
    },
};