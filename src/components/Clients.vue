<template>
  <div class="background">
    <div class="content">
      <div class="header">
        <div style="margin-bottom: 15px">
          <router-link to="/platforms" class="close_icon">
            <font-awesome-icon icon="times" class="fa-lg"/>
          </router-link>
        </div>
        <h1>
          Clients liés à {{$route.params.id}}
        </h1>
        <div class="flex">
          <div class="flex-1 link">
            doc
          </div>
          <div class="flex-1 link" v-on:click="move($route.params.link)">
            lien
          </div>
        </div>
        <div id="searchbar" class="searchbar-container">
          <input type="text" id="search" v-model="searchbar" placeholder="chercher le nom d'un client" class="searchbar">
        </div>
      </div>
      <table>
        <tr v-for="(client, index) in search_client" :key="$route.params.id + client.id" >
          <th v-bind:class="{ light_grey_bg : odd_numbers( index ) }">
            {{ client.Nom }}
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import '../assets/stylesheet/main.css'
export default {
  name: 'Clients',
  components: {Footer, Header},
  data () {
    return {
      searchbar: ''
    }
  },
  computed: {
    get_clients () {
      var table = require('../assets/json_files/clients_platforms/' + this.$route.params.id + '.json')
      console.log(table)
      return Object.values(table)
    },
    search_client () {
      return this.get_clients.filter(client => {
        console.log(this.searchbar)
        return client.Nom.toLowerCase().includes(this.searchbar.toLowerCase())
      })
    }
  },
  methods: {
    odd_numbers (x) {
      return x % 2 === 0
    },
    move (link) {
      window.location.href = link
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
  text-align: left;
  margin-top: 10px;
}
th{
  padding-top: 5px;
}
h1{
  padding-top: 15px;
}
.background{
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.50);
  position: absolute;
  top: 0;
}
.content{
  width: 80%;
  height: 80%;
  overflow: auto;
  padding: 0 15px 15px 5px;
  background: white;
  margin: 5% auto;
  border-radius: 10px;
  border-left: solid 15px #e3001a;
  position: relative;
}
.close_icon{
  position: absolute;
  top: 5px;
  right: 5px;
  color: #e3001a;
}
.link{
  border: 1px #2c3e50 solid;
  padding: 5px;
  font-size: large;
  text-decoration: none;
  color: black;
  transition-duration: 0.25s;
}
.link:hover{
  background-color: #ececec;
}
.light_grey_bg{
  background-color: #ececec;
}
.searchbar-container{
  box-sizing: content-box;
}

.header {
  position: sticky;
  top: 0px;
  background-color: white;
}
</style>
