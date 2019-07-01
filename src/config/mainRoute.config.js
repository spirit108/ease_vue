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
    meta: {
      title: "首页",
      isAuth: false
    }
  },
  {
    name: "About",
    isNavTable: true,
    position: "top",
    type: "main",
    meta: {
      title: "About",
      isAuth: true
    }
  },
  {
    name: "hold",
    isNavTable: true,
    position: "top",
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
      isAuth: true
    }
  }
];
export default mainRoutes;
