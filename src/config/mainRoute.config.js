/**
 * 主页面路由配置
 * 有导航条的页面
 * isNavTable: 是否在菜单显示路由
 * name： 文件目录名
 * children： 子菜单
 */
const mainRoutes = {
  name: "main", // 主页面
  title: "main",
  children: [
    {
      name: "Home",
      title: "首页",
      isNavTable: true
    },
    {
      name: "About",
      title: "关于",
      isNavTable: true
    },
    {
      name: "hold",
      title: "股权",
      isNavTable: true
    },
    {
      name: "earth",
      title: "地球",
      isNavTable: true
    }
  ]
};
export default mainRoutes;
