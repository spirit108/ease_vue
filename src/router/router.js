import Vue from "vue";
import Router from "vue-router";
import store from "../Store/store";
import mainRoutes from "@/config/mainRoute.config.js";
import globalRoutes from "@/config/globalRoute.config.js";
import http from "../Http/http";
import { activeRouter } from "../config/globalConfig";
import cloneDeep from "lodash/cloneDeep";

Vue.use(Router);

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
let loadPath = "production";
if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "dev") {
  loadPath = "development";
}
const _import = require("./import-" + loadPath);
let routerFlag = false;
let routerArr = [];
/**
 * 添加固定(菜单)路由
 * @param {*} list 菜单列表
 * @param {*} file 初始路径
 */
function createRouterMenuFn(list, file = "/") {
  list.forEach(val => {
    val.path = (file + val.name).replace("main/", "");
    val.path = val.path.replace("/main", "/");
    val.file = file + val.name + "/" + val.name;
    val.component = _import(val.file);
    if (val.children && val.children.length) {
      val.redirect = (file + val.name + "/" + val.children[0].name).replace(
        "/main",
        ""
      );
      createRouterMenuFn(val.children, file + val.name + "/");
    }
    let obj = Object.assign(val);
    // obj.component = "";
    routerArr.push(obj);
  });
}
let routers = globalRoutes[0].children.concat(mainRoutes);
createRouterMenuFn(routers);

const RouterObj = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routers
});

RouterObj.afterEach((to, from) => {
  let _routers = cloneDeep(routers[0]),
    routerArr = cloneDeep(routers[0]).children;
  if (!routerFlag && activeRouter) {
    http.getRequest("/mock/api/menuList", "", true).then(res => {
      _routers.children = res.menuList;
      createRouterMenuFn([_routers]);
      RouterObj.addRoutes([_routers]);
      routerArr = routerArr.concat(_routers.children);
      console.log(546);
      console.log(JSON.stringify(routerArr));
      store.dispatch("auth/setMenuList", JSON.stringify(routerArr));
      routerFlag = true;
    });
  } else {
    console.log(4);
    console.log(routerArr);
  }
  console.log(to);
  console.log(from);
});

export default RouterObj;
