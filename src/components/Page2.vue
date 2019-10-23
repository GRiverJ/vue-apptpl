<template>
  <div>
    <div class="app-body">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
    </div>
    <div class="app-tabbar">
      <div class="app-tabbar-item" @click="jumpPage('page1')">
        <div class="app-tabbar-item-icon">
          <van-icon size="1.5rem" name="wap-home-o" />
        </div>
        <div class="app-tabbar-item-text">首页</div>
      </div>
      <div class="app-tabbar-item app-tabbar-item-active">
        <div class="app-tabbar-item-icon">
          <van-icon size="1.5rem" name="manager" />
        </div>
        <div class="app-tabbar-item-text">用户</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    jumpPage(page_name) {
      this.$router.push({ path: "/" + page_name });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 400) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  components: {},
  mounted() {},
  deactivated() {
    
    window.console.log(document.body.scrollTop);
    window.console.log(window.scrollY);
    window.console.log(document.documentElement.scrollTop);
    sessionStorage.setItem(this.$options.name + ":" + "list_scroll_top",window.scrollY);
  },
  activated() {
    var list_scroll_top = sessionStorage.getItem(this.$options.name + ':' + "list_scroll_top") || 0;
    document.body.scrollTop = document.documentElement.scrollTop = window.pageYOffset = list_scroll_top;
  }
};
</script>

<style>
</style>
