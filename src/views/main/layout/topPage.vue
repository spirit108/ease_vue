<template>
  <div class="main">
    <el-header :height="headHeight">
      <div id="topNav">
        <nav-menu :navArr="topMainArr" :navPosition="navPosition">
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
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </el-main>
    </el-container>
    <footer>
      <div class="page-footer">
        Ease-vue@tomz_z
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 引入导航
import NavMenu from "@/components/nav/NavMenu";
// 引入导航类型

export default {
  name: "topPage",
  components: {
    NavMenu
  },
  data() {
    return {
      headHeight: "60px",
      navPosition: "nav-left"
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
#topNav {
  margin-bottom: 0px;
  padding: 0 30px;
}
.el-header {
  padding: 0;
  box-shadow: 0 0 3px #eee;
  position: relative;
  z-index: 10;
}
.el-main {
  padding: 0;
  background: #fff;
  min-height: calc(100vh - 160px);
  box-shadow: 0 0 3px #eee;
  .view {
    padding: 20px;
    box-sizing: border-box;
  }
}
.page-footer {
  height: 100px;
  width: 100%;
  background: #fff;
  line-height: 100px;
}
</style>
