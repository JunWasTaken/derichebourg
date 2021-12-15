<template>
  <div id="map">
    <Header/>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      style="height: 70vh; width: 80%"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import Header from '../components/Header'
import { LMap, LTileLayer } from 'vue2-leaflet'
import {latLng} from 'leaflet'
import {OpenStreetMapProvider} from 'leaflet-geosearch'
import 'leaflet/dist/leaflet.css'

const provider = new OpenStreetMapProvider()

export default {
  name: 'Annuaire',
  components: {
    Header,
    LMap,
    LTileLayer
  },
  data () {
    return {
      agency_list: require('../assets/json_files/annuaire/agency_list.json'),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: latLng(48.7860516, 2.438976),
      zoom: 10,
      currentZoom: 10,
      showMap: true
    }
  },
  computed: {
    get_gps_coordinates (agency) {
      return this.provider.search({})
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
      console.log(this.currentZoom)
    },
    centerUpdate (center) {
      this.currentCenter = center
    }
  }
}
</script>

<style scoped>
#map_derichebourg{
  width: 80%;
}
</style>
