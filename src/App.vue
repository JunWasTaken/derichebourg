<template>
  <div id="app">
    <img src="./assets/derichebourg_logo.svg" alt="bison rouge" id="logoDerichebourg">
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#logoDerichebourg {
  height: 150px;
  width: auto;
}
</style>
