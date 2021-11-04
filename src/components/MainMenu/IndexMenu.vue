<template>
  <div id="menu">
    <ul class="flex">
      <li v-for="element in liens" v-bind:key="element.id" class="flex flex1">
        <div class="buttonMenu">
          <a :href="element.link">
            {{element.text}}
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexMenu',
  data () {
    return {
      liens: [
        {
          id: 'platforms',
          link: '#',
          text: 'plateformes utilisées'
        },
        {
          id: 'FAQ',
          link: '#',
          text: 'FAQ'
        },
        {
          id: 'incidents',
          link: '#',
          text: 'Incidents'
        }
      ]
    }
  }
}
</script>

<style scoped>
  ul li{
    list-style: none;
    margin-right: 15px;
    justify-content: center;
  }
  #menu{
    width: 100%;
  }
  .flex{
    display: flex;
  }
  .flex1{
    flex: 1;
  }
  .buttonMenu{
    height: 200px;
    width: 350px;
    background-color: darkred;
    color: white;
    border-bottom: 10px solid grey;
  }
</style>
