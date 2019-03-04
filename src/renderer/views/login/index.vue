<template>
  <div id="login">
    <div class="SignFlowHomepage-content">
      <div class="Card SignContainer-content">
        <div class="SignFlowHeader-slogen">登录community，发现更大的世界</div>
        <div class="Login-content">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="账号" size="large">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="密码" size="large"
                     @on-enter="handleSubmit('formInline')">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button size="large" type="primary" @click="handleSubmit('formInline')" style="width: 100%">
                登录
              </Button>
            </FormItem>
          </Form>

        </div>
        <div class="SignContainer-switch">没有帐号？<span @click="goLink('/sginup')">注册</span></div>

      </div>
    </div>

  </div>
</template>

<script>
  import index from  './login'
  export default index
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "./index.scss";
</style>
