import axios from "axios";
import store from "../store";
// 引入弹窗组件
import { Message } from "element-ui";
// 引入路由跳转
import router from "../router/router";

// 添加请求拦截器
let myInterceptor = axios.interceptors.request.use(
  config => {
    let _loginId = store.state.loginId;
    if (_loginId) {
      if (!(config.method === "post" || config.method === "put")) {
        config.params.loginId = _loginId;
      } else {
        config.data.loginId = _loginId;
      }
    } else {
      router.push({
        path: "/login"
      });
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

// 统一检查返回状态值
function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304)) {
    return response.data;
  } else {
    Message({
      type: "warning",
      message: "网络异常"
    });
  }
}
function fetch(url, params, method = "get", type, header) {
  if (type === "normal") {
    axios.interceptors.request.eject(myInterceptor);
  }
  let option = {
    method: method,
    url: url
  };
  if (method.toUpperCase() == "GET") {
    option.params = params;
  } else {
    option.data = params;
  }
  if (header) {
    option.headers = header;
  }
  return new Promise(resolve => {
    axios(option).then(response => {
      resolve(checkStatus(response));
    });
  });
}
export default fetch;
