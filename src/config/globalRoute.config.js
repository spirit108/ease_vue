/**
 * 全局路由配置
 * 没有头部和侧边导航条的页面
 */
const globalRoutes = [
  {
    name: "main",
    url: "/main",
    meta: {
      title: "main"
    },
    children: []
  },
  {
    name: "404",
    url: "/404",
    meta: {
      title: "404"
    }
  },
  {
    name: "login",
    url: "/login",
    meta: {
      title: "login"
    }
  }
];
export default globalRoutes;
