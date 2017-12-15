// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintUI)
Vue.config.productionTip = false
    //引入mui
import '../node_modules/mui-master/dist/css/mui.css'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})