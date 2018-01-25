import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ArticleList from '../components/Content/ArticleList.vue'
import Article from '../components/Content/Article.vue'
import User from '../components/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { // 列表页
      path: '/',
      name: 'articleList',
      component: ArticleList
    },
    { // 详情页
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {  // 用户页
      path: '/user/:name?',
      name: 'user',
      component: User
    }
  ]
})
