import Vue from "vue";
import Router from "vue-router";
import store from "../Store/store";
import mainRoutes from "@/config/mainRoute.config.js";
import globalRoutes from "@/config/globalRoute.config.js";
import http from "@/http/http";
import { activeRouter } from "@/config/globalConfig";
import cloneDeep from "lodash/cloneDeep";

Vue.use(Router);

let routerFlag = false;

// 生成动态路由
function createRouterMenuFn(menu, index = 1) {
  console.log(menu);
  menu.forEach(val => {
    console.log(val.url);
    val.path = val.url;
    console.log(val);
    let urlArr = val.url.split("/");
    let _name = urlArr[urlArr.length - 1];
    val.title = _name;
    val.name = _name;
    // val.component = () => import(`@/main${val.url}/${_name}`);
    val.component = () => import(`@/views${val.url}/${_name}`);
    if (val.list && val.list.length) {
      val.redirect = val.list[0].url;
      val.children = val.list;
      createRouterMenuFn(val.children, ++index);
    }
  });
}
/**
 * 生成路由
 * @param {*} list 菜单列表
 * @param {*} file 初始路径
 */
// function createRouterMenuFn(list, file = "/") {
//   list.forEach(val => {
//     val.path = (file + val.name).replace("main/", "");
//     val.path = val.path.replace("/main", "/");
//     val.file = file + val.name + "/" + val.name;
//     val.component = () => import("@/views" + val.file + ".vue");
//     if (val.children && val.children.length) {
//       val.redirect = (file + val.name + "/" + val.children[0].name).replace(
//         "/main",
//         ""
//       );
//       createRouterMenuFn(val.children, file + val.name + "/");
//     }
//     return true;
//   });
// }

let routers = globalRoutes.concat(mainRoutes);
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
    let _to = {
      path: to.path,
      title: to.meta.title,
      active: false
    };
    store.dispatch("page/setTagViewFn", _to);
    store.dispatch("page/setTagActiveFn", to.path);
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
  let isLogin = store.getters["auth/getAuthTagFn"];
  document.title = to.meta.title;
  if (isLogin) {
    if (activeRouter) {
      if (!routerFlag && from.path == "/") {
        // http.getRequest("/mock/api/menuList", "", true).then(res => {
        //   _routers.children = res.menuList;
        //   createRouterMenuFn([_routers]);
        //   RouterObj.addRoutes([_routers]); // 添加动态路由
        //   routerArr = routerArr.concat(_routers.children);
        //   filterRouterMenuFn(routerArr); // 筛选动态路由中菜单路由
        //   routerFlag = true;
        // });
      }
    } else {
      // filterRouterMenuFn(routerArr);
    }
  } else {
    // 没有登陆
    // filterRouterMenuFn(routerArr);
  }
});
export default RouterObj;
