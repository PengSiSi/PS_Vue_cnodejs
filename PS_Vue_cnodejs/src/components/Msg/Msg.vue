<template lang="html">
<div class="msg">
  <div class="msg-header">
    <!-- <i @click="showLogin" clas=s"icon-back"></i>登录 -->
    <i class="iconfont icon-back" @click="hideMsg"></i>
    <span class="new-title">消息中心</span>
  </div>
  <div class="msg-content">
    <div class="msg-read">
      <div :class="{selected: isOnRead}" @click.stop.prevent="changeTab(true)" class="has-no">
        未读消息：{{ msg.hasnot_read_messages.length }}
      </div>
      <div :class="{selected: !isOnRead}" @click.stop.prevent="changeTab(false)" class="has">
        已读消息: {{ msg.has_read_messages.length }}
      </div>
    </div>
    <div class="msg-list">
       <!-- <transition-group name="show"> -->
        <!-- <div v-for="(item, index) of (isOnRead ? msg.hasnot_read_messages : msg.has_read_messages)" :key="item.id+index" class="msg-item">
            <div class="msg-body">
              <div class="msg-name">
                <span @click="view">
                  <router-link  :to="{name: 'user', params: {name: item.author.loginname}}"">{{ item.author.loginname }}</router-link>
                </span> 的回复：

              </div>
              <div v-html="item.reply.content" class="msg-msg">

              </div>
              <div @click="view">


                  <div class="msg-from">
                    <router-link  :to="{name: 'article', params: {id: item.topic.id}}"">
                      来自：{{ item.topic.title }}
                    </router-link>

                  </div>

              </div>
            </div>
        </div> -->
        <div class="msg-list">
            列表页
        </div>
      <!-- </transition-group> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'msg',
  data() {
    return {
      msg: {
        hasnot_read_messages: [],
        has_read_messages: []
      },
      isOnRead: true
    }
  },
  computed: {
    ak() {
      return this.$store.state.ak;
    }
  },
  methods: {
    hideMsg() {
      this.$store.commit('showMsg', false);
    },
    changeTab(flag) {
      this.isOnRead = flag;
    },
  }
}
</script>

<style scoped>
  .msg {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  .msg-header {
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
  span {
    text-align: center;
    width: 100%;
    align-self: center;
  }
  .msg-content {
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 40px; */
    flex-direction: column;
  }
  .msg-read {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: #2196f3;
    color: rgba(255, 255, 255, .5);
    font-size: 1.2rem;
  }
  .has-no {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    cursor: pointer;
  }
  .has {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .selected {
    border-bottom: 2px solid #ff4081;
    color: white;
  }
  .msg-list {
    flex: 1;
    width: 100%;
  }

</style>
