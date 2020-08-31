<!--标签管理 组件-->
<template>
    <div style="width:100%;">
		<p style=" color:#337ab7; padding-top:15px;">
			标签整理<span style="color:#aaa; padding-left:5px;">Labels</span>
		</p>
		<div style="width:100%; height:150px;">
			
			<ul id="LabelClassify">
				<li style="background-color:#3399CC;">CSS3(4)</li>
				<li style="background-color:#337ab7;">HTML5(4)</li>
				<li style="background-color:#339933;">Linux(15)</li>
				<li style="background-color:#FF6347;">Mysql(10)</li>
				<li style="background-color:#66CC99;">jQuery(10)</li>
				<li style="background-color:#FF9966;">Tomcat(2)</li>
				<li style="background-color:#3399CC;">生活(20)</li>
				<li style="background-color:#FF6347;">感想(12)</li>
				<li style="background-color:#339933;">VUE</li>
				<li style="background-color:#FF7F50;">java(40)</li>
				<li style="background-color:#337ab7;">radis(4)</li>
				<li style="background-color:#FF6347;">Spring(5)</li>
				<li style="background-color:#339933;">支付(5)</li>
				<li style="background-color:#337ab7;">webpack(4)</li>
				<li style="background-color:#339933;">nodeJS(4)</li>
				<li style="background-color:#FF9966;">windows(15)</li>
				<li style="background-color:#FF6347;">装机(10)</li>
				<li style="background-color:#00BFFF;">照片(10)</li>
				<li style="background-color:#3399CC;">茶(2)</li>
				<li style="background-color:#337ab7;">公众号(20)</li>
			</ul>
		</div>
		<hr/>
		
		<!--标签文章列表-->
		<div style="margin-top:20px;">
			<section>
				<span style="color:#FF4500; font-size:18px;" class="icon-tag-fill iconfont circle_icon"></span>
				<span style="font-size:18px;">生活随记</span>
				
				<article class="article">
					<span class="article_icon"></span>
					<span>
						<span class="article_title">致那些从未停止努力的人,他们一直都知道该怎么做</span>
						
						<time style="font-size:12px; display:inline-block; float:right;">
							<span class="icon-time-circle iconfont "></span>
							<span >2020-3-14 12:32:45</span>
						</time>
						
					</span>
				</article>
				
				<article class="article">
					<span class="article_icon"></span>
					<span>
						<span class="article_title">愿你出走半生，归来任是少年</span>
						<time style="font-size:12px; display:inline-block; float:right;">
							<span class="icon-time-circle iconfont "></span>
							<span >2020-3-14 12:32:45</span>
						</time>
					</span>
				</article>
				
				<article class="article">
					<span class="article_icon"></span>
					<span>
						<span class="article_title">秋天的温柔</span>
						<time style="font-size:12px; display:inline-block; float:right;">
							<span class="icon-time-circle iconfont "></span>
							<span>2020-3-14 12:32:45</span>
						</time>
					</span>
				</article>
				
				<article class="article">
					<span class="article_icon"></span>
					<span>
						<span class="article_title">看遍万千风景，唯有故乡才是熟睡的温床</span>
						
						<time style="font-size:12px; display:inline-block; float:right;">
							<span class="icon-time-circle iconfont "></span>
							<span >2020-3-14 12:32:45</span>
						</time>
					</span>
				</article>
				
			</section>
			
		</div>
	</div>
</template>


<script>
export default {
    name:"labels",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
body {
		font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
	}
	#label_box a {
		display:inline-block;
		text-decoration:none;
		border-bottom:1px solid #aaa;
		padding:5px;
		margin:10px;
		font-size:16px;
		font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
		text-align:center;
		line-height:16px;
		transition:all 0.2s ;
		color:#333;
	}
	
	#label_box a:hover {
		color:#337ab7;
		border-bottom-color:#337ab7;
		transform:scale(1.2,1.2) ;
		cursor:pointer;
	}
	.article_icon {
		display:inline-block;
		height:7px;
		width:7px;
		background-color:#ccc;
		border-radius:50%;
		margin-right:10px;
	}
	
	.article {
		line-height:50px; padding-top:15px; border-bottom:1px dashed #ccc;
	}
	
	.article:hover{
		border-bottom:1px dashed #00BFFF;
	}
	
	.article_title:hover {
		cursor:pointer;
		color:#FF7F50; 
	}
	
	.showing {
		font-size:12px; display:inline-block; float:right;
	}
	
	.showing span {
		font-size:12px; padding-right:15px;
	}
	
	/*所有标签*/
	#LabelClassify {
		list-style:none ; 
		margin:0 ;
		padding:0 ; 
	}
	
	#LabelClassify li {
		float:left;
		padding:0px 10px;
		line-height:25px;
		border-radius:5px;
		margin:10px 15px 0px 0px;
		font-size:12px;
		color:white;
		transition:all 0.5s ; 
	}
	
	#LabelClassify li:hover {
		cursor:pointer ;
		border-radius:0px;
		text-shadow:1px 1px 1px black;
	}
	
	.icon-time-circle {
		font-size:12px;
	}
	
</style>