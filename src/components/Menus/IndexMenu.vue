<template>
  <div id="menu">
    <ul class="flex">
      <li v-for="element in liens" v-bind:key="element.id" :id="element.id" class="flex flex1">
        <div class="buttonMenu">
          <a class="link w-100" :href="element.link">
            <span class="flex1">
              {{element.text}}
            </span>
            <span class="flex1">
              <font-awesome-icon v-bind:icon="element.icon" size="2x" />
            </span>
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
          text: 'plateformes utilisées',
          icon: 'folder'
        },
        {
          id: 'FAQ',
          link: '#',
          text: 'FAQ',
          icon: 'book'
        },
        {
          id: 'incidents',
          link: '#',
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
</style>
