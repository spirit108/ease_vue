<template>
  <ul class="child-menu">
    <li v-for="(item, i) in asideNavArr" :key="i" class="list">
      <div class="child-menu-list" v-if="item.isNavTable">
        <div v-if="item.children && item.children.length">
          <div class="child-menu-title" @click="showChildFn(i)">
            <p>
              <i class="icon-2"></i>
              <span>{{ item.meta.title }} {{ navIndex }}</span>
            </p>
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="child-menu-list-wrap" v-if="navIndex + '' + i == isShow">
            <aside-nav
              :asideNavArr="item.children"
              :navIndex="navIndex + 1"
            ></aside-nav>
          </div>
        </div>
        <div v-else>
          <router-link
            class="child-menu-title link"
            :to="item.path"
            v-if="item.isNavTable"
          >
            <i class="icon-home"></i>
            {{ item.meta.title }}
          </router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AsideNav",
  props: {
    asideNavArr: {
      type: Array,
      default() {
        return [];
      }
    },
    navIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    // 展示子组件
    showChildFn(i) {
      if ("" + this.navIndex + i == this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = "" + this.navIndex + i;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../Style/font.less");
.child-menu-list {
  min-height: 50px;
  line-height: 50px;
  .child-menu-title {
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .child-menu-title:hover {
    background: #555;
    color: rgb(95, 233, 141);
  }
}
.child-menu-list-wrap {
  .child-menu-list {
    padding: 0;
    padding-left: 15px;
    border: 0;
    .child-menu-title {
      display: flex;
      align-items: center;
      font-size: 16px;
      border: 0;
      width: auto;
      white-space: nowrap;
    }
  }
}
</style>
