<template lang="html">
  <transition name="showAbout">
    <div class="about">
      <i class="iconfont icon-close2" @click="showAbout"></i>
      <div class="about-content">
        <h2>关于</h2>
        <h3>思思的第一个Vue.js动手项目哟！</h3>
        <span>GitHub地址：<a href="https://github.com/PengSiSi" target="_blank">https://github.com/PengSiSi</a></span><br/><br/>
        <span>博客园：<a href="http://www.cnblogs.com/pengsi/" target="_blank">http://www.cnblogs.com/pengsi/</a></span><br/><br/>
        <span>关注思思公众号：思思小窝</span>
        <div class="qcode">
          <img src="./../../../common/images/qcode.png" alt="思思小窝">
      </div>
      </div>
      <!-- 遮罩点击隐藏 -->
      <div @click="showAbout" class="mask"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {

    }
  },
  computed: {
    isShowAbout() {
      return this.$store.state.isShowAbout;
    }
  },
  methods: {
    showAbout() {
      this.$store.commit('showAbout', false);
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    display: flex;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon-close2 {
      position: absolute;
      z-index: 3;
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: contain;
      top: 11%;
      right: 12%;
    }
    @media screen and (min-width: 760px) {
      .close {
        right: 26%;
      }
    }
    .about-content {
      position: relative;
      z-index: 2;
      width: 80%;
      height: 80%;
      background-color: white;
      border-radius: 10px;
      padding: 30px 10px;
      box-shadow: 0 0 20px gray;
      overflow: auto;
      h2,h3 {
        text-align: center;
      }
      span {
        margin: 10px;
      }
    }
    .mask {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: none;
    }
  }
</style>
