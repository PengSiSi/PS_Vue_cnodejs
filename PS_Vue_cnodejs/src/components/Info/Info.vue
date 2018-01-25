<template lang="html">
<div class="info">
  <div class="info-header">
    <!-- <i @click="showLogin" clas=s"icon-back"></i>登录 -->
    <i class="iconfont icon-back" @click="showInfo"></i>
    <span class="new-title">个人中心</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'info',
  data() {
    return {

    }
  },
  computed: {
    ak() {
      return this.$store.state.ak;
    }
  },
  methods: {
    showInfo() {
      this.$store.commit('showInfo', false);
    }
  }
}
</script>

<style scoped>
   .info {
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .info-header {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    height: 50px;
    color: white;
    font-size: 1.4rem;
    background-color: #2196f3;
  }
  .icon-back {
    margin-left: 20px;
  }
</style>
