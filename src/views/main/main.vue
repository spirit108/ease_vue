<template>
  <div class="main">
    <el-header :height="headHeight">
      <div id="nav">
        <nav-menu :navArr="topMainArr" :navType="navType"></nav-menu>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-nav :asideNavArr="asideMainArr"></aside-nav>
      </el-aside>
      <el-main>
        <scroll-bar>
          <template slot="scroll-bar-content">
            <div
              class="scroll-bar-content scroll-bar-row"
              :style="{ width: scrollBallWidth + 'px' }"
            >
              <div class="scroll-bar-item">1</div>
              <div class="scroll-bar-item">2</div>
              <div class="scroll-bar-item">3</div>
              <div class="scroll-bar-item">4</div>
              <div class="scroll-bar-item">5</div>
              <div class="scroll-bar-item">6</div>
              <div class="scroll-bar-item">7</div>
              <div class="scroll-bar-item">8</div>
              <div class="scroll-bar-item">9</div>
              <div class="scroll-bar-item">10</div>
            </div>
          </template>
        </scroll-bar>
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
// 引入导航类型
import { navType } from "@/Config/globalConfig.js";

export default {
  name: "mainPage",
  components: {
    NavMenu,
    ScrollBar,
    AsideNav
  },
  data() {
    return {
      navType: navType,
      headHeight: "60px",
      scrollBallWidth: 12000
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
      topSubArr: "auth/getTopSub",
      asideMainArr: "auth/getAsideMain"
    })
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
#nav {
  margin-bottom: 0px;
}
.el-header {
  padding: 0;
  box-shadow: 0 0 3px #eee;
  position: relative;
  z-index: 10;
}
.el-container {
  min-height: 910px;
}
.el-aside {
  min-height: 855px;
  border-radius: 0 0 4px 0;
  box-shadow: 0 0 5px #999;
}
.el-main {
  padding: 0;
  background: #f8f8f8;
  .scroll-bar-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 30px;
    background: #fff;
    overflow: hidden;
    padding: 0 20px;
    .scroll-bar-item {
      flex-shrink: 0;
      width: 100px;
      height: 30px;
      // flex-basis: 100px;
      background: #888;
      margin-right: 20px;
    }
  }
  .view {
    background: #fff;
    min-height: 855px;
    margin: 10px 20px;
    border-radius: 4px;
    box-shadow: 0 0 5px #888;
  }
}
</style>
