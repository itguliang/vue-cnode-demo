<template>
<div>
    <!-- 全局header -->
    <nv-head :page-type="getTitleStr(searchKey.tab)" :fix-head="true" ref="head">
    </nv-head>

    <section id="page">
        <!-- 首页列表 -->
        <ul class="posts-list">
            <li v-for="item in topics">
                <h3 v-text="item.title"
                    :class="getTabInfo(item.tab, item.good, item.top, true)"
                    :title="getTabInfo(item.tab, item.good, item.top, false)">
                </h3>
                <div class="content">
                        <img class="avatar" :src="item.author.avatar_url" />
                        <div class="info">
                            <p>
                                <span class="name">
                                    {{item.author.loginname}}
                                </span>
                                <span class="status" v-if="item.reply_count > 0">
                                    <b>{{item.reply_count}}</b>
                                    /{{item.visit_count}}
                                </span>
                            </p>
                            <p>
                                <time>{{item.create_at| getLastTimeStr(true)}}</time>
                                <time>{{item.last_reply_at| getLastTimeStr(true)}}</time>
                            </p>
                        </div>
                </div>
            </li>
        </ul>
    </section>
</div>
</template>

<script>

    const $ = require('../libs/jquery.min.js');
    import utils from '../libs/utils.js';
    
	import nvHead from '../components/header.vue';

	export default {
        filters: {
            getLastTimeStr(time, isFromNow) {
                return utils.getLastTimeStr(time, isFromNow);
            }
        },
		data(){
			return {
                topics: [],
                searchKey: {
                    tab: 'all'
                }
            };
		},
        mounted() {
            this.getTopics();
        },
        watch: {
            // 切换页面
            '$route' (to, from) {
                if (to.query && to.query.tab) {
                    this.searchKey.tab = to.query.tab;
                }
                this.searchKey.limit = 20;
                this.getTopics();
                this.$refs.head.menuShow = false;
                $('html, body, #page').removeClass('scroll-hide');
            }
        },
		methods: {
            getTitleStr(tab) {
                let str = '';
                switch (tab) {
                    case 'share':
                        str = '分享';
                        break;
                    case 'ask':
                        str = '问答';
                        break;
                    case 'job':
                        str = '招聘';
                        break;
                    case 'good':
                        str = '精华';
                        break;
                    default:
                        str = '全部';
                        break;
                }
                return str;
            },
            getTopics() {
                let params = $.param(this.searchKey);
                $.get('https://cnodejs.org/api/v1/topics?' + params, (d) => {
                    if (d && d.data) {
                        this.topics = d.data;
                    }
                });
            },
            // 获取不同tab的样式或者标题
            getTabInfo(tab, good, top, isClass) {
                let str = '';
                let className = '';
                if (top) {
                    str = '置顶';
                    className = 'top';
                } else if (good) {
                    str = '精华';
                    className = 'good';
                } else {
                    switch (tab) {
                        case 'share':
                            str = '分享';
                            className = 'share';
                            break;
                        case 'ask':
                            str = '问答';
                            className = 'ask';
                            break;
                        case 'job':
                            str = '招聘';
                            className = 'job';
                            break;
                        default:
                            str = '暂无';
                            className = 'default';
                            break;
                    }
                }
                return isClass ? className : str;
            }
        },
        components: {
            nvHead
        }
    };
</script>