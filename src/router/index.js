import Vue from 'vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from '../App'
import FAQ from '../FAQ'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
