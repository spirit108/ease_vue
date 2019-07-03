<template>
  <div class="main">
    <el-header>
      <div id="nav">
        <nav-menu :navArr="topMainArr" :navType="navType"></nav-menu>
      </div>
    </el-header>
    <div class="tag-box">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div class="mask"></div>
    </div>
    <el-main>
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </el-main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 引入导航
import NavMenu from "@/components/nav/NavMenu";
// 引入导航类型
import { navType } from "@/Config/globalConfig.js";

export default {
  name: "mainPage",
  components: {
    NavMenu
  },
  data() {
    return {
      navType: navType
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
      topSubArr: "auth/getTopSub"
    })
  }
};
</script>

<style lang="less" scoped>
#nav {
  margin-bottom: 30px;
}
.view {
  background: #fff;
}
.tag-box {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  position: absolute;
  z-index: -1;
  .mask {
    width: 500px;
    height: 600px;
    position: absolute;
    top: 10px;
    left: 0;
    background: #f11;
  }
  div {
    flex-shrink: 0;
    width: 300px;
    height: 30px;
    flex-basis: 300px;
    // display: inline-block;
  }
}
.tag-box:after {
  display: block;
  content: " ";
  width: 100%;
  height: 600px;
  position: absolute;
  top: 10px;
  left: 0;
  background: #f11;
}
</style>
