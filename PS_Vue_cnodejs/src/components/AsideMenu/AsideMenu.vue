<template lang="html">
<transition name="slide-left">
    <div v-show="isShowAsideMenu" class="aside-menu">
      <div class="menu">

        <div class="user">
          <div class="user-avatar">
            <img @click="showLogin"  alt="" class="avaterImg">
            <!-- <img @click="showLogin" :src="userInfo.avatar_url || 'https://icdn.microzz.com/20170417_vue_cnode/icon-unlogin.svg'" alt=""> -->
              <!-- <i class="iconfont  icon-avaterteacher" @click="showMsg" v-show="ak"></i> -->
          </div>
          <div class="username">
            {{userInfo.success ? userInfo.loginname : '点击头像登录'}}
          </div>
        </div>

        <div class="infos blocks">

          <div @click="showMsg" class="item">
            <!-- <img src="./../../../common/images/post.png"> -->
            <i class="iconfont icon-shangchuanziliao"></i>我的消息
          </div>

          <div @click="showNewArticle" class="item">
            <i class="iconfont icon-shenfenrenzheng"></i>发布话题
          </div>

          <div @click="showInfo" class="item">
            <i class="iconfont icon-gengduoxinxi"></i>个人中心
          </div>

          <div @click="showAbout" class="item">
            <i class="iconfont icon-gongjijinrenzheng1"></i>关于
          </div>

          <div class="cnode">
            <img src="./../../../common/images/logo.png">
          </div>

        </div>

      </div>

      <div @click.stop.prevent="showAsideMenu" class="mask"></div>

    </div>
  </transition>

</template>

<script>
export default {
  name: 'asideMenu',
  computed: {
    ak() {
      return this.$store.state.ak;
    },
    isShowAsideMenu() {
      return this.$store.state.isShowAsideMenu;
    },
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    showAsideMenu() {
      this.$store.commit('showAsideMenu', false);
    },
    showLogin() {
      this.$store.commit('showLogin', true);
      this.$store.commit('showAsideMenu', false);
    },
    showInfo() {
      this.$store.commit('showInfo', true);
      this.$store.commit('showAsideMenu', false);
      // this.$router.push('/')
    },
    showMsg() {
      this.$store.commit('showMsg', true);
      this.$store.commit('showAsideMenu', false);
      // this.$router.push('/')
    },
    showNewArticle() {
      this.$store.commit('showNewArticle', true);
      this.$store.commit('showAsideMenu', false);
    },
    showAbout() {
      this.$store.commit('showAbout', true);
      this.$store.commit('showAsideMenu', false);
    }
  }
}
</script>

<style lang="scss" scoped>
  .aside-menu {
    position: absolute;
    display: flex;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    .menu {
      display: flex;
      flex-direction: column;
      width: 220px;
      background-color: white;
      box-shadow: 0 0 12px gray;
      .user {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        // width: 100%;
        // height: 200px;
        background-color: #2196F3;
        color: white;
        .avaterImg {
            width: 110px;
            height: 110px;
            border-radius: 55px;
            // cursor: pointer;
            margin-top: 20px;
            background-color: green;
          }
        .username {
          margin-top: 20px;
          font-size: 1.2rem;
        }
      }
      .infos {
        display: flex;
        flex-direction: column;
        // align-items: center;
        margin: 20px;
        flex: 1;
        .block {
          width: 100%;
          height: 50px;
          display: flex;
          padding-left: 30px;
          align-items: center;
          cursor: pointer;
        }

        .item {
            margin: 10px;
            padding: 5px;
            border-bottom: 0.5px solid lightgray;
          }

        .block + .block {
          border-top: 1px solid rgba(0, 0, 0, .05);
        }
        i {
          display: inline-block;
          width: 22px;
          height: 22px;
          background-repeat: no-repeat;
          margin-right: 8px;
        }
        .cnode {
          // margin-top: 150px;
          // flex: 1;
          width: 80px;
          height: 30px;
          background-size: cover;
          // opacity: .1;
          img {
            width: 150px;
            height: 50px;
            justify-content: center;
            // align-items: center;
            margin-top: 30px;
          }
        }
      }
    }

    .mask {
      flex: 1;
    }
  }
</style>
