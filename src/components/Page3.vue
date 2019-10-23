<template>
  <div>
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    <!-- detail{{ $route.params.id }} -->
    <van-swipe :autoplay="3000" indicator-color="white" style="height: 100px;background:lightblue;">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Page3",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    onClickLeft() {
      // this.$toast('返回');
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style>
</style>
