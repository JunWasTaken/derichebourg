import Vue from 'vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FAQ from '../views/FAQ'
import IndexMenu from '../components/Menus/IndexMenu'
import Platforms from '../views/Platforms'
import Clients from '../components/Clients'
import Agence from '../views/Agence'
import Person from '../views/Person'
import Annuaire from '../views/Annuaire'

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
      component: FAQ,
      children: [
        {
          path: ''
        }
      ]
    },
    {
      path: '/platforms',
      name: 'platforms',
      component: Platforms,
      children: [
        {
          path: ''
        }
      ]
    },
    {
      path: 'platforms/:id',
      name: 'clients',
      component: Clients
    },
    {
      path: '/annuaire',
      name: 'annuaire',
      component: Annuaire,
      children: [
        {
          path: ''
        }
      ]
    },
    {
      path: 'annuaire/:id_agence',
      name: 'agence',
      component: Agence,
      children: [
        {
          path: '/:id_personne',
          name: 'personne',
          component: Person
        }
      ]
    }
  ]
})
