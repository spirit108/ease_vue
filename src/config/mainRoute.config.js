const mainRoutes = {
  name: "main",
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
    },
    {
      name: "Child",
      title: "菜单",
      isNavTable: true,
      children: [
        {
          name: "childA",
          title: "子菜单A",
          isNavTable: true,
          children: [
            {
              name: "childA1",
              title: "子菜单1",
              isNavTable: true
            },
            {
              name: "childA2",
              title: "子菜单2",
              isNavTable: true
            }
          ]
        },
        {
          name: "childB",
          title: "子菜单B",
          isNavTable: true
        }
      ]
    }
  ]
};
export default mainRoutes;
