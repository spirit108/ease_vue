import Vue from "vue";
import Router from "vue-router";
import store from "../Store/store";
import mainRoutes from "@/Config/mainRoute.config.js";
import globalRoutes from "@/Config/globalRoute.config.js";
import http from "@/Http/http";
import { activeRouter } from "@/Config/globalConfig";
import cloneDeep from "lodash/cloneDeep";

Vue.use(Router);

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
let loadPath = "production";
if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "dev") {
  loadPath = "development";
}
const _import = require("./import-" + loadPath);
let routerFlag = false;
/**
 * 生成路由
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
    return true;
  });
}
globalRoutes[0].children = globalRoutes[0].children.concat(mainRoutes);
let routers = globalRoutes;
createRouterMenuFn(routers);

/**
 * 筛选出导航路由
 * @param {*} list 菜单列表
 */

function filterRouterMenuFn(list) {
  const topMain = [];
  const topSub = [];
  const asideMain = [];
  list.forEach(val => {
    if (val.position === "top" && val.type === "main" && val.isNavTable) {
      topMain.push(val);
    } else if (val.position === "top" && val.type === "sub" && val.isNavTable) {
      topSub.push(val);
    } else if (
      val.position === "aside" &&
      val.type === "main" &&
      val.isNavTable
    ) {
      asideMain.push(val);
    }
  });
  store.dispatch("auth/setTopMain", JSON.stringify(topMain));
  store.dispatch("auth/setTopSub", JSON.stringify(topSub));
  store.dispatch("auth/setAsideMain", JSON.stringify(asideMain));
}

const RouterObj = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routers
});

// 权限验证
RouterObj.beforeEach((to, from, next) => {
  let isLogin = store.getters["auth/getAuthTagFn"];
  if (to.meta.isAuth) {
    if (isLogin) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
// 添加动态路由
RouterObj.afterEach((to, from) => {
  let _routers = cloneDeep(routers[0]),
    routerArr = cloneDeep(routers[0]).children,
    isLogin = store.getters["auth/getAuthTagFn"];
  document.title = to.meta.title;
  if (isLogin) {
    if (activeRouter) {
      if (!routerFlag && from.path == "/") {
        http.getRequest("/mock/api/menuList", "", true).then(res => {
          _routers.children = res.menuList;
          createRouterMenuFn([_routers]);
          RouterObj.addRoutes([_routers]); // 添加动态路由
          routerArr = routerArr.concat(_routers.children);
          filterRouterMenuFn(routerArr); // 筛选动态路由中菜单路由
          routerFlag = true;
        });
      }
    } else {
      filterRouterMenuFn(routerArr);
    }
  } else {
    // 没有登陆
    filterRouterMenuFn(routerArr);
  }
});
export default RouterObj;
