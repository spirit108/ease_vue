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
    name: "hold",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/hold",
    meta: {
      title: "hold",
      isAuth: false,
      layout: "topPage"
    },
    children: [
      {
        name: "test",
        isNavTable: true,
        url: "/main/hold/test",
        meta: {
          title: "test",
          isAuth: false,
          layout: "topPage"
        }
      },
      {
        name: "test1",
        isNavTable: false,
        url: "/main/hold/test1",
        meta: {
          title: "test1",
          isAuth: false,
          layout: "topPage"
        }
      }
    ]
  },
  {
    name: "icon",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/icon",
    meta: {
      title: "icon",
      isAuth: false,
      layout: "topPage"
    }
  }
];
export default mainRoutes;
