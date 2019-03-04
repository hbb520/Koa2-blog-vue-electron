<template>
  <div id="change-password-container">
    <div class="article-left ">
      <div class="Card">
        <Form :model="formItem" :label-width="100">

          <FormItem label="原始密码">
            <Input v-model="formItem.oldPassword" placeholder="请填写" type="password"
            ></Input>
          </FormItem>
          <FormItem label="新密码">
            <Input v-model="formItem.newPassword" placeholder="请填写" type="password"
            ></Input>
          </FormItem>
          <FormItem label="确认密码">
            <Input v-model="formItem.repeatpass" placeholder="请填写" type="password"
            ></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="put_updateUserPs()">保存</Button>
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
