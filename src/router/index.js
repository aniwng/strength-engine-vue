import Vue from 'vue'
import Router from 'vue-router'
import Programs from '@/components/Programs/Programs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Programs',
      component: Programs
    }
  ]
})
