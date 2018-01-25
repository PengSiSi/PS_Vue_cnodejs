<template lang="html">
<div class="articleList">
  <div v-for="(item, index) in list" class="list" @click="pushDetail(item)">
    <!-- <span class="item" @click="pushDetail(item)">{{ item.name }}</span> -->
    <router-link :to="{name: 'article', params: {id: item.id}}">{{item.name}}</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'articleList',
  data() {
    return {
      list: [
        {
          id: '1',
          name: '新闻一'
        },
        {
          id: '2',
          name: '新闻2'
        },
        {
          id: '3',
          name: '新闻3'
        },
        {
          id: '4',
          name: '新闻4'
        },
        {
          id: '5',
          name: '新闻5'
        },
        {
          id: '6',
          name: '新闻6'
        },
      ]
    }
  },
  computed: {

  },
  methods: {
    pushDetail(item) {
      // console.log('点击了');
      this.$router.push('/article/11');
    }
  },
  created() {
    this.$store.commit('changeTab', {isLoading: true})
      setTimeout(this.$store.commit('changeTab', {isLoading: false}), 1000);
  }
}
</script>

<style scoped>
  .articleList {
    margin-top: 20px;
  }
  .list {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }
  .item {
    width: 100%;
    height: 44px;
    border-bottom: 0.5px solid lightgrey;
  }
</style>
