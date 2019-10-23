<template>
  <div class="hello">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/circle" icon="cluster">社交圈</van-tabbar-item>
      <van-tabbar-item replace to="/level" icon="gem">升级权益</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
