import axios from "axios";
import store from "../Store/store";
// 引入弹窗组件
import { Message, Loading } from "element-ui";
// 引入路由跳转
import router from "../Router/router";
// load配置
let options = {};
// 添加请求拦截器
let myInterceptor = axios.interceptors.request.use(
  config => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
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
    console.log(error);
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
    if (response.status) {
      switch (response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message({
            message: "登录过期，请重新登录",
            type: "warning"
          });
          // 清除token
          localStorage.removeItem("token");
          store.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          Message({
            message: "网络请求不存在",
            type: "warning"
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message({
            message: response.data.message || "未知错误，请联系管理员",
            type: "warning"
          });
      }
      return Promise.reject(response);
    }
  }
}
// get请求
function getRequest(url, params, type = false) {
  let loadingInstance = Loading.service(options);
  if (type) {
    axios.interceptors.request.eject(myInterceptor);
  }
  return new Promise(resolve => {
    axios.get(url, params).then(response => {
      loadingInstance.close();
      resolve(checkStatus(response));
    });
  });
}
// post请求
function postRequest(url, params, type = false) {
  let loadingInstance = Loading.service(options);
  if (type) {
    axios.interceptors.request.eject(myInterceptor);
  }
  return new Promise(resolve => {
    axios.post(url, params).then(response => {
      loadingInstance.close();
      resolve(checkStatus(response));
    });
  });
}

export default {
  getRequest: getRequest,
  postRequest: postRequest
};
