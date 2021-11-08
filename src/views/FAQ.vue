<template>
  <div class="hello">
    <Header/>
    <h1>{{msg}}</h1>
    <div>
      <h2>Bienvenue sur la FAQ Derichebourg.</h2>
    </div>
    <Footer/>
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
      msg: 'hello'
    }
  }
}
</script>

<style scoped>
</style>
