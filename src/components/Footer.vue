<template>
  <footer>
    <div id="infos_supplémentaires">
      <span @click="mailToIT" class="link">contacter le support IT</span>
    </div>
    <div class="signature">
      Site fait par Alexandra Denos
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    mailToIT () {
      window.location.href = 'mailto:supportIT@derichebourg.com'
    }
  }
}
</script>

<style scoped>
  footer{
    position: absolute;
    bottom: 0px;
    border-top: solid 1px darkgrey;
    border-bottom: 10px solid #e3001a;
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
    transition: 0.5s;
  }
  .link:hover{
    background-color: rgba(227, 0, 26, 0.75);
  }
  .link:visited{
    text-decoration: underline;
  }
</style>
