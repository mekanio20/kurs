import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    isRegistered: false,
  },
  mutations: {
    SET_REGISTERED(state, status) {
      state.isRegistered = status;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async registerUser({ commit }, user) {
      commit("SET_USER", user);
      commit("SET_REGISTERED", true);
    },
  },
  getters: {
    isRegistered: (state) => state.isRegistered,
    user: (state) => state.user,
  },
});