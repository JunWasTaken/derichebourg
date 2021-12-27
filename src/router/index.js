import Vue from 'vue'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FAQ from '../views/FAQ'
import IndexMenu from '../components/Menus/IndexMenu'
import Platforms from '../views/Platforms'
import Annuaire from '../views/Annuaire'
import Clients from '../components/Clients'
import Agence from '../components/Annuaire/Agence'
import Person from '../components/Annuaire/Person'
import Organigrame from '../views/Organigrame'

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
      component: FAQ,
      children: [
        {
          path: '',
          name: 'faq'
        }
      ]
    },
    {
      path: '/platforms',
      component: Platforms,
      children: [
        {
          path: '',
          name: 'platforms'
        },
        {
          path: '/platforms/:id',
          name: 'clients',
          component: Clients
        }
      ]
    },
    {
      path: '/annuaire',
      component: Annuaire,
      children: [
        {
          path: '',
          name: 'annuaire'
        },
        {
          path: '/annuaire/:id_agence',
          name: 'agence',
          component: Agence,
          children: [
            {
              path: '/annuaire/:id_agence/:id_personne',
              name: 'personne',
              component: Person
            }
          ]
        }
      ]
    },
    {
      path: '/organigramme',
      name: 'organigramme',
      component: Organigrame
    }
  ]
})
