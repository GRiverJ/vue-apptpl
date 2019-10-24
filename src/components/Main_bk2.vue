<template>
    <div>
        <div>
            <div class="fragment-page" v-show="active === 0">
                <HomeList @jumpToDetail="jumpToDetail"></HomeList>
            </div>
            <div class="fragment-page" v-show="active === 1">1</div>
            <div class="fragment-page" v-show="active === 2">2</div>
            <div class="fragment-page" v-show="active === 3">3</div>
            <div class="fragment-page" v-show="active === 4">4</div>
            <div class="fragment-page" v-show="active === 100" style="background: white;z-index: 100">
                <detail v-bind:id="detail_id" @changeTabbar="changeTabbar"></detail>
            </div>
        </div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="cluster">社交圈</van-tabbar-item>
            <van-tabbar-item icon="gem">升级权益</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    // import https from '../https.js';
    import Detail from './Detail';
    import HomeList from './HomeList';

    export default {
        name: "Main",
        data() {
            return {
                active: 0,
                home_list_data: [],
                pull_down_loading: false,
                pull_up_loading: false,
                pull_up_finished: false,
                detail_id:0,
            };
        },
        mounted() {
            /*let params = {'username': 'admin', 'password': 'admin123', 'rememberMe': 'true', 'isMobile': '1'}
            https.fetchPost('http://ssn-wxdev.com/fxapi/test/t2', params).then((data) => {
                window.console.log(data.data.name);
            }).catch(err => {
                    window.console.log(err);
                }
            )*/
        },
        methods: {
            jumpToDetail(id) {
                this.detail_id = id;
                this.active = 100;
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.home_list_data.push(this.home_list_data.length + 1);
                    }
                    // 加载状态结束
                    this.pull_up_loading = false;

                    // 数据全部加载完成
                    if (this.home_list_data.length >= 400) {
                        this.pull_up_finished = true;
                    }
                }, 500);
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.pull_down_loading = false;
                    this.home_list_data = [];
                    for (let i = 0; i < 20; i++) {
                        this.home_list_data.push(this.home_list_data.length + 1);
                    }
                    // 加载状态结束
                    this.pull_up_loading = false;
                }, 500);
            },
            changeTabbar(active){
                window.console.log('changeTabbar');
                this.active = active;
            },
        },
        components: {
            detail : Detail,
            HomeList : HomeList,
        },
        deactivated() {
            window.console.log('main deactivated');
        },
        activated() {
            window.console.log('main activated');
        }
    }
</script>

<style scoped>
    .fragment-page {
        position: absolute;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    }
</style>