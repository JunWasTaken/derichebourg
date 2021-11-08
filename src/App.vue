<template>
  <div id="app">
    <img src="./assets/bison-rouge.png" alt="bison rouge" id="logoDerichebourg">
    <Header/>
    <IndexMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import IndexMenu from './components/Menus/IndexMenu'
import Header from './components/Header'

export default {
  name: 'App',
  components: {Header, IndexMenu, Footer}
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
#logoDerichebourg {
  height: 150px;
  width: auto;
  margin-bottom: 25px;
}
</style>
