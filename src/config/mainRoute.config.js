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
    position: "aside",
    type: "main",
    icon: "",
    url: "/main/Home",
    meta: {
      title: "首页",
      isAuth: true
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
      isAuth: false
    }
  },
  {
    name: "hold",
    isNavTable: true,
    position: "aside",
    type: "main",
    meta: {
      title: "hold",
      isAuth: true
    },
    children: [
      {
        name: "test",
        isNavTable: true,
        meta: {
          title: "test",
          isAuth: true
        }
      },
      {
        name: "test1",
        isNavTable: false,
        meta: {
          title: "test1",
          isAuth: true
        }
      },
      {
        name: "test1",
        isNavTable: false,
        meta: {
          title: "test1",
          isAuth: true
        }
      }
    ]
  },
  {
    name: "earth",
    isNavTable: true,
    position: "top",
    type: "main",
    meta: {
      title: "earth",
      isAuth: false
    }
  }
];
export default mainRoutes;
