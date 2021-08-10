import VueRouter from 'vue-router'
import Vue from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import foo from './components/foo.vue'
import bar from './components/bar.vue'
import user from './components/user.vue'
import userProfile from './components/userProfile.vue'
import userPosts from './components/userPosts.vue'


Vue.use(VueRouter)

const routes = [
  // 动态路由传参
  { path: '/user/:name', component: user },
  { path: '/user', component: user },
  { path: '/user/foo/:num', component: foo },
  { path: '/user/bar', component: bar , alias: '/user/foo' },
  // 嵌套路由
  {
    path:'/user/foo',
    component: foo,
    children:[
      {
        path:'profile',
        component:userProfile
      },
      {
        path:'profile',
        component:userPosts
      }
    ]
  },
  // 路由兜底，如果所有的路径都未匹配，则展示兜底的界面
  { path: '*', component: foo }
]

const router = new VueRouter({
  routes
})

export default router