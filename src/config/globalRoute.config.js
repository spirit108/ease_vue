/**
 * 全局路由配置
 * 没有导航条的页面
 */
const globalRoutes = [
  {
    name: "main", // 主页面
    children: []
  },
  {
    name: "404",
    meta: {
      title: "404"
    }
  },
  {
    name: "login",
    meta: {
      title: "login"
    }
  }
];
export default globalRoutes;
