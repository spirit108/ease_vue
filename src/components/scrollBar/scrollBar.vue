<template>
  <div class="scrollbar">
    <div ref="wrapper" class="scroll-bar-wrap">
      <div class="scroll-bar-content scroll-bar-row">
        <div class="scroll-bar-item">1</div>
        <div class="scroll-bar-item">2</div>
        <div class="scroll-bar-item">3</div>
        <div class="scroll-bar-item">4</div>
        <div class="scroll-bar-item">5</div>
        <div class="scroll-bar-item">6</div>
        <div class="scroll-bar-item">7</div>
        <div class="scroll-bar-item">8</div>
        <div class="scroll-bar-item">9</div>
      </div>
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
  .scroll-bar-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 2700px;
    height: 30px;
    .scroll-bar-item {
      flex-shrink: 0;
      width: 100px;
      height: 30px;
      background: #ccc;
      margin-right: 20px;
    }
  }
}
</style>
