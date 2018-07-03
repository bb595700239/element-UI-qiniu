import Vue from 'vue'
import Router from 'vue-router'

import upload from '@/view/upload'


Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'upload',
        component: upload,
        hidden: true,
        meta: {name:'joubn'},
        query:{name:'joubn'},

      }
    ]
})
