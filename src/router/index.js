import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import user from '@/components/user'
import list from '@/components/list'
import home from '@/components/home'
import add from '@/components/add'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: 'user',
          name: 'user',
          component: user
        },
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
  ]
})
