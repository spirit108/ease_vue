import Vue from "vue";
import App from "./App.vue";
import router from "./Router/router";
import store from "./Store/store";
import "./ui/element";
import Http from "./http/http";
// 404页面
const notFound = {
  path: "*",
  redirect: "/404"
};
// 需要进行拦截的请求
Vue.prototype.$Http = Http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // 拼接404路由
    this.$router.addRoutes([notFound]);
  }
}).$mount("#app");
