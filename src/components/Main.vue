<template>
    <div>
        <div>
            <!--首页-->
            <div class="fragment-page" v-show="main_active === 0">
                <HomeList @jumpToDetail="jumpToDetail"></HomeList>
            </div>
            <div class="fragment-page" v-show="main_active === 1">
                1
            </div>
            <div class="fragment-page" v-show="main_active === 2">
                2
            </div>
            <div class="fragment-page" v-show="main_active === 3">
                3
            </div>
            <div class="fragment-page" v-show="main_active === 4">
                4
            </div>
            <!--详情页-->
            <transition name="slide-right" v-on:after-enter="afterEnterDetail">
                <div class="fragment-page" v-show="detail_active === 1" style="background: white;z-index: 100">
                    <detail v-bind:id="detail_id" @changeTabbar="changeTabbar" ></detail>
                </div>
            </transition>
        </div>
        <van-tabbar v-model="main_active" v-show="main_active !== -1">
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
                main_active: 0,
                detail_active: 0,
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
                // this.$router.push({path: "/detail/" + id});
                this.detail_id = id;
                this.detail_active = 1;
            },
            changeTabbar(active){
                this.main_active = active;
                if(this.detail_active){
                    this.detail_active = 0;
                }
            },
            hideMain(){
                this.main_active = -1;
            },
            afterEnterDetail(){
                this.hideMain();
            },
        },
        components: {
            detail : Detail,
            HomeList : HomeList,
        },
        deactivated() {
            // window.console.log('main deactivated');
        },
        activated() {
            // window.console.log('main activated');
        }
    }
</script>

<style scoped>
    .fragment-page {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    }

    /* 设置持续时间和动画函数 */
    .slide-right-enter-active {
        transition: all .3s ease;
    }
    .slide-right-leave-active {
        transition: all .3s ease;
    }
    .slide-right-enter, .slide-right-leave-to {
        transform: translateX(100%);
        /*opacity: 0;*/
    }
</style>