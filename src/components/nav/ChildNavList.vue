<template>
  <ul class="child-menu">
    <li v-for="(item, i) in navArr" :key="i" class="child-menu-list">
      <div v-if="item.children && item.children.length">
        <p class="child-menu-title">
          {{ item.name }}
        </p>
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
        >
          {{ item.name }}
        </router-link>
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
  border-bottom: 1px solid rgba(233, 233, 233, 0.8);
  margin-bottom: 10px;
  &:last-child {
    border: 0;
  }
  .child-menu-title {
    color: #333;
    display: flex;
    align-items: center;
    font-size: 20px;
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
    }
    .link:hover {
      color: rgb(95, 233, 141);
    }
  }
}
</style>
