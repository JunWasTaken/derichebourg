<template>
  <div>
    <Header/>
    <div id="list_platforms">
      <div id="pixid_platforms" class="list_platforms border-right flex-1">
        <div class="text-bulk text-big text-align-center title_div">Liste des plateformes fonctionnant en lien avec Anael</div>
        <div v-for="platform in get_pixidPlatforms" v-bind:key="platform.id" :id="platform.id" class="margin-x-15px margin-y-15px platform">
          <router-link :to="{name: 'clients', params: {id: platform.id, link: platform.lienplatform}}" class="link">
            <img :src="require(`../assets/logo_platforms/logo_${platform.id}.png`)"  :alt="platform.alt" class="logo_platform">
            <div class="platform_name">{{ platform.name_platform }}</div>
          </router-link>
        </div>
      </div>
      <div id="non_pixid_platforms" class="list_platforms border-left flex-1">
        <div class="text-bulk text-big title_div">Liste des plateformes ne fonctionnant pas en lien avec Anael</div>
        <div v-for="platform in get_nonPixidPlatforms" v-bind:key="platform.id" :id="platform.id" class="margin-x-15px margin-y-15px platform">
          <router-link :to="{name: 'clients', params: {id: platform.id, link: platform.lienplatform}}" class="link">
            <img :src="require(`../assets/logo_platforms/logo_${platform.id}.png`)"  :alt="platform.alt" class="logo_platform">
            <div class="platform_name">{{ platform.name_platform }}</div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/stylesheet/main.css'
export default {
  name: 'Platforms',
  components: {Footer, Header},
  data () {
    return {
      platforms: require('../assets/json_files/clients_platforms/list_platforms.json')
    }
  },
  computed: {
    get_pixidPlatforms () {
      console.log(this.platforms.filter(platform => platform.isLinkedAnael === true))
      return this.platforms.filter(platform => platform.isLinkedAnael === true)
    },
    get_nonPixidPlatforms () {
      console.log(this.platforms.filter(platform => platform.isLinkedAnael === false))
      return this.platforms.filter(platform => platform.isLinkedAnael === false)
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#list_platforms{
  width: 90%;
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
}
.platform{
  width: 200px;
  height: 210px;
  border: solid 1px #2c3e50;
  border-radius: 10px;
  position: relative;
  transition-duration: 0.25s;
  box-sizing: border-box;
}
.platform:hover{
  transform: scale(1.15);
}
.logo_platform{
  width: 90%;
  height: auto;
  position: absolute;
  top: 0;
  left: 9.5px;
  margin-top: 5px;
}
.platform_name{
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding-top: 5px;
  position: absolute;
  bottom: 5px;
}
.border-left{
  border-left: solid #2c3e50 1px;
}
.border-right{
  border-right: solid 1px #2c3e50;
}
.link{
  color: black;
}
.list_platforms{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title_div{
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
