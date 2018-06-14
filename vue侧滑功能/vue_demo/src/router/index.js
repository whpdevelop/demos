import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import itcast from '@/components/itcast'
import bxg from '@/components/bxg'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/itcast',
        name: 'itcast',
        component: itcast
    }, {
        path: '/bxg',
        name: 'bxg',
        component: bxg
    }]
})