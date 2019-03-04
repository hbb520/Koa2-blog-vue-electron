<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Titlebtn from '@/views/components/Titlebtn.vue';

  export default {
    name: 'App',
    components: {Titlebtn},
    created(){
    }
  }
</script>

<style>
  #app {
    width: 100%;

  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {

    background-color: transparent;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
    background-color: #AAA;
  }

  .Card {
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    box-sizing: border-box;
  }
</style>
