<template>
  <ul class="nav-wrap" @click="selectNavFn">
    <li
      class="nav-item"
      :class="{ 'nav-active': i == isNav }"
      v-for="(item, i) in navArr"
      :key="i"
    >
      <div
        v-if="item.children && item.children.length"
        @mouseover="showChildMenuFn(i)"
        @mouseout="closeChildMenuFn"
      >
        <p class="menu-title">
          {{ item.name }}
          <i class="el-icon-caret-bottom"></i>
        </p>
        <div
          class="child-menu-wrap"
          v-if="i == isShow"
          :data-index="i"
          @mouseover="showChildMenuFn(i)"
        >
          <child-nav-list
            :navArr="item.children"
            :navIndex="i"
          ></child-nav-list>
        </div>
      </div>
      <div v-else>
        <router-link class="menu-title link" :to="item.path" :data-index="i">
          {{ item.name }}
        </router-link>
      </div>
    </li>
  </ul>
</template>
<script>
import ChildNavList from "./ChildNavList";

export default {
  name: "navMenu",
  props: {
    navArr: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isShow: false,
      timeOut: null,
      isNav: null
    };
  },
  methods: {
    // 移除关闭下拉菜单
    closeChildMenuFn() {
      this.timeOut = setTimeout(() => {
        this.isShow = false;
      }, 300);
    },
    // 移入下拉菜单展示下拉菜单
    showChildMenuFn(i) {
      this.timeOut && clearTimeout(this.timeOut);
      this.isShow = i;
    },
    // 选择导航
    selectNavFn(e) {
      if (e.target.dataset.index >= 0) {
        this.isShow = false;
        this.isNav = e.target.dataset.index;
      }
    }
  },
  components: {
    ChildNavList
  },
  computed: {
    _navArr() {
      return this.navArr.map(val => {
        val.isShow = false;
        return val;
      });
    }
  }
};
</script>
<style lang="less">
.nav-wrap {
  height: 60px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(233, 233, 233, 0.8);
  .nav-active {
    border-bottom: 4px solid rgb(153, 231, 176);
  }
  .nav-item {
    margin-left: 30px;
    line-height: 30px;
    position: relative;
    font-size: 20px;
    div {
      line-height: 30px;
      width: auto;
      text-align: left;
      .menu-title {
        display: block;
        height: 60px;
        line-height: 60px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: #333;
      }
      .link:hover {
        color: rgb(95, 233, 141);
      }
    }
    .child-menu-wrap {
      position: absolute;
      z-index: 1000;
      top: 50px;
      right: 0;
      overflow: hidden;
      width: auto;
      height: auto;
      padding-top: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #333;
      background: #fff;
      box-shadow: 3px 3px 3px #eee;
    }
  }
}
</style>
