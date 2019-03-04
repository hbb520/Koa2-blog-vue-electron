<template>
  <div id="home-center-container">

    <div class="app-header clearfix ">
      <Titlebtn style=" -webkit-app-region: no-drag;"/>
      <div class="AppHeader-inner">
        <div class="app-header-left">
          <!--场景设计-->
          <!--<img :src="imgR + logo" alt="">-->
          <img src="static/imgs/logo.png" class="app-header-left-logo">
        </div>
        <div class="app-header-cengter">
          <div class="link-box">
            <router-link to="/all-article" active-class="linkhomeActiveClass">
              所有文章
            </router-link>
            <router-link to="/my-article" active-class="linkhomeActiveClass">
              我的文章
            </router-link>
          </div>
          <Input v-model="value" placeholder="可以搜索点什么" style="width: 300px"/>
          <Button type="primary" @click="search">搜索</Button>
        </div>
        <div class="app-header-right" v-if="loginIf">
             <span class="avatar-box">
              <img v-lazy=" {
                src: imgR+avator,
                error: 'static/imgs/default_avatar.jpg'
              }" :key="imgR+avator" id="header-avatar" @click="goLink('/people')">
            </span>
          <span class="user-name" @click="goLink('/people')">{{username}}</span>
          <span class=" user-name user-btn" @click="loginOut">注销</span>
        </div>
        <div class="app-header-right" v-if="!loginIf">
          <span class="user-name user-btn" @click="goLogin()">登录</span>
        </div>
      </div>
    </div>
    <router-view class="home-router-view"></router-view>

    <BackTop></BackTop>


  </div>
</template>

<script>
  import index from  './home.js'
  export default index
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "index";

  .top, .bottom {
    text-align: center;
  }

  .center {
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
  }

  .center-left {
    float: left;
  }

  .center-right {
    float: right;
  }
</style>
