<template>
  <div class="main">
    <el-header>
      <div id="nav">
        <nav-menu :navArr="navArr"></nav-menu>
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
import NavMenu from "@/components/nav/NavMenu";

export default {
  name: "mainPage",
  components: {
    NavMenu
  },
  data() {
    return {};
  },
  created() {
    this.$http
      .getRequest("/mock/api/user", {
        id: 1
      })
      .then(res => {
        console.log(res);
      });
  },
  computed: {
    navArr() {
      return this.$store.getters["auth/getMenu"];
    }
  }
};
</script>

<style lang="less" scoped>
#nav {
  margin-bottom: 30px;
}
</style>
