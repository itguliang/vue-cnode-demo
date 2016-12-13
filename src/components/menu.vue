<template>
    <section id="sideBar" class="nav-list" :class="{'show':showMenu}">
        <section class="list-ul">
            <router-link class="iconfont icon-1 item" :to="{'name':'list',query:{tab:'all'}}">全部</router-link>
            <router-link class="iconfont icon-2 item" :to="{'name':'list',query:{tab:'good'}}">精华</router-link>
            <router-link class="iconfont icon-3 item" :to="{'name':'list',query:{tab:'share'}}">分享</router-link>
            <router-link class="iconfont icon-4 item" :to="{'name':'list',query:{tab:'ask'}}">问答</router-link>
            <router-link class="iconfont icon-5 item" :to="{'name':'list',query:{tab:'job'}}">招聘</router-link>
        </section>
    </section>
</template>
<script>
    export default {
        replace: true,
        props: ['showMenu', 'pageType']
    };
</script>