<template>
  <topAsidePage v-if="$store.getters['page/getViewLayout'] == 'topAsidePage'" />
  <topPage v-else-if="$store.getters['page/getViewLayout'] == 'topPage'" />
</template>
<script>
// 引入布局：首部侧边导航
import topAsidePage from "./layout/topAsidePage";
// 引入布局：首部导航
import topPage from "./layout/topPage";
export default {
  name: "mainPage",
  components: {
    topAsidePage,
    topPage
  }
};
</script>
