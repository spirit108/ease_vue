import Vue from "vue";
import Router from "vue-router";
import main from "../views/main.vue";
import config from "@/config/router.config.js";

Vue.use(Router);

console.log(process.env.BASE_URL);
console.log(config);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/404",
      name: "404",
      component: () => import(/* webpackChunkName: "home" */ "../views/404.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/login.vue")
    },
    {
      path: "/",
      name: "main",
      component: main,
      redirect: "/home",
      children: [
        {
          path: "/",
          name: "Home",
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/main/Home/Home")
        },
        {
          path: "/about",
          name: "about",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "../views/main/About/About.vue"
            )
        },
        {
          path: "/hold",
          name: "hold",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/main/hold/hold")
        },
        {
          path: "/earth",
          name: "earth",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/main/earth/earth")
        },
        {
          path: "/Child",
          name: "Child",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/main/Child/Child"),
          redirect: "/Child/childA",
          children: [
            {
              path: "/Child/childA",
              name: "childA",
              component: () =>
                import(
                  /* webpackChunkName: "about" */ "../views/main/Child/childA/childA"
                ),
              redirect: "/Child/childA/childA1",
              children: [
                {
                  path: "/Child/childA/childA1",
                  name: "childA1",
                  component: () =>
                    import(
                      /* webpackChunkName: "about" */ "../views/main/Child/childA/childA1/childA1"
                    )
                },
                {
                  path: "/Child/childA/childA2",
                  name: "childA2",
                  component: () =>
                    import(
                      /* webpackChunkName: "about" */ "../views/main/Child/childA/childA2/childA2"
                    )
                }
              ]
            },
            {
              path: "/Child/childB",
              name: "childB",
              component: () =>
                import(
                  /* webpackChunkName: "about" */ "../views/main/Child/childB/childB"
                )
            }
          ]
        }
      ]
    }
  ]
});
