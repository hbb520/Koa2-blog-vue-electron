<template>
  <div id="people-container">
    <div class="article-left ">
      <div class="Card">
        <Form :model="formItem" :label-width="100">
          <FormItem label="账号">
            {{infoData.name}}
          </FormItem>
          <FormItem label="密码">
            <Button type="primary" @click="goLink('/change-password')">修改密码</Button>
          </FormItem>
          <FormItem label="昵称">
            <Input v-model="formItem.nickname" placeholder="请填写"></Input>
          </FormItem>
          <FormItem label="图像">
            <img v-lazy=" {
                src: imgR + src,
                error: 'static/imgs/default_avatar.jpg'
              }" :key="src" class="avatar">
            <div>
              <vue-core-image-upload
                :class="['ivu-btn', 'ivu-btn-primary']"
                crop="local"
                text="选择图片"
                crop-ratio="1:1"
                extensions="png,gif,jpeg,jpg"
                @imageuploaded="imageuploaded"
                @errorhandle="errorhandle"
                input-of-file="file"
                :max-file-size="5242880"
                url="http://47.99.113.195/api/upload">
              </vue-core-image-upload>
            </div>

          </FormItem>
          <FormItem label="现居城市">
            <Input v-model="formItem.lives_in_city" placeholder="请填写"></Input>
          </FormItem>
          <FormItem label="个人简介">
            <Input v-model="formItem.introduction" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="请填写"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="put_UserInfo()">保存</Button>
          </FormItem>
        </Form>
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
