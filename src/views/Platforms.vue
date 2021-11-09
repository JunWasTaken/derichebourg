<template>
  <div>
    <Header/>
    <div class="bold large">
      Note : toutes les plateformes dont le fond est grisée de <span class="grey_bg">cette couleur</span> correspondent aux plateformes fonctionnant en lien avec Anael.
    </div>
    <div id="list_platforms">
      <div v-for="platform in platforms" v-bind:key="platform.id" :id="platform.id" class="margin-5vh margin-y-15px platform" v-bind:class="{ grey_bg: platform.isLinkedAnael}">
        <img :src="`${platform.address_logo}`" :alt="platform.alt" class="logo_platform">
        <div class="platform_name">{{ platform.name_platform }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Platforms',
  components: {Header},
  data () {
    return {
      platforms: [
        {
          id: 'pixid',
          name_platform: 'PIXID',
          address_logo: require('../assets/logo_platforms/logo_pixid.png'),
          alt: 'logo PIXID',
          isLinkedAnael: true
        },
        {
          id: 'coffreo',
          name_platform: 'Coffreo',
          address_logo: require('../assets/logo_platforms/logo_coffreo.png'),
          alt: 'logo Coffreo',
          isLinkedAnael: true
        },
        {
          id: 'gestmax',
          name_platform: 'Gestmax',
          address_logo: require('../assets/logo.png'),
          alt: 'logo Gestmax',
          isLinkedAnael: false
        },
        {
          id: 'pilott',
          name_platform: 'Pilott',
          address_logo: require('../assets/logo_platforms/logo_pilott.png'),
          alt: 'logo Pilott',
          isLinkedAnael: true
        },
        {
          id: 'peopulse',
          name_platform: 'Peopulse',
          address_logo: require('../assets/logo_platforms/logo_peopulse.png'),
          alt: 'logo Peopulse',
          isLinkedAnael: true
        },
        {
          id: 'BAPS',
          name_platform: 'BAPS/ Directskills',
          address_logo: require('../assets/logo_platforms/logo_directskills.png'),
          alt: 'logo Directskills',
          isLinkedAnael: false
        },
        {
          id: 'clic_staff',
          name_platform: 'Clic & Staff',
          address_logo: require('../assets/logo_platforms/logo_cs.png'),
          alt: 'logo clic & staff',
          isLinkedAnael: true
        },
        {
          id: 'fieldglass',
          name_platform: 'Fieldglass',
          address_logo: require('../assets/logo_platforms/logo_fieldglass.png'),
          alt: 'logo fieldglass',
          isLinkedAnael: false
        },
        {
          id: 'tradeshift',
          name_platform: 'Tradeshift',
          address_logo: require('../assets/logo_platforms/logo_tradeshift.png'),
          alt: 'logo Tradeshift',
          isLinkedAnael: true
        },
        {
          id: 'ogone',
          name_platform: 'Ogone',
          address_logo: require('../assets/logo_platforms/logo_ogone.png'),
          alt: 'logo Ogone',
          isLinkedAnael: true
        },
        {
          id: 'chorus',
          name_platform: 'Chorus pro',
          address_logo: require('../assets/logo_platforms/logo_chorus.png'),
          alt: 'logo Chorus',
          isLinkedAnael: false
        },
        {
          id: 'basware',
          name_platform: 'Basware',
          address_logo: require('../assets/logo_platforms/logo_basware.png'),
          alt: 'logo Basware',
          isLinkedAnael: false
        },
        {
          id: 'tungsten',
          name_platform: 'Tungsten',
          address_logo: require('../assets/logo_platforms/logo_tungsten.png'),
          alt: 'logo Tungsten',
          isLinkedAnael: false
        }
      ]
    }
  }
}
</script>

<style scoped>
#list_platforms{
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.margin-5vh{
  margin-left: 15px;
  margin-right:15px;
}

.margin-y-15px{
  margin-top: 15px;
  margin-bottom: 15px;
}
.grey_bg{
  background-color: rgba(225, 225, 225, 0.99);
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
.bold{
  font-weight: bold;
}
.large{
  font-size: large;
}
</style>
