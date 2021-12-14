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
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Annuaire',
  components: {
    Header,
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: latLng(48.7860516, 2.438976),
      zoom: 10,
      currentZoom: 10,
      showMap: true
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
