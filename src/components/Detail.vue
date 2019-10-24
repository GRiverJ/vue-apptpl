<template>
    <div>
        <van-nav-bar title="标题" left-arrow @click-left="onClickLeft"/>
        <van-swipe :autoplay="3000" :width="swipe_item_width" indicator-color="white" style="height: 100px;background:lightblue;">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <van-cell-group>
            <van-field v-model="id" placeholder="id" />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props: ['id'],
        mounted() {
        },
        watch: {
            id: function () {
                // var id = this.$route.params.id;
                // this.username = '';
                // window.console.log(id);
                var _this = this;
                setTimeout(function () {
                    _this.$emit('hideMain');
                }, 300);
            }
        },
        data() {
            return {
                swipe_item_width : window.innerWidth,
                username: '',
                images: [
                    "https://img.yzcdn.cn/vant/apple-1.jpg",
                    "https://img.yzcdn.cn/vant/apple-2.jpg",
                ]
            };
        },
        methods: {
            onClickLeft() {
                // this.$toast('返回');
                // this.$router.go(-1);
                // window.console.log('changeTabbar');
                this.$emit('changeTabbar', 0);
            }
        },
        components: {}
    };
</script>

<style>
</style>
