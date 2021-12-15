<template>
  <div>
    <Header/>
    <div id="map_derichebourg">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        style="height: 70vh;"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="agency in agency_list" :key="agency.AGE" :id="agency.AGE" :lat-lng="get_gps_coordinates(agency)">
          <l-icon
            :icon-url="require('../assets/pinpoint_map.png')"
            :icon-size="dynamicSize"
            :icon-anchor="dynamicAnchor"
          ></l-icon>
          <l-popup>
            <table>
              <tr>
                <td>Num agence : </td>
                <td>{{ agency.AGE }}</td>
              </tr>
              <tr>
                <td>Raison Sociale : </td>
                <td>{{ agency.RSO }}</td>
              </tr>
              <tr>
                <td>Adresse : </td>
                <td>
                  <p>
                    {{ agency.RU1 }}, {{ agency.RU2 }} <br> {{ agency.CPO }} {{ agency.VIL }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Téléphone : </td>
                <td>
                  <a :href='`tel:${agency.TLP}`'>{{ agency.TLP }}</a>
                </td>
              </tr>
            </table>
            <p>
              plus d'informations
            </p>
          </l-popup>
        </l-marker>
      </l-map>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header'
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet'
import {latLng} from 'leaflet'
import {OpenStreetMapProvider} from 'leaflet-geosearch'
import 'leaflet/dist/leaflet.css'

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
      gpsCoordinates: []
    }
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15]
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15]
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
      console.log(this.currentZoom)
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    async get_gps_coordinates (agency) {
      // let tmpArray = []
      // this.gpsCoordinates = []
      let result = await this.provider.search({query: `${agency.RU1}, ${agency.RU2}, ${agency.CPO}, ${agency.VIL}`})
      console.log(result)
      return [result[0].x, result[0].y]
      /* result.then((element) => {
        tmpArray.push(element[0].x)
        tmpArray.push(element[0].y)
        this.gpsCoordinates = tmpArray
        console.log(this.gpsCoordinates)
      }) */
      // return tmpArray
    }
  }
}
</script>

<style scoped>
#map_derichebourg{
  margin: 0 auto;
  width: 80%;
}
</style>
