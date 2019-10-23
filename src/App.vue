<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-tabbar{
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0px -1px 1px ghostwhite;
  /* border-top: 1px solid ghostwhite; */
  padding: 3px 0;
}
.app-tabbar-item{
  float: left;
  width: 50%;
}
.app-tabbar-item-active{
  color: #1989fa;
}
.app-tabbar-item-text{
  font-size: .5rem;
}
</style>
