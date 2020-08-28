<!--最新文章快速操作 组件-->
<template>
    <div style="width:100%;">
        <div style="width:100%; padding-top:15px; padding-bottom:15px; ">
            <p style=" color:#337ab7; border-bottom:1px solid #ccc;">最新文章<span style="color:#aaa; padding-left:5px;">Latest Articles</span></p>
            <ul id="LatestArticle_item">
                <li>这个秋天不一样</li>
                <li>我们来谈一谈今年兴起的远程办公</li>
                <li>有没有哪个景色让你触动</li>
                <li>如果有一天我们的关系不像现在这样</li>
                <li>身边慢慢远离的景色</li>
                <li>如何部署项目到Tomcat</li>
                <li>让我回到那个时候，我会紧紧抱住你，说一句：“好久不见”</li>
                <li>总想起那个画面，忍不住流泪，成为了我一辈子的遗憾。</li>
                <li>如何部署项目到Tomcat</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"latestArticles",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
/*最新文章列表 -- 快捷栏*/
	#LatestArticle_item {
		font-size:12px;
		padding-left:15px;
	}
	
	#LatestArticle_item li {
		padding-top:10px;
		transition:all 0.5s;
	}
	
	#LatestArticle_item li:hover {
		cursor:pointer;
		text-decoration:underline ;
		transform:translateX(20px) ;
		 -moz-transform:translateX(20px) ;
	}
</style>