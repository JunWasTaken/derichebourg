<template>
  <div class="background">
    <div class="content">
      <header>
        <h2 class="padding-top-15">
          {{$route.params.nom_agence}}
        </h2>
        <router-link to="/annuaire" class="close_icon">
          <font-awesome-icon icon="times" class="fa-lg"/>
        </router-link>
      </header>
      <div id="infoAgence">
        <h2>Infos agence</h2>
        <div id="infoGen" class="text-align-left">
          <p>
            <span class="display-inline text-bulk text-big">Adresse : </span> {{$route.params.addresse_agence}}
          </p>
          <p>
            <span class="display-inline text-bulk text-big">Téléphone agence : </span>{{$route.params.tel_agence}}
          </p>
          <p>
            <span class="display-inline text-bulk text-big">Mail agence : </span><a :href='`mailto:${$route.params.mail_agence}}}`'>{{$route.params.mail_agence}}</a>
          </p>
        </div>
      </div>
      <div id="chefAgence">
        <h2>Chef d'agence</h2>
        <div id="infoChef" class="text-align-left">
          <p>
            <span class="display-inline text-bulk text-big">Identité :</span>
          </p>
          <p>
            <span class="display-inline text-bulk text-big">Téléphone : </span>
          </p>
          <p>
            <span class="display-inline text-bulk text-big">Mail : </span>
          </p>
        </div>
      </div>
      <div id="employee">
        <h2>Liste des assistant.e.s d'agence</h2>
        <div v-for="(employee, index) in get_employees"
             :key="`${employee.PS1NOM}_${employee.PS1PRE}`"
             :id="`${employee.PS1NOM}_${employee.PS1PRE}`"
             class="text-align-left padding-top-5px padding-bottom-5px padding-left-5px"
             :class="{ light_grey_bg : oddNumbers(index) }"
        >
          <span class="text-bulk">{{employee.PS1NOM}} {{employee.PS1PRE}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/stylesheet/main.css'

export default {
  name: 'Agence',
  data () {
    return {
      list_employees: require('../../assets/json_files/annuaire/employees_list.json')
    }
  },
  computed: {
    get_employees () {
      console.log(this.$route.params.id_agence)
      let list = this.list_employees.filter(employee => employee.PS1AGE === this.$route.params.id_agence)
      console.log(list)
      return list
    }
  },
  methods: {
    oddNumbers (index) {
      return index % 2 === 0
    }
  }
}
</script>

<style scoped>
.background{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
}
.content{
  width: 80%;
  height: 80%;
  background: white;
  margin: 5% auto;
  border-radius: 10px;
  border-left: solid 15px #e3001a;
  position: relative
}
.close_icon{
  position: absolute;
  top: 5px;
  right: 5px;
  color: #e3001a;
}
.light_grey_bg{
  background-color: #b9b9b9;
}
</style>
