<template>
  <div>
    <!-- <van-nav-bar title="首页" style="position:fixed;width:100%" /> -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list id="home-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            @click="jumpToDetail(1)"
          >
            <div slot="tags">
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </div>
            <div slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </div>
          </van-card>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      isLoading: false
    };
  },
  methods: {
    jumpToDetail(id) {
      this.$router.push({ path: "/detail/" + id });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.list = [];
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  components: {},
  deactivated() {
    window.console.log("deactivated");
    window.console.log(document.documentElement.scrollTop);
    sessionStorage.setItem("scrollTop", document.documentElement.scrollTop );
  },
  activated() {
    window.console.log("activated");
    document.documentElement.scrollTop  = sessionStorage.getItem("scrollTop");
  }
};
</script>

<style>
.van-card__content {
  text-align: left;
}
.van-tabs__wrap {
  position: fixed;
  width: 100%;
  margin-top: 44px;
  z-index: 100;
}
</style>
