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
    meta: {
      title: "首页",
      isAuth: false
    }
  },
  {
    name: "About",
    isNavTable: true,
    meta: {
      title: "About",
      isAuth: true
    }
  },
  {
    name: "hold",
    isNavTable: true,
    meta: {
      title: "hold",
      isAuth: true
    }
  },
  {
    name: "earth",
    isNavTable: true,
    meta: {
      title: "earth",
      isAuth: true
    }
  }
];
export default mainRoutes;
