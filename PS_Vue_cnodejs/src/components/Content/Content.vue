<template lang="html">
<div id="content">
 <div class="tab">
   <div @click="changeTab('all')" :class="{isBorder: tab==='all'}" class="all type"><router-link to="/">首页</router-link></div>
      <div @click="changeTab('good')" :class="{isBorder: tab==='good'}" class="good type"><router-link to="/">精华</router-link></div>
      <div @click="changeTab('share')" :class="{isBorder: tab==='share'}" class="share type"><router-link to="/">分享</router-link></div>
      <div @click="changeTab('ask')" :class="{isBorder: tab==='ask'}" class="ask type"><router-link to="/">问答</router-link></div>
      <div @click="changeTab('job')" :class="{isBorder: tab==='job'}" class="job type"><router-link to="/">招聘</router-link></div>
   </div>
   <div ref="article" @scroll="scroll($event)" class="article">
     <div class="loading">
       <i v-show="isLoading" class="iconfont icon-icon-loading"></i>
     </div>
     <router-view></router-view>
   </div>
   <transition name="slide-fade">
      <div v-show="isShowTop" class="top">
        <i @click.stop.prevent="toTop" class="iconfont icon-top"></i>
      </div>
    </transition>
 </div>
</template>

<script>
export default {
  name: 'mContent',
  data() {
    return {
      isShowTop: true,
      // isLoading: true
    }
  },
  computed: {
    tab() {
      return this.$store.state.tab;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  methods: {
    changeTab(type) {
      this.$store.commit('changeTab', {type: type, articleList: [], isLoading: true})
    },
    // 滚动到最上面
    toTop() {
      console.log('滑到最上面');
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .tab {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .type {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .isBorder {
    border-bottom: 2px solid #ff4081;
    font-weight: bold;
    font-size: 120%;
  }
  .article {
    flex: 1;
    position: relative;
    width: 100%;
    overflow: auto;
    transition: 1s linear;
  }
  .loading {
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .icon-icon-loading {
    display: inline-block;
    position: absolute;
    text-align: center;
    width: 40px;
    height: 40px;
    animation: loading .4s linear infinite;
    background-size: contain;
  }
  .top {
    position: fixed;
    z-index: 1;
    bottom: 10px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
  .icon-top {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: contain;
  }
</style>
