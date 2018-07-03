import Vue from 'vue'
import Router from 'vue-router'

import login from '@/view/login'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: login,
      hidden: true,
      meta: {name:'joubn'},
      query:{name:'joubn'},

    }
    ]
})
