<template>
  <div id="FAQ_Accueil">
    <Header/>
    <div class="container">
        <form class="container searchbar-container">
          <input type="text" v-model="searchbar" placeholder="saississez les mots-clés" class="searchbar">
        </form>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  name: 'FAQ',
  components: {Header, Footer},
  data () {
    return {
      searchbar: '',
      platform: ''
    }
  }
}
</script>
<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
.searchbar-container{
  border: #2c3e50 solid 1px;
  position: relative;
}
.searchbar{
  width: 75%;
  padding: 5px;
  position: absolute;
  left: 0;
}
</style>
