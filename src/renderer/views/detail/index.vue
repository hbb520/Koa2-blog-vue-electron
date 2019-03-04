<template>
  <div id="detail-container">
    <div class="article-left">
      <div class="page-top-box Card">
        <div class="avatar">
          <img :src="imgR+DetailData.avator" alt="">
        </div>
        <div>
          <strong> {{DetailData.name}}</strong>
        </div>
        <div>
          {{DetailData.moment}}发布  查看 {{ DetailData.pv}} 回复 {{ DetailData.comments}}
          <Tag color="purple" style="margin-left: 10px">{{DetailData.tag}}</Tag>
          <span class="page-top-box-edilbtn" @click="deleteArticle(DetailData.id)"
                v-if="DetailData.name == username && loading"
          >删除</span>
          <span class="page-top-box-edilbtn" @click="goLink(DetailData.id)"
                v-if="DetailData.name == username && loading"
          >编辑</span>

          <span class="page-top-box-edilbtn" @click="recommend(DetailData.id)"
                v-if=" username == '彬彬' && loading && DetailData.is_recommend == 0"
          >推荐</span>
          <span class="page-top-box-edilbtn" @click="cancelRecommend(DetailData.id)"
                v-if=" username == '彬彬' && loading && DetailData.is_recommend == 1"
          >取消推荐</span>
        </div>


      </div>
      <div class="DetailData-box Card">

        <h2 class="title">{{DetailData.title}}</h2>
        <div v-html="DetailData.content" class="DetailData-content">

        </div>
      </div>
      <div class="comment-box  Card" style="margin-top: 10px;margin-bottom: 10px">
        <ul class="">
          <li class=" comment-box-li" style="padding: 10px 20px">
            <h4 style="color: #000">全部评论</h4>
          </li>
          <li v-for="item in list" class=" comment-box-li">
            <div class="avatar">
              <img :src="imgR+item.avator" alt="">
            </div>
            <Button size="small" @click="deleteComment(item.id)" class="delete" v-if="username==item.name">删除</Button>
            <div class="">
              <Tag color="green">{{item.name}}</Tag>
            </div>
            <div class="Content">
              <div class="desc" v-html="item.content">
              </div>
            </div>
            <div class="time">
              {{item.moment}}
            </div>
          </li>
        </ul>
        <div class="page-box ">
          <Page :total="total" show-elevator :current="currentPage" :page-size="10" show-total
                @on-change="handleCurrentChange"/>
        </div>
      </div>
      <div class="editor-box  Card" style="margin-top: 10px;margin-bottom: 100px">
        <div class="editor-box">
          <VueUEditor @ready="editorReady" style="width: 100%" :ueditorConfig="config"
          ></VueUEditor>
          <Upload
            multiple
            :show-upload-list="false"
            :on-error="onError"
            :on-success="uploadImageSuccess"
            :action="imgR+'/upload'">
            <Button size="small" type="primary" class="ivu-btn1">上传图片</Button>
          </Upload>
        </div>
        <div style="text-align: right;padding: 20px 10px 20px 10px;">
          <Button type="primary" @click="comment()">回复</Button>
        </div>
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
