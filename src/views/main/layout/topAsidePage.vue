<template>
  <div class="main">
    <el-header :height="headHeight">
      <div id="nav">
        <nav-menu>
          <div slot="nav-icon" class="web-logo" @click="navToHomeFn">
            <img src="@/assets/logo.png" alt="logo" />
            <div>
              <h1>Ease-vue</h1>
              <p>基于vue、element-ui的前端解决方案</p>
            </div>
          </div>
          <div slot="nav-sub">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="navToAdminHomeFn">
                  管理页面
                </el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </nav-menu>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div class="mask" @click="isSide = false"></div>
        <aside-nav :asideNavArr="asideMainArr"></aside-nav>
      </el-aside>
      <el-main>
        <!-- tagView -->
        <scroll-bar></scroll-bar>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 引入导航
import NavMenu from "@/components/nav/NavMenu";
// 引入侧边导航
import AsideNav from "@/components/AsideNav/AsideNav";
// 引入滑动条
import ScrollBar from "@/components/scrollBar/scrollBar";

export default {
  name: "topAsidePage",
  components: {
    NavMenu,
    ScrollBar,
    AsideNav
  },
  data() {
    return {
      headHeight: "60px"
    };
  },
  created() {
    this.$Http
      .getRequest("/mock/api/user", {
        id: 1
      })
      .then(res => {
        console.log(res);
        console.log(this.navType);
      });
  },
  computed: {
    ...mapGetters({
      topMainArr: "auth/getTopMain",
      asideMainArr: "auth/getAsideMain"
    })
  },
  methods: {
    // 下拉菜单触发事件
    handleCommand(val) {
      this[val]();
    },
    // 跳转用户管理首页
    navToAdminHomeFn() {
      this.$router.push(this.asideMainArr[0].path);
    },
    // 跳转首页
    navToHomeFn() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
#nav {
  margin-bottom: 0px;
  padding: 0 30px;
}
.el-header {
  padding: 0;
  box-shadow: 0 0 3px #eee;
  position: relative;
  z-index: 10;
  border: 1px solid #eee;
  overflow: hidden;
}
.el-container {
  min-height: calc(100vh - 60px);
}
.el-aside {
  min-height: calc(100vh - 60px);
  border-radius: 0 0 4px 0;
  box-shadow: 0 0 5px #999;
  .mask {
    display: none;
  }
}
.el-main {
  padding: 0;
  background: #f8f8f8;
  .view {
    background: #fff;
    min-height: calc(100vh - 120px);
    margin: 15px 20px;
    border-radius: 4px;
    box-shadow: 0 0 5px #888;
  }
}
@media screen and (max-width: 875px) {
  .el-aside {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 199;
    height: 100%;
    .mask {
      display: block;
      content: " ";
      position: fixed;
      top: 0;
      left: 200px;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
