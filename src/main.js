import Vue from "vue";
import App from "./App.vue";
import router from "./Router/router";
import store from "./Store/store";
import "./Ui/element";

import http from "./Http/http";

// 需要进行拦截的请求
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
