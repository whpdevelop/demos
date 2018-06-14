// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
Vue.config.productionTip = false
    // 引入侧滑组件
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})