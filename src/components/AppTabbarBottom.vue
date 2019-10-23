<template>
  <div class="app-tabbar">
    <div class="app-tabbar-item app-tabbar-item-active">
      <div class="app-tabbar-item-icon">
        <van-icon size="1.5rem" name="wap-home" />
      </div>
      <div class="app-tabbar-item-text">首页</div>
    </div>
    <div class="app-tabbar-item" @click="jumpPage('page2')">
      <div class="app-tabbar-item-icon">
        <van-icon size="1.5rem" name="manager-o" />
      </div>
      <div class="app-tabbar-item-text">用户</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTabbarBottom",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
