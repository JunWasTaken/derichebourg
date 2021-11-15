<template>
  <div>
    <Header/>
    <div id="list_platforms">
      <div id="pixid_platforms" class="list_platforms border-right flex1">
        <div class="bold large center-text title_div">Liste des plateformes fonctionnant en lien avec Anael</div>
        <div v-for="platform in get_pixidPlatforms" v-bind:key="platform.id" :id="platform.id" class="margin-5vh margin-y-15px platform">
          <router-link :to="{name: 'clients', params: {id: platform.id, link: platform.lienplatform}}" class="link">
            <img :src="`${platform.address_logo}`" :alt="platform.alt" class="logo_platform">
            <div class="platform_name">{{ platform.name_platform }}</div>
          </router-link>
        </div>
      </div>
      <div id="non_pixid_platforms" class="list_platforms border-left flex1">
        <div class="bold large title_div">Liste des plateformes ne fonctionnant pas en lien avec Anael</div>
        <div v-for="platform in get_nonPixidPlatforms" v-bind:key="platform.id" :id="platform.id" class="margin-5vh margin-y-15px platform">
          <router-link :to="{name: 'clients', params: {id: platform.id, link: platform.lienplatform}}" class="link">
            <img :src="`${platform.address_logo}`" :alt="platform.alt" class="logo_platform">
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
export default {
  name: 'Platforms',
  components: {Footer, Header},
  data () {
    return {
      platforms: [
        {
          id: 'pixid',
          name_platform: 'PIXID',
          address_logo: require('../assets/logo_platforms/logo_pixid.png'),
          alt: 'logo PIXID',
          isLinkedAnael: true,
          lienplatform: 'https://www.pixid-services.net'
        },
        {
          id: 'coffreo',
          name_platform: 'Coffreo',
          address_logo: require('../assets/logo_platforms/logo_coffreo.png'),
          alt: 'logo Coffreo',
          isLinkedAnael: true,
          lienplatform: 'https://www.coffreo.com/'
        },
        {
          id: 'gestmax',
          name_platform: 'Gestmax',
          address_logo: require('../assets/logo.png'),
          alt: 'logo Gestmax',
          isLinkedAnael: false,
          lienplatform: 'https://derichebourg-interim.gestmax.fr/account/login'
        },
        {
          id: 'pilott',
          name_platform: 'Pilott',
          address_logo: require('../assets/logo_platforms/logo_pilott.png'),
          alt: 'logo Pilott',
          isLinkedAnael: true,
          lienplatform: 'https://hrexplorer.pilott.fr/Authentication/Login'
        },
        {
          id: 'peopulse',
          name_platform: 'Peopulse',
          address_logo: require('../assets/logo_platforms/logo_peopulse.png'),
          alt: 'logo Peopulse',
          isLinkedAnael: true,
          lienplatform: 'https://ns-sign.peopulse.com/'
        },
        {
          id: 'baps',
          name_platform: 'BAPS/ Directskills',
          address_logo: require('../assets/logo_platforms/logo_directskills.png'),
          alt: 'logo Directskills',
          isLinkedAnael: false,
          lienplatform: 'https://www.bapsett.directskills.com/baps-ett-prd/#/accueil'
        },
        {
          id: 'clic_staff',
          name_platform: 'Clic & Staff',
          address_logo: require('../assets/logo_platforms/logo_cs.png'),
          alt: 'logo clic & staff',
          isLinkedAnael: true,
          lienplatform: 'https://clicandstaff.fr/'
        },
        {
          id: 'fieldglass',
          name_platform: 'Fieldglass',
          address_logo: require('../assets/logo_platforms/logo_fieldglass.png'),
          alt: 'logo fieldglass',
          isLinkedAnael: false,
          lienplatform: 'https://www.fieldglass.net/?next=%2Faccount_detail.do%3Fcf%3D1'
        },
        {
          id: 'tradeshift',
          name_platform: 'Tradeshift',
          address_logo: require('../assets/logo_platforms/logo_tradeshift.png'),
          alt: 'logo Tradeshift',
          isLinkedAnael: true,
          lienplatform: 'https://www.fieldglass.net/?next=%2Faccount_detail.do%3Fcf%3D1'
        },
        {
          id: 'ogone',
          name_platform: 'Ogone',
          address_logo: require('../assets/logo_platforms/logo_ogone.png'),
          alt: 'logo Ogone',
          isLinkedAnael: true,
          lienplatform: 'https://www.ingenico.com/fr/login/ogone'
        },
        {
          id: 'chorus',
          name_platform: 'Chorus pro',
          address_logo: require('../assets/logo_platforms/logo_chorus.png'),
          alt: 'logo Chorus',
          isLinkedAnael: false,
          lienplatform: 'https://chorus-pro.gouv.fr/'
        },
        {
          id: 'basware',
          name_platform: 'Basware',
          address_logo: require('../assets/logo_platforms/logo_basware.png'),
          alt: 'logo Basware',
          isLinkedAnael: false,
          lienplatform: 'https://www.basware.com/fr-fr/accueil/'
        },
        {
          id: 'tungsten',
          name_platform: 'Tungsten',
          address_logo: require('../assets/logo_platforms/logo_tungsten.png'),
          alt: 'logo Tungsten',
          isLinkedAnael: false,
          lienplatform: 'https://www.tungsten-network.com/'
        },
        {
          id: 'randstad',
          name_platform: 'Randstad',
          address_logo: require('../assets/logo_platforms/logo_randstad.png'),
          alt: 'logo Randstad',
          isLinkedAnael: false,
          lienplatform: 'https://eflex.randstadsourceright.fr/eflex_login/login.aspx'
        }
      ]
    }
  },
  computed: {
    get_pixidPlatforms () {
      return this.platforms.filter(platform => platform.isLinkedAnael === true)
    },
    get_nonPixidPlatforms () {
      return this.platforms.filter(platform => platform.isLinkedAnael === false)
    }
  }
}
</script>

<style scoped>
#list_platforms{
  width: 90%;
  margin: 15px auto;
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
.center-text{
  text-align: center;
}
.flex1{
  flex: 1;
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
