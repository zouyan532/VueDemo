import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeLog from '@/components/LifeLog'
import ChangeData from '@/components/ChangeData'
import VueCmd from '@/components/VueCmd'
import ComputedAndWatch from '@/components/ComputedAndWatch'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/LifeLog',
      component: LifeLog
    },
    {
      path: '/ChangeData',
      component: ChangeData
    },
    {
      path: '/VueCmd',
      component: VueCmd
    },
    {
      path: '/ComputedAndWatch',
      component: ComputedAndWatch
    },
  ]
})
