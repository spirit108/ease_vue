<template>
  <ul class="child-menu">
    <li v-for="(item, i) in navArr" :key="i" class="list">
      <div class="child-menu-list" v-if="item.isNavTable">
        <div v-if="item.children && item.children.length">
          <p class="child-menu-title">{{ item.meta.title }}</p>
          <div class="child-menu-list-wrap">
            <child-nav-list
              :navArr="item.children"
              :navIndex="navIndex"
            ></child-nav-list>
          </div>
        </div>
        <div v-else>
          <router-link
            class="child-menu-title link"
            :to="item.path"
            :data-index="navIndex"
            v-if="item.isNavTable"
          >
            {{ item.meta.title }}
          </router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ChildNavList",
  props: {
    navArr: {
      type: Array,
      default() {
        return [];
      }
    },
    navIndex: Number
  }
};
</script>
<style lang="less" scoped>
.child-menu-list {
  padding: 0 20px;
  margin-bottom: 10px;
  .child-menu-title {
    color: #333;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
}
.child-menu-list-wrap {
  .child-menu-list {
    padding: 0;
    padding-left: 20px;
    border: 0;
    .child-menu-title {
      color: #333;
      display: flex;
      align-items: center;
      font-size: 16px;
      border: 0;
      width: auto;
      white-space: nowrap;
    }
    .link:hover {
      color: rgb(95, 233, 141);
    }
  }
}
</style>
