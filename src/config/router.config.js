const globalRoutes = [
  {
    name: "404",
    title: "404"
  },
  {
    name: "login",
    title: "login"
  }
];
const mainRoutes = {
  name: "main",
  title: "main",
  children: [
    {
      name: "Home",
      title: "首页"
    },
    {
      name: "About",
      title: "关于"
    },
    {
      name: "hold",
      title: "股权"
    },
    {
      name: "earth",
      title: "地球"
    },
    {
      name: "Child",
      title: "菜单",
      children: [
        {
          name: "childA",
          title: "子菜单A",
          children: [
            {
              name: "childA1",
              title: "子菜单1"
            },
            {
              name: "childA2",
              title: "子菜单2"
            }
          ]
        },
        {
          name: "childB",
          title: "子菜单B"
        }
      ]
    }
  ]
};
export default globalRoutes.concat(mainRoutes);
