<template>
  <div id="app" style="font-family: GillSansSTD">
    <img src="./assets/derichebourg_logo.svg" alt="bison rouge" id="logoDerichebourg" class="margin-top-5px">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import IndexMenu from './components/Menus/IndexMenu'
import Header from './components/Header'
import './assets/stylesheet/main.css'
import './assets/stylesheet/fonts.css'

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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#logoDerichebourg {
  height: 150px;
  width: auto;
}
</style>
