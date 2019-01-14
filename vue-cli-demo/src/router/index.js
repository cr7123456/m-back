import Vue from 'vue'
import Router from 'vue-router'
import  Team from '@/pages/Team'
import  Guide from '@/pages/Guide'
import  Case from '@/pages/Case'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Team',
      component: Team
    },
    {
      path: '/Guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case
    }

  ]
})
