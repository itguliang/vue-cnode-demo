<template>
    <div>
        <nv-menu v-if="fixHead" :page-type="pageType" :show-menu="menuShow" ></nv-menu>
        <div class="page-cover" v-if="menuShow&&fixHead" @click="hideMenus"></div>
        <header class="fix-header" :class="{'show':menuShow}" id="hd">
            <div class="nv-toolbar">
                <div class="toolbar-nav" @click="openMenu" v-if="fixHead">
                </div>
                <span v-text="pageType"></span>
            </div>
        </header>
    </div>
</template>

<script>
    const $ = require('../libs/jquery.min.js');

    export default {
        replace: true,
        props: {
            pageType: String,
            fixHead: Boolean
        },
        data() {
            return {
                menuShow: false
            };
        },
        methods: {
            openMenu() {
                $('html, body, #page').addClass('scroll-hide');
                this.menuShow = !this.menuShow;
            },
            hideMenus() {
                this.menuShow = !this.menuShow;
                $('html, body, #page').removeClass('scroll-hide');
            }
        },
        components: {
            'nvMenu': require('./menu.vue')
        }
    };
</script>