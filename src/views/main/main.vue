<template>
  <div class="main">
    <div id="nav">
      <nav-menu :navArr="navArr"></nav-menu>
    </div>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
import NavMenu from "@/components/nav/NavMenu";

export default {
  name: "mainPage",
  components: {
    NavMenu
  },
  data() {
    return {
      navArr: [
        {
          path: "/",
          name: "Home"
        },
        {
          path: "/about",
          name: "about"
        },
        {
          path: "/hold",
          name: "hold"
        },
        {
          path: "/earth",
          name: "earth"
        },
        {
          path: "/Child",
          name: "一级菜单",
          children: [
            {
              path: "/Child/childA",
              name: "childA"
            },
            {
              path: "/Child/childB",
              name: "childB"
            }
          ]
        },
        {
          path: "/Child",
          name: "二级菜单",
          children: [
            {
              path: "/Child/childA",
              name: "childA",
              children: [
                {
                  path: "/Child/childA/childA1",
                  name: "childA1"
                },
                {
                  path: "/Child/childA/childA2",
                  name: "childA2"
                }
              ]
            },
            {
              path: "/Child/childB",
              name: "childB"
            }
          ]
        },
        {
          path: "/Child",
          name: "三级菜单",
          children: [
            {
              path: "/Child/childA",
              name: "childA",
              children: [
                {
                  path: "/Child/childA/childA1",
                  name: "childA1",
                  children: [
                    {
                      path: "/Child/childA/childA1",
                      name: "childA1"
                    },
                    {
                      path: "/Child/childA/childA2",
                      name: "childA2"
                    }
                  ]
                },
                {
                  path: "/Child/childA/childA2",
                  name: "childA2"
                }
              ]
            },
            {
              path: "/Child/childB",
              name: "childB"
            }
          ]
        }
      ]
    };
  },
  created() {
    // this.$http(
    //   "/mock/api/user",
    //   {
    //     id: 1
    //   },
    //   "GET",
    //   "normal"
    // ).then(res => {
    //   console.log(res);
    // });
  }
};
</script>

<style lang="less" scoped>
#nav {
  margin-bottom: 30px;
}
</style>
