import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/helloworld'

//blog
import {blog} from "@/router/blog"

Vue.use(Router)
let routers = [
  {
    path:"/",
    component:helloworld
  },
];

//进行路由整合
routers = routers.concat(blog) ; 
export default new Router({
  routes: routers
})
