<template>
  <div id="menu">
    <ul class="block">
      <li v-for="element in liens" v-bind:key="element.id" :id="element.id" class="flex flex1 margin-5vh">
        <div class="buttonMenu">
          <router-link class="link w-100" v-bind:to="element.link">
            <span class="flex1">
              {{element.text}}
            </span>
            <span class="flex1">
              <font-awesome-icon v-bind:icon="element.icon" size="2x" />
            </span>
          </router-link>
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
          link: '/platforms',
          text: 'plateformes utilisées',
          icon: 'folder'
        },
        {
          id: 'FAQ',
          link: '/FAQ',
          text: 'FAQ',
          icon: 'book'
        },
        {
          id: 'incidents',
          link: '/incidents',
          text: 'Incidents',
          icon: 'laptop-medical'
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
  .block{
    display: block;
  }
  .flex{
    display: flex;
  }
  .flex1{
    flex: 1;
  }
  .buttonMenu{
    height: 100px;
    width: 350px;
    background-color: #e3001a;
    color: white;
    border-bottom: 10px solid grey;
    transition-duration: 0.25s;
    display: flex;
  }
  .buttonMenu:hover{
    transform: scale(1.25);
  }
  .link{
    text-decoration: none;
    color: white;
    font-weight: bolder;
    font-size: x-large;
    display: flex;
    align-items: center;
  }
  .w-100{
    width: 100%;
  }
  .margin-5vh{
    margin-top: 5vh;
  }
</style>
