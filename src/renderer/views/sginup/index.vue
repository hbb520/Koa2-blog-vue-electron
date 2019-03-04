<template>
  <div id="login">
    <div class="SignFlowHomepage-content">
      <div class="Card SignContainer-content">
        <div class="SignFlowHeader-slogen">注册</div>
        <div class="Login-content">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请填写用户名" size="large">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请填写密码" size="large"
                     @on-enter="handleSubmit('formInline')">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="repeatpass">
              <Input type="password" v-model="formInline.repeatpass" placeholder="请确认密码" size="large"
              >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <!--<FormItem label="图像" prop="avator">-->
              <!--<div class="demo-upload-list" v-for="item in uploadList">-->
                <!--<template v-if="item.status === 'finished'">-->
                  <!--<img :src="imgR+item.url">-->
                  <!--<div class="demo-upload-list-cover">-->
                    <!--<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>-->
                  <!--</div>-->
                <!--</template>-->
                <!--<template v-else>-->
                  <!--<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>-->
                <!--</template>-->
              <!--</div>-->
              <!--<Upload-->
                <!--ref="upload"-->
                <!--:show-upload-list="false"-->
                <!--:default-file-list="defaultList"-->
                <!--:on-success="handleSuccess"-->
                <!--:format="['jpg','jpeg','png']"-->
                <!--:max-size="2048"-->
                <!--:on-format-error="handleFormatError"-->
                <!--:on-exceeded-size="handleMaxSize"-->
                <!--:before-upload="handleBeforeUpload"-->
                <!--type="drag"-->
                <!--:action="BASE_API+'/upload'"-->
                <!--style="display: inline-block;width:58px;">-->
                <!--<div style="width: 58px;height:58px;line-height: 58px;">-->
                  <!--<Icon type="ios-camera" size="20"></Icon>-->
                <!--</div>-->
              <!--</Upload>-->
            <!--</FormItem>-->

            <FormItem>
              <Button size="large" type="primary" @click="handleSubmit('formInline')" style="width: 100%">注册</Button>
            </FormItem>


          </Form>

        </div>
        <div class="SignContainer-switch">已有帐号？<span @click="goLink('/login')">登录</span></div>

      </div>
    </div>

  </div>
</template>

<script>
  import index from  './sginup'
  export default index
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../login/index.scss";
</style>
