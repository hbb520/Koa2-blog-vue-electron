<template>
  <div class="Icon-box">
    <Icon type="md-remove" class="titlebtn min" v-on:click="click('min')"/>
    <Icon type="md-qr-scanner" class="titlebtn max" v-on:click="click('max')"/>
    <Icon type="md-close" class="titlebtn close" v-on:click="click('close')"/>
  </div>

</template>

<script>
  const {ipcRenderer: ipc} = require('electron');

  export default {
    name: 'Titlebtn',
    computed: {},
    methods: {
      click(type) {
        ipc.send(type);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .Icon-box {
    display: inline-block;
    position: absolute;
    z-index: 3000;
    top: 0px;
    margin: auto 0;
    height: 52px;
    right: 10px;
    line-height: 52px;
    background-color: #FFFFFF;
  }

  .titlebtn {
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 5px;
  }

  .titlebtn:hover {
    color: #FFFFFF;
    background: #CCCCCC;
  }
</style>
