<template>
    <div>
        <van-nav-bar title="首页"/>
        <van-nav-bar title="首页" class="fixed-navbar" />
        <van-pull-refresh v-model="pull_down_loading" @refresh="onRefresh">
            <van-list id="home-list" v-model="pull_up_loading" :finished="pull_up_finished" finished-text="没有更多了"
                      @load="onLoad">
                <div v-for="item in home_list_data" :key="item">
                    <van-card
                            num="2"
                            price="2.00"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                            @click="jumpToDetail(item)"
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
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: "HomeList",
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
        methods: {
            jumpToDetail(id) {
                this.$emit('jumpToDetail', id);
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
        },
        components: {},
        deactivated() {
        },
        activated() {
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
