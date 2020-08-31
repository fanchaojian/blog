import myheader from '@/components/blog/myheader'
import top from '@/components/blog/top'
import closeNew from '@/components/blog/closeNew'  //最近更新
import latestArticles from '@/components/blog/latestArticles'  //最新文章
import labelClassify from '@/components/blog/labelClassify'  //标签分类  快速标签
import articleItem from '@/components/blog/articleItem'  //博客文章列表展示
import essay from '@/components/blog/essay'  //心情随笔
import archive from '@/components/blog/archive' //文章归档
import labels from '@/components/blog/labels'  //标签夹
import guestbook from '@/components/blog/guestbook' //留言板
import pageing from '@/components/blog/pageing'  //分页组件
import expression from '@/components/blog/expression'  //表情 组件


//导出路由数组
export let blog = [
  {
    path:'top',  
    name:'top',
    component:top,
  },{
    path:'myheader',
    name:'myheader',
    component:myheader
  },{
    path:'closeNew',
    name:'closeNew',
    component:closeNew
  },{
    path:'latestArticles',
    name:'latestArticles',
    component:latestArticles
  },{
    path:'labelClassify',
    name:'labelClassify',
    component:labelClassify
  },{
    path:'articleItem',
    name:'articleItem',
    component:articleItem
  },{
    path:'essay',
    name:'essay',
    component:essay
  },{
    path:'archive',
    name:'archive',
    component:archive
  },{
    path:'labels',
    name:'labels',
    component:labels
  },{
    path:'guestbook',
    name:'guestbook',
    component:guestbook
  },{
    path:'pageing',
    name:'pageing',
    component:pageing
  },{
    path:'expression',
    name:'expression',
    component:expression
  }
  

]
