import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import FundsUsage from '@/views/FundsUsage'
import FundsGoal from '@/views/FundsGoal'
import FundsDistribution from '@/views/FundsDistribution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/experience',
      name: 'FundsGoal',
      component: FundsGoal,
      meta: {
        title: 'Ibrahiem M - Experience'
      }
    },
    {
      path: '/skills',
      name: 'FundsUsage',
      component: FundsUsage,
      meta: {
        title: 'Ibrahiem M - Skills'
      }
    },
    {
      path: '/projects',
      name: 'FundsDistribution',
      component: FundsDistribution,
      meta: {
        title: 'Ibrahiem M - Projects'
      }
    }
  ]
})