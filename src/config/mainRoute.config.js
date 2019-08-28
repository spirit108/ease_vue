/**
 * 主页面路由配置
 * 有导航条的页面
 * isNavTable: 是否在菜单显示路由
 * name： 文件目录名
 * children： 子菜单
 */
const mainRoutes = [
  {
    name: "Home",
    isNavTable: true,
    position: "top",
    type: "main",
    icon: "",
    url: "/main/Home",
    meta: {
      title: "首页",
      isAuth: false,
      layout: "topPage"
    }
  },
  {
    name: "About",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/About",
    meta: {
      title: "About",
      isAuth: false,
      layout: "topPage"
    }
  },
  {
    name: "demo",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/demo",
    meta: {
      title: "demo",
      isAuth: false,
      layout: "topPage"
    },
    children: [
      {
        name: "demo-1",
        isNavTable: true,
        url: "/main/demo/demo1",
        meta: {
          title: "demo-1",
          isAuth: false,
          layout: "topPage"
        }
      },
      {
        name: "demo-2",
        isNavTable: true,
        url: "/main/demo/demo2",
        meta: {
          title: "demo-2",
          isAuth: false,
          layout: "topPage"
        }
      }
    ]
  }
];
export default mainRoutes;
