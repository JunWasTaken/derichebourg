<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div>
      <h2>Bienvenue sur la FAQ Derichebourg.</h2>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'FAQ',
  components: {Footer},
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style scoped>
</style>
