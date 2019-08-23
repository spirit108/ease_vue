<template>
  <div class="top-nav">
    <div class="top-nav__main" :class="navPosition">
      <slot name="nav-icon"></slot>
      <ul class="nav-main" @click="selectNavFn">
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
              {{ item.meta.title }}
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
            <router-link
              class="menu-title link"
              :to="item.path"
              :data-index="i"
              v-if="item.isNavTable"
            >
              {{ item.meta.title }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <slot name="nav-sub"></slot>
  </div>
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
    },
    navPosition: {
      type: String,
      default: "nav-right"
    }
  },
  data() {
    return {
      isShow: -1,
      timeOut: null,
      isNav: null
    };
  },
  methods: {
    // 移除关闭下拉菜单
    closeChildMenuFn() {
      this.timeOut = setTimeout(() => {
        this.isShow = -1;
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
        this.isShow = -1;
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
        val.isShow = -1;
        return val;
      });
    }
  }
};
</script>
<style lang="less">
.top-nav {
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(233, 233, 233, 0.6);
  .top-nav__main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .web-logo {
      height: 60px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}

.nav-main {
  flex: 1;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0 30px;
  box-sizing: border-box;
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
      min-width: 100px;
      width: auto;
      height: auto;
      padding-top: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #333;
      box-shadow: 3px 3px 3px #eee;
    }
  }
}
</style>
