/**
 * 有关用户授权的信息
 */
export default {
  namespaced: true, // 模块命名空间，勿动
  state: {
    tagViews: [],
    viewLayout: "",
    isFixNav: false,
    isNavBg: false
  },
  mutations: {
    setTagViewFn(state, val) {
      if (state.tagViews.some(v => v.path === val.path)) {
        return;
      }
      state.tagViews.push(val);
    },
    setTagActiveFn(state, val) {
      state.tagViews.forEach(element => {
        element.active = false;
        if (element.path === val) {
          element.active = true;
        }
      });
    },
    setViewLayout(state, val) {
      state.viewLayout = val;
    },
    setFixNav(state, val) {
      state.isFixNav = val;
    },
    setNavBg(state, val) {
      state.isNavBg = val;
    }
  },
  actions: {
    // 设置页面访问路径数组
    setTagViewFn({ commit }, val) {
      commit("setTagViewFn", val);
    },
    // 设置当前页面
    setTagActiveFn({ commit }, val) {
      commit("setTagActiveFn", val);
    },
    // 设置当前页面布局
    setViewLayout({ commit }, val) {
      commit("setViewLayout", val);
    },
    // 设置上方导航时候固定
    setFixNav({ commit }, val) {
      commit("setFixNav", val);
    },
    // 设置上方导航背景
    setNavBg({ commit }, val) {
      commit("setNavBg", val);
    }
  },
  getters: {
    // 获得登陆标志
    getTagViewFn(state) {
      return state.tagViews;
    },
    // 获得页面布局
    getViewLayout(state) {
      return state.viewLayout;
    },
    // 获得上方导航条是否可固定
    getFixNav(state) {
      return state.isFixNav;
    },
    // 获得上方导航条是否可固定
    getNavBg(state) {
      return state.isNavBg;
    }
  }
};
