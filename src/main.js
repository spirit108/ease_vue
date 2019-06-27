import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./Store/store";
import "@/ui/element";
import "element-ui/lib/theme-chalk/index.css";
import http from "./http/http";

// 需要进行拦截的请求
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
