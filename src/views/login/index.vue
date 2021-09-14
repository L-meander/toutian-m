<template>
  <div class="login-contanier">
  <!--导航栏-->
    <van-nav-bar
            title="注册 / 登录"
            left-arrow
            @click-left=" $router.back()"
    />

  <!--输入框-->
    <van-cell-group>
      <van-field
              v-model="user.mobilePhone"
              left-icon="smile-o"
              right-icon="warning-o"
              placeholder="请输入手机号码"
      />
      <van-field
              v-model="user.code"
              clearable
              left-icon="music-o"
              placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="small" >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <van-button type="info" block>登录</van-button>
  </div>
</template>

<script>
  export default {
    name: 'loginIndex',
    data () {
      return {
        user: {
          mobilePhone: '',
          code: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
