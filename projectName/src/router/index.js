import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import shezhi from '@/components/shezhi/shezhi'
import xiaoxi from '@/components/xiaoxi/xiaoxi'
import tongxun from '@/components/tongxun/tongxun'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/shezhi',
            component: shezhi
        },
        {
            path: '/tongxun',
            component: tongxun
        },
        {
            path: '/xiaoxi',
            component: xiaoxi
        }
    ]

})