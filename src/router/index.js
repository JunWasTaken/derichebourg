import Vue from 'vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FAQ from '../views/FAQ'
import IndexMenu from '../components/Menus/IndexMenu'
import Platforms from '../views/Platforms'
import Incidents from '../views/Incidents'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: IndexMenu
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/platforms',
      name: 'platforms',
      component: Platforms
    },
    {
      path: '/incidents',
      name: 'incidents',
      component: Incidents
    }
  ]
})
