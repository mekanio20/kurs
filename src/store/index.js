import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    isRegistered: !!localStorage.getItem("access"),
    loading: false
  },
  mutations: {
    SET_REGISTERED(state, status) {
      state.isRegistered = status;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    }
  },
  actions: {
    async registerUser({ commit }, user) {
      commit("SET_USER", user);
      commit("SET_REGISTERED", true);
    },
    setLoading({ commit }, status) {
      commit("SET_LOADING", status);
    }
  },
  getters: {
    user: (state) => state.user,
    isRegistered: (state) => state.isRegistered,
    loading: (state) => state.loading
  },
});