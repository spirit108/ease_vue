<template>
  <div class="about" @mousewheel="scrollPageFn($event)">
    <ul class="aside-nav">
      <li
        class="nav-item"
        v-for="(item, i) in 3"
        :key="i"
        :class="{ active: pageIndex == i }"
        @click="pageIndex = i"
      ></li>
    </ul>
    <div
      class="about-content"
      :style="{ top: -(pageIndex * window_h) + 'px' }"
      ref="pageContent"
    >
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      topH: -757,
      pageIndex: 0,
      window_h: 0,
      page_h: 0,
      deltay: false
    };
  },
  mounted() {
    // 屏幕高度
    this.window_h = document.documentElement.clientHeight;
    // 页面高度
    this.page_h = this.$refs.pageContent.offsetHeight;
  },
  methods: {
    // 鼠标滚动页面
    scrollPageFn(e) {
      if (this.deltay) {
        return;
      }
      this.deltay = setTimeout(() => {
        if (e.deltaY < 0) {
          this.pageIndex > 0 && this.pageIndex--;
        } else {
          this.pageIndex < this.page_h / this.window_h - 1 && this.pageIndex++;
        }
        this.deltay = false;
      }, 300);
    }
  }
};
</script>
<style lang="less" scoped>
.about {
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background: #fff;
  overflow: hidden;
  .aside-nav {
    position: absolute;
    width: 30px;
    height: 200px;
    z-index: 100;
    left: 50px;
    top: 50%;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .nav-item {
      border: 2px solid #fff;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      cursor: pointer;
    }
    .active {
      background: #333;
    }
  }
}
.about-content {
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  width: 100%;
  transition: top 0.6s ease;
}
.box1 {
  width: 100%;
  height: 100vh;
  background: url("../../../assets/imgs/01.jpg");
  background-position: center;
  // background-attachment: fixed;
}
.box2 {
  width: 100%;
  height: 100vh;
  background: url("../../../assets/imgs/02.jpg");
  background-position: center;
  // background-attachment: fixed;
}
.box3 {
  width: 100%;
  height: 100vh;
  background: url("../../../assets/imgs/01.jpg");
  background-position: center;
  // background-attachment: fixed;
}
</style>
