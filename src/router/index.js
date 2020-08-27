import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/blog/top'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:"/top",
        component:top
    }
  ]
})
