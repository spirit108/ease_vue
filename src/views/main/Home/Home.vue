<template>
  <div class="home">
    <div>{{ $store.state.auth.token }}</div>
    <!-- <div class="input-item">
      <input type="number" placeholder="输入" v-model="totalNum" />
      <button @click="totalNumFn">确认</button>
    </div>
    <div>
      <input type="number" placeholder="输入每行最大数量" v-model="rowMaxNum" />
      <button @click="rowMaxNumFn">确认</button>
    </div>-->
    <div class="content">
      <!-- <div>{{ $store.state.auth.userName }}</div> -->
      <div @contextmenu.prevent="contextmenu" class="left-side">
        <div class="item" @click="addElementFn">方法1</div>
        <div class="item" @click="changeFn">方法2</div>
        <div class="item">方法3</div>
        <div class="item">方法4</div>
      </div>
      <div class="main">
        <div
          v-for="(item, i) in matrix"
          :key="i"
          class="wrap"
          :class="{ 'left-wrap': i % 2 }"
        >
          <div v-for="(list, j) in item" :key="j" class="box">
            <div class="box-list" :class="list.class">
              <span>{{ list.index }}</span>
            </div>
          </div>
        </div>
      </div>
      <context-menu id="context-menu" ref="ctxMenu">
        <li @click="addFn($event)">option 1</li>
        <li class="disabled">option 2</li>
        <li>option 3</li>
      </context-menu>
    </div>
  </div>
</template>

<script>
import twoMatrix from "@/utils/utils.js";
import contextMenu from "vue-context-menu";
export default {
  name: "home",
  components: { contextMenu },
  data() {
    return {
      totalNum: 0,
      rowMaxNum: 0,
      imgArr: [],
      matrix: []
    };
  },
  methods: {
    // 输入总数
    totalNumFn() {
      let _imgArr = [].concat(this.imgArr);
      let _rowNum = this.rowMaxNum ? parseInt(this.rowMaxNum) : 3;
      this.matrix = twoMatrix(_imgArr, this.totalNum, _rowNum);
    },
    // 输入每一行最大数量
    rowMaxNumFn() {
      console.log(this.totalNum);
      console.log(this.rowMaxNum);
      let _imgArr = [].concat(this.imgArr);
      let _row = parseInt(this.rowMaxNum) || 3;
      this.matrix = twoMatrix(_imgArr, this.totalNum, _row);
    },
    // 增加元素
    addElementFn() {
      let obj = {
        index: 1,
        class: "right-normal",
        type: "method1",
        isEnd: false
      };
      this.imgArr.unshift(obj);
    },
    addFn(e) {
      console.log(e);
    },
    changeFn() {
      this.$store.dispatch("auth/setTokenFn", "haha");
    },
    contextmenu() {
      this.$refs.ctxMenu.open();
    },
    logo(e) {
      console.log(e);
    }
  },
  created() {
    this.imgArr = [];
    console.log(this.$store);
    console.log(this.$store.getters["auth/token"]);
  },
  watch: {
    imgArr(newValue) {
      this.matrix = twoMatrix(newValue);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.left-side {
  width: 200px;
  .item {
    width: 100px;
    height: 40px;
    text-align: center;
  }
}
.wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 400px;
  .box {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-right: 50px;
    &:last-child {
      margin-right: 0;
    }
    .box-list {
      width: 100px;
      height: 100px;
      background: #088;
      line-height: 100px;
      text-align: center;
      color: #fff;
      position: relative;
    }
    .right-normal::after {
      position: absolute;
      content: "——>";
      color: #666;
      right: -40px;
    }
    .left-normal::after {
      position: absolute;
      content: "<——";
      color: #666;
      left: -40px;
    }
    .row-end::after {
      position: absolute;
      content: "|";
      color: #666;
      bottom: -80px;
    }
  }
}
.left-wrap {
  justify-content: flex-end;
}
</style>
