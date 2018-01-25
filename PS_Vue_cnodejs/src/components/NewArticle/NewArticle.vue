<template lang="html">
<div class="newArticle">
  <div class="newArticle-header">
    <!-- <i @click="showLogin" clas=s"icon-back"></i>登录 -->
    <i class="iconfont icon-back" @click="showNewArticle"></i>
    <span class="new-title">新建话题</span>
  </div>
  <div class="content">
    <div class="typeContainer">
      <span>请选择主题类别：</span>
      <select v-model.trim="type" class="select">
        <option>分享</option>
        <option>问答</option>
        <option>招聘</option>
      </select>
    </div>
    <div class="title">
      <input v-model.trim="title" type="text" placeholder=" 请输入标题，不少于十个字符">
    </div>
    <div class="content">
      <textarea v-model="content" placeholder="请输入内容"></textarea>
    </div>
    <div class="send">
        <button @click="send">发布</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'newArticleser',
  data() {
    return {
      type: '分享',
      title: '',
      content: ''
    }
  },
  computed: {
     ak() {
      return this.$store.state.ak;
    }
  },
  methods: {
    showNewArticle() {
      this.$store.commit('showNewArticle', false)
    },
    send() {
      console.log('发送');
    }
  }
}
</script>

<style scoped>
  .newArticle {
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
  .newArticle-header {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    height: 64px;
    color: white;
    font-size: 1.4rem;
    background-color: #2196f3;
  }
  .icon-back {
    margin-left: 20px;
  }
  span {
    text-align: center;
    width: 100%;
    align-self: center;
  }
  .typeContainer {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    height: 60px;
    width: 100%;
  }
  .new-title {
    text-align: left;
  }
  select {
    /* margin-left: 6px; */
    padding-left: 8px;
    padding-bottom: 4px;
    font-size: 1.1rem;
    background-color: white;
    border-bottom: 1px solid #2196f3;
    border-radius: 0;
  }
  input {
    width: 80%;
    height: 44px;
    display: flex;
    flex: 1;
    font-size: 15px;
    margin-left: 10%;
    border: 0.5px solid lightgray
  }
  textarea {
    width: 80%;
    height: 100px;
    display: flex;
    flex: 1;
    margin-left: 10%;
    font-size: 15px;
    border: 0.5px solid lightgray;
    margin-top: 20px;
  }
  button {
    width: 100px;
    height: 44px;
    justify-content: center;
    background-color: #2196f3;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 100px;
  }
</style>
