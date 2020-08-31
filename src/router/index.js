import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

//blog
import {blog} from "@/router/blog"

Vue.use(Router)
let routers = [
  {
    path:"/",
    component:home,
    children:blog,
    redirect:'/articleItem'
  },
];

//进行路由整合
export default new Router({
  routes: routers,
  mode:'history',
  
})
