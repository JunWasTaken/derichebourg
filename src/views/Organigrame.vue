<template>
  <div>
    <organization-chart :datasource="get_organisation_chart" :zoom="false">
      <template slot-scope="{ nodeData }">
        <div class="divisionBlock">
          <div>
            {{nodeData.identite}}
          </div>
        </div>
      </template>
    </organization-chart>
  </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'

export default {
  name: 'Organigrame',
  components: {
    OrganizationChart
  },
  data () {
    return {
      head_list: require('../assets/json_files/annuaire/head_list.json')
    }
  },
  computed: {
    get_organisation_chart () {
      var data = {}

      data.push({'id': this.head_list[0].nom, 'identite': `${this.head_list[0].nom} ${this.head_list[0].prenom}`})

      return data
    }
  }
}
</script>

<style scoped>

</style>
