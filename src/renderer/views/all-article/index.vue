<template>
  <div id="all-article-container">
    <div class="article-left ">
      <div class="Tabs-box Card" v-if="$route.path == '/all-article'">
        <Tabs :animated="false" @on-click="tabClick">
          <TabPane label="所有" name="所有"></TabPane>
          <TabPane label="推荐" name="推荐"></TabPane>
          <TabPane :label="item.tagText" v-for="item in TagList" :key="item.tagText" :name="item.tagText"></TabPane>
        </Tabs>
      </div>

      <div class="page-top-box Card">
        <Page :total="total" :current="currentPage" :page-size="20" simple
              @on-change="handleCurrentChange"/>
      </div>
      <ul class="">
        <li v-for="item in list" class="Card" @click="goLink('/detail',item.id)">
          <h2 class="ContentItem-title">
            {{item.title}}
          </h2>
          <div class="Content">
            <div class="desc">
              {{item.content}}
            </div>
            <ul class="clearfix Content-imgListUl" v-if="item.imgList">
              <li v-for="(imgList,index) in item.imgList" v-html="imgList" v-if='index<=2'>
                <!--<img :src="imgR+imgList" alt="">-->
              </li>
            </ul>
          </div>
          <div class="time">
            {{item.moment}}
          </div>
          <div class="post-right">
            <div class="ellipsis">
              <i class="icon iconfont icon-yonghu"></i>{{item.name}}
            </div>
            <div class="ellipsis">
              <i class="icon iconfont icon-mudedi-liulanliang"></i>{{item.pv}}
            </div>
            <div class="ellipsis">
              <i class="icon iconfont icon-pinglun-copy"></i>{{item.comments }}
            </div>
          </div>
        </li>
      </ul>
      <div class="page-box Card">
        <Page :total="total" show-elevator :current="currentPage" :page-size="20" show-total
              @on-change="handleCurrentChange"/>
      </div>
    </div>
    <div class="article-right">
      <article-right></article-right>
    </div>
  </div>
</template>

<script>
  import index from  './index.js'
  export default index
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "index";
</style>
