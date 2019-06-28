export default {
  namespaced: true,
  state: {
    token: "testeee",
    user: null,
    menuList: ""
  },
  mutations: {
    setTokenFn(state, val) {
      state.token = val;
    },
    removeTokenFn(state) {
      state.token = "";
    },
    setUserFn(state, val) {
      state.user = val;
    },
    removeUserFn(state) {
      state.user = null;
    },
    setMenuList(state, val) {
      state.menuList = val;
    },
    removeMenuList(state) {
      state.menuList = "";
    }
  },
  actions: {
    // 设置token
    setTokenFn({ commit }, val) {
      commit("setTokenFn", val);
    },
    //重置token
    removeTokenFn({ commit }) {
      commit("removeTokenFn");
    },
    // 设置用户信息
    setUserFn({ commit }, val) {
      commit("setUserFn", val);
    },
    // 重置用户信息
    removeUserFn({ commit }) {
      commit("removeUserFn");
    },
    // 设置用户菜单
    setMenuList({ commit }, val) {
      commit("setMenuList", val);
    },
    // 重置用户菜单
    removeMenuList({ commit }) {
      commit("removeMenuList");
    }
  },
  getters: {
    // 获得token信息
    getToken(state) {
      return state.token;
    },
    // 获得用户信息
    getUser(state) {
      return state.user;
    },
    // 获得用户菜单
    getMenu(state) {
      return state.menuList && JSON.parse(state.menuList);
    }
  }
};
