import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Experience from '@/views/Experience'
import Skills from '@/views/Skills'
import Projects from '@/views/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Ibrahiem Mohammad'
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      meta: {
        title: 'Experience - Ibrahiem M'
      }
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
      meta: {
        title: 'Skills - Ibrahiem M'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        title: 'Projects - Ibrahiem M'
      }
    }
  ]
})