export default {
  namespaced: true,
  state: {
    token: "testeee",
    userName: "test"
  },
  mutations: {
    setTokenFn(state, val) {
      state.token = val;
    }
  },
  actions: {
    setTokenFn({ commit }, val) {
      commit("setTokenFn", val);
    }
  },
  getters: {
    token(state) {
      return state.token;
    }
  }
};
