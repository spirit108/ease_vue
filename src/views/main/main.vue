<template>
  <div class="main">
    <el-header>
      <div id="nav">
        <nav-menu :navArr="topMainArr" :navType="navType"></nav-menu>
      </div>
    </el-header>
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
</style>
