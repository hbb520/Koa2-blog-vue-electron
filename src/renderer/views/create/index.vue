<template>
  <div id="create-container">
    <div class="article-left">
      <div class="Card ">
        <Input v-model="title" placeholder="请输入标题(最多50字)" style="width: 100%"/>
        <div class="Tag-box">
          <Button :type="item.color" size="small"
                  @click="tagClick(item,index)" v-for="(item,index) in TagList" :key="item.tagText" class="my-tag">{{item.tagText}}
          </Button>
        </div>
        <div class="editor-box">
          <VueUEditor @ready="editorReady" style="width: 100%" :ueditorConfig="config"
          ></VueUEditor>
          <Upload
            multiple
            :show-upload-list="false"
            :on-error="onError"
            :on-success="uploadImageSuccess"
            :action="BASE_API+'/upload'">
            <Button size="small" type="primary">上传图片</Button>
          </Upload>
        </div>
        <div class="sendMessage-box" style="margin-top: 20px">
          <Button type="primary" @click="create()" v-if="createPage">发布</Button>
          <Button type="primary" @click="edit()" v-else>确认修改并发布</Button>

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
