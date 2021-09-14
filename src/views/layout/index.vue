<template>
  <div class="layout-contanier">
    <!--子路由出口-->
    <router-view/>
    <!--底部导航栏-->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/vedio">视频</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'layoutIndex',
    data() {
      return {
        active: 0,

      }
    }
  }
</script>

<style scoped>

</style>
