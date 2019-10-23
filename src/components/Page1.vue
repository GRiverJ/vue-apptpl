<template>
  <div>
    <div id="list" class="app-body">
      <div @click="jumpPage('detail/1')">jumpPage Detail</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>2</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div @click="jumpPage('detail/1')">jumpPage Detail</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      
    };
  },
  methods: {
    jumpPage(page_name) {
      this.$router.push({ path: "/" + page_name });
    },
  },
  components: {},
  mounted() {},
  deactivated() {
    sessionStorage.setItem(this.$options.name + ':' + "list_scroll_top", window.scrollY);
  },
  activated() {
    var list_scroll_top = sessionStorage.getItem(this.$options.name + ':' + "list_scroll_top") || 0;
    document.body.scrollTop = document.documentElement.scrollTop = window.pageYOffset = list_scroll_top;
  }
};
</script>

<style>
</style>
