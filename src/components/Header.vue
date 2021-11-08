<template>
  <div>
    <ul>
      <li v-for="button in buttons" v-bind:key="button.id" :id="button.id">
        <router-link v-bind:to="button.link" class="link">
          {{button.text}}
        </router-link>
      </li>
    </ul>
  </div>
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
ul li{
  display: inline;
  margin: 10px 10px;
}

.link{
  text-decoration: none;
  font-size: large;
  color: #000;
  padding: 10px;
  transition-duration: 0.5s;
}
.link:hover{
  background-color: #e3001a;
  color: #fff;
  font-weight: bolder;
}
</style>
