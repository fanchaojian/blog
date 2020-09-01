<!--博客系统主页-->
<template>
    <div style="width:100%; height:100%;">
       <div style="position:fixed; top:0; left:0 ; z-index:2000; width:100%; "><blog_header /></div>
       <div style="margin-top:32px;"><blog_top /></div>
       <div style="width:100%; float:left; padding-bottom:50px; ">
            <div style="width:1100px; margin:0 auto;">
                    <!--左边-->
                    <div style="width:70%; height:100%;  float:left; padding-right:15px;">
                        <router-view />
                    </div>
                    <!--右边-->
                    <div style="width:30%; height:800px;  float:right; padding-left:15px;"> 
                        <blog_closeNew />
                        <blog_latestArticles />
                    </div> 
            </div>
       </div>
       
       <blog_footer />
    </div>
</template>

<script>
//导入组件
import blog_articleItem from '@/components/blog/articleItem'  //博客文章列表展示
import blog_essay from '@/components/blog/essay'  //心情随笔
import blog_archive from '@/components/blog/archive' //文章归档
import blog_labels from '@/components/blog/labels'  //标签夹
import blog_guestbook from '@/components/blog/guestbook' //留言板
import blog_header from '@/components/blog/myheader'
import blog_top from '@/components/blog/top'
import blog_closeNew from '@/components/blog/closeNew'  //最近更新
import blog_latestArticles from '@/components/blog/latestArticles'  //最新文章
import blog_labelClassify from '@/components/blog/labelClassify'  //标签分类  快速标签
import blog_expression from '@/components/blog/expression'  //表情 组件
import blog_footer from '@/components/blog/myfooter'  //脚注

export default {
    name:"home",
    data() {
        return {
            
        }
    },
    components:{
        blog_header,
        blog_top,
        blog_closeNew,
        blog_latestArticles,
        blog_labelClassify,
        blog_articleItem,
        blog_essay,
        blog_archive,
        blog_labels,
        blog_guestbook,
        blog_expression,
        blog_footer
    }
}
</script>

<style scoped>
</style>