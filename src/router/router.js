import Vue from "vue";
import Router from "vue-router";
import mainRoutes from "@/config/mainRoute.config.js";
import globalRoutes from "@/config/globalRoute.config.js";

Vue.use(Router);

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require("./import-" + process.env.NODE_ENV);

console.log(process.env.BASE_URL);
console.log(mainRoutes);
console.log(globalRoutes);

/**
 * 添加动态(菜单)路由
 * @param {*} list 菜单列表
 * @param {*} path 初始路径
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
  });
}
let routers = globalRoutes.concat(mainRoutes);
createRouterMenuFn(routers);
console.log(routers);

const RouterObj = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routers
});

RouterObj.afterEach((to, from) => {
  console.log(4);
  console.log(to);
  console.log(5);
  console.log(from);
});

export default RouterObj;
