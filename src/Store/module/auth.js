/**
 * 有关用户授权的信息
 */
export default {
  namespaced: true, // 模块命名空间，勿动
  state: {
    isAuth: false,
    user: null,
    topMain: "",
    topSub: "",
    asideMain: ""
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
    setTopMain(state, val) {
      state.topMain = val;
    },
    removeTopMain(state) {
      state.topMain = "";
    },
    setTopSub(state, val) {
      state.topSub = val;
    },
    removeTopSub(state) {
      state.topSub = "";
    },
    setAsideMain(state, val) {
      state.asideMain = val;
    },
    removeAsideMain(state) {
      state.asideMain = "";
    }
  },
  actions: {
    // 设置登录标志
    setAuthTagFn({ commit }, val) {
      commit("setAuthTagFn", val);
    },
    // 设置登录标志
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
    // 设置用户上方主菜单
    setTopMain({ commit }, val) {
      commit("setTopMain", val);
    },
    // 重置用户上方主菜单
    removeTopMain({ commit }) {
      commit("removeTopMain");
    },
    // 设置用户上方副菜单
    setTopSub({ commit }, val) {
      commit("setTopSub", val);
    },
    // 重置用户上方副菜单
    removeTopSub({ commit }) {
      commit("removeTopSub");
    },
    // 设置用户上方副菜单
    setAsideMain({ commit }, val) {
      commit("setAsideMain", val);
    },
    // 重置用户上方主菜单
    removeAsideMain({ commit }) {
      commit("removeAsideMain");
    }
  },
  getters: {
    // 获得登陆标志
    getAuthTagFn(state) {
      return state.isAuth;
    },
    // 获得用户信息
    getUser(state) {
      return state.user;
    },
    // 获得用户上方主菜单
    getTopMain(state) {
      return (state.topMain && JSON.parse(state.topMain)) || [];
    },
    // 获得用户上方副菜单
    getTopSub(state) {
      return (state.topSub && JSON.parse(state.topSub)) || [];
    },
    // 获得用户侧边主菜单
    getAsideMain(state) {
      return (state.asideMain && JSON.parse(state.asideMain)) || [];
    }
  }
};
