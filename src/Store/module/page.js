/**
 * 有关用户授权的信息
 */
export default {
  namespaced: true, // 模块命名空间，勿动
  state: {
    tagViews: []
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
    }
  },
  getters: {
    // 获得登陆标志
    getTagViewFn(state) {
      return state.tagViews;
    }
  }
};
