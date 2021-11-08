<template>
  <navbar>
    <ul>
      <li v-for="button in buttons" v-bind:key="button.id" :id="element.id">
        <router-link v-bind:to="element.link">
          {{element.text}}
        </router-link>
      </li>
    </ul>
  </navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      buttons: [
        {
          id: 'accueil',
          link: '/',
          text: 'Accueil'
        },
        {
          id: 'platforms',
          link: '/platforms',
          text: 'plateformes'
        },
        {
          id: 'FAQ',
          link: '/faq',
          text: 'FAQ '
        },
        {
          id: 'incidents',
          link: '/incidents',
          text: 'incidents'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
