// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     user: JSON.parse(localStorage.getItem('userData')) || null,
//     isRegistered: !!localStorage.getItem("access"),
//     pendingRequests: 0,
//     loading: false,
//   },
//   mutations: {
//     SET_REGISTERED(state, status) {
//       state.isRegistered = status;
//     },
//     SET_USER(state, user) {
//       state.user = user;
//       localStorage.setItem('userData', JSON.stringify(user))
//     },
//     SET_LOADING(state, status) {
//       state.loading = status;
//     },
//     ADD_PENDING_REQUEST(state) {
//       state.pendingRequests++;
//     },
//     REMOVE_PENDING_REQUEST(state) {
//       state.pendingRequests--;
//     },
//   },
//   actions: {
//     async registerUser({ commit }, user) {
//       commit("SET_USER", user);
//       commit("SET_REGISTERED", true);
//     },
//     setLoading({ commit }, status) {
//       commit("SET_LOADING", status);
//     },
//     addPendingRequest({ commit }) {
//       commit('ADD_PENDING_REQUEST');
//     },
//     removePendingRequest({ commit }) {
//       commit('REMOVE_PENDING_REQUEST');
//     },
//     clearUser() {
//       this.user = null;
//       localStorage.removeItem('userData');
//     }
//   },
//   getters: {
//     user: (state) => state.user,
//     isRegistered: (state) => state.isRegistered,
//     hasPendingRequests: (state) => state.pendingRequests > 0,
//     loading: (state) => state.loading,
//   },
// });