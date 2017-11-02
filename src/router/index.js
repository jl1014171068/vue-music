import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'recommend',
      component: resolve => require(['components/recommend/recommend'], resolve)
    },
    {
      path: '/singer',
      name: 'singer',
      component: resolve => require(['components/singer/singer'], resolve)
    },
    {
      path: '/rank',
      name: 'rank',
      component: resolve => require(['components/rank/rank'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['components/search/search'], resolve)
    }
  ]
})
