<template>
  <div id="app">
    <img src="./assets/logo.png">
    <IndexMenu/>
    <Footer/>
  </div>

</template>

<script>
import Footer from './components/Footer'
import IndexMenu from './components/MainMenu/IndexMenu'

export default {
  name: 'App',
  components: {IndexMenu, Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
