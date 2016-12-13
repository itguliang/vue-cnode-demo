import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';

import './assets/scss/style.scss';

Vue.use(VueRouter)

const router = new VueRouter({
  routes 
})

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')