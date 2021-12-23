<template>
  <div>
    <Header/>
    <div id="content" class="flex">
      <div id="searchMenu" class="flex-1 height-100%">
        <div id="searchbar" class="margin-bottom-10px searchbar-container">
          <input type="text" id="search" v-model="searchbar" placeholder="rechercher une agence" class="searchbar border-1px border-red border-radius-5px margin-right-5px margin-left-5px">
        </div>
        <div class="height-650px overflow-auto">
          <div v-for="agency in searchAgence"
               :key="agency.N_ANAEL"
               class="text-align-left padding-top-5px padding-bottom-5px border-bottom-3px border-red agency"
               @click="centerUpdate(agency.GPS)">
            <div class="margin-left-10px">
              Agence n° {{ agency.N_ANAEL }}
              <div class="flex">
                <span class="flex-1"> Adresse : </span>
                <span class="flex-3">
                  {{ agency.ADRESSE }}
                  <br>
                  {{ agency.CP }} {{agency.VILLE }}
                </span>
              </div>
              Téléphone : {{ agency.TEL }}
              <br>
              Mail : <a :href="`mailto:${agency.MAIL}`">{{ agency.MAIL }}</a>
            </div>
          </div>
        </div>
      </div>
      <div id="map_derichebourg" class="flex-3" style="height: 12px">
        <l-map
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
          style="height: 70vh;"
          class="z-index_1"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <!--si possible, utiliser geocoder pour coordonnées GPS-->
          <l-marker v-for="agency in agency_list"
                    :key="agency.N_ANAEL"
                    :id="agency.N_ANAEL"
                    :lat-lng="agency.GPS"
                    v-on:load="get_gps_coordinates(agency)"
                    @click="centerUpdate(agency.GPS)"
          >
            <l-icon
              :icon-url="require('../assets/pinpoint_map.png')"
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
            ></l-icon>
            <l-popup>
              <table>
                <tr>
                  <td>Num agence : </td>
                  <td>{{ agency.N_ANAEL }}</td>
                </tr>
                <tr>
                  <td>Raison Sociale : </td>
                  <td>{{ agency.RS }}</td>
                </tr>
                <tr>
                  <td>Adresse : </td>
                  <td>
                    <p>
                      {{ agency.ADRESSE }}, <br> {{ agency.CP }} {{ agency.VILLE }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Téléphone : </td>
                  <td>
                    <a :href='`tel:${agency.TEL}`'>{{ agency.TEL }}</a>
                  </td>
                </tr>
                <tr>
                  <td>Mail : </td>
                  <td>
                    <a :href='`mailto:${agency.MAIL}`'>{{ agency.MAIL }}</a>
                  </td>
                </tr>
              </table>
              <router-link :to="{name: 'agence', params : {
              id_agence : agency.N_ANAEL,
              nom_agence : `${agency.VILLE} Interim`,
              addresse_agence : `${agency.ADRESSE} ${agency.CP} ${agency.VILLE}`,
              tel_agence : agency.TEL,
              mail_agence : agency.MAIL,
              gps_agence : agency.GPS
              }
            }">
                plus d'informations
              </router-link>
            </l-popup>
          </l-marker>
        </l-map>
      </div>
    </div>
    <div id="infos_agence">
      <router-view class="z-index_2"></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet'
import { latLng } from 'leaflet'
import {OpenStreetMapProvider} from 'leaflet-geosearch'
import 'leaflet/dist/leaflet.css'
import '../assets/stylesheet/main.css'

const provider = new OpenStreetMapProvider()

export default {
  name: 'Annuaire',
  components: {
    Header,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  data () {
    return {
      agency_list: require('../assets/json_files/annuaire/agency_list.json'),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: latLng(48.7860516, 2.438976),
      zoom: 12,
      currentZoom: 12,
      showMap: true,
      provider,
      iconSize: 40,
      gpsCoordinates: [],
      searchbar: ''
    }
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15]
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15]
    },
    searchAgence () {
      return this.agency_list.filter(agency => {
        return agency.N_ANAEL.includes(this.searchbar) ||
          agency.ADRESSE.toLowerCase().includes(this.searchbar.toLowerCase()) ||
          agency.VILLE.toLowerCase().includes(this.searchbar.toLowerCase())
      })
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
      console.log(this.currentZoom)
    },
    centerUpdate (center) {
      this.center = center
      console.log(`[${this.center.lat}, ${this.center.lng}]`)
    },
    async get_gps_coordinates (agency) {
      console.log('get_gps_coordinates')
      this.gpsCoordinates = []
      let result = await this.provider.search({query: `${agency.ADRESSE}, ${agency.CP}, ${agency.VILLE}`})
      result.forEach(element => {
        this.gpsCoordinates.push(element.x)
        this.gpsCoordinates.push(element.y)
      })
      console.log(this.gpsCoordinates)
    }
  }
}
</script>

<style scoped>
.height-650px{
  height: 628px;
}
.agency{
  transition-duration: 0.35s;
}
.agency:hover{
  background-color: rgba(227, 0, 26, 0.9);
  color: white;
}
</style>
