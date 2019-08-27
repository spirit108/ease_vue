<template>
  <div class="home" ref="viewBox">
    <div class="top-bannar">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box-wrap">
      <div class="box-contetn-1"></div>
      <div class="box-contetn-2"></div>
      <div class="box-contetn-3"></div>
      <div class="box-contetn-4"></div>
      <div class="box-contetn-5"></div>
      <div class="box-contetn-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        var scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop;
        if (scrollTop > 60) {
          this.$store.dispatch("page/setNavBg", true);
        } else {
          this.$store.dispatch("page/setNavBg", false);
        }
      },
      false
    );
  }
};
</script>
<style lang="less" scoped>
.top-bannar {
  position: absolute;
  height: 300px;
  width: 100%;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.box1 {
  position: absolute;
  margin-top: 300px;
  width: 100%;
  height: 685px;
  background: #eee;
  z-index: 99;
}
.box2 {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: url("../../../assets/imgs/01.jpg");
  background-position: center;
}
.box-wrap {
  position: absolute;
  margin-top: 1738px;
  width: 100%;
  min-height: 600px;
  background: #fff;
  .box-contetn-1 {
    width: 100%;
    height: 700px;
    background: #080;
  }
  .box-contetn-2 {
    width: 100%;
    height: 100vh;
    background: url("../../../assets/imgs/01.jpg");
    background-position: center;
    background-attachment: fixed;
  }
  .box-contetn-3 {
    width: 100%;
    height: 700px;
    background: #088;
  }
  .box-contetn-4 {
    width: 100%;
    height: 100vh;
    background: url("../../../assets/imgs/02.jpg");
    background-position: center;
    background-attachment: fixed;
  }
  .box-contetn-5 {
    width: 100%;
    height: 600px;
    background: #fff;
  }
  .box-contetn-6 {
    width: 100%;
    height: 500px;
    background: #e10;
  }
}
</style>
