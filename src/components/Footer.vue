<template>
  <footer>
    <div id="infos_supplémentaires">
      <span @click="mailToIT" class="link">contacter le support IT</span>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    mailToIT () {
      window.location.href = 'mailto:interim.supportIT@derichebourg.com'
    }
  }
}
</script>

<style scoped>
  footer{
    border-top: solid 1px darkgrey;
    border-bottom: 10px solid #e3001a;
    background-color: #f3f3f3;
    width: 100%;
    box-sizing: border-box;
  }
  #infos_supplémentaires{
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  .signature{
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: flex-end;
    margin-bottom: 10px;
  }
  .link{
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    transition-duration: 0.5s;
  }
  .link:hover{
    transform: scale(1.25);
    background-color: rgba(227, 0, 26, 0.95);
    color: #fff;
    font-weight: bold;
  }
  .link:visited{
    text-decoration: underline;
  }
</style>
