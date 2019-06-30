/**
 * 有关用户授权的信息
 */
export default {
  namespaced: false,
  state: {
    isAuth: true,
    user: null,
    menuList: ""
  },
  mutations: {
    setAuthTagFn(state, val) {
      state.isAuth = val;
    },
    removeAuthTagFn(state) {
      state.isAuth = false;
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
    setAuthTagFn({ commit }, val) {
      commit("setAuthTagFn", val);
    },
    //重置token
    removeAuthTagFn({ commit }) {
      commit("removeAuthTagFn");
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
    getAuthTagFn(state) {
      return state.isAuth;
    },
    // 获得用户信息
    getUser(state) {
      return state.user;
    },
    // 获得用户菜单
    getMenu(state) {
      return (state.menuList && JSON.parse(state.menuList)) || [];
    }
  }
};
