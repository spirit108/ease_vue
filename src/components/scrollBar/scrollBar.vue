<template>
  <div class="scrollbar">
    <div ref="wrapper" class="scroll-bar-wrap">
      <slot name="scroll-bar-content"></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";

export default {
  name: "scrollBar",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      });
      console.log(this.scroll);
    });
  }
};
</script>
<style lang="less" scoped>
.scroll-bar-wrap {
  width: 100%;
  height: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 6px #999;
}
</style>
