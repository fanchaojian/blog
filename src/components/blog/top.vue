<template>
    <div id="top" >
		<div class="top_box">
			<!--通知消息显示区域,轮播消息-->
			<div style="width:500px; height:30px; position:absolute;">
				<span style="font-size:12px; color:#FF7F50;" class="iconfont icon-sound-fill"></span>
				
				<span style="line-height:30px; font-size:12px;">这是广播消息显示区域，最多显示40个字符。</span>
			</div>
			
			
			<!--博客名称地址显示区域-->
			<div style="left:123px; width:300px; top: 30%; position: absolute;">
				<div class="ftf4" style="font-size: 24px; font-weight:300;">
					<span>南国晚秋—BLOG</span>
				</div>
				<div style="padding-top:5px; font-size:12px;">
					<span class="ftf2" style="font-size: 12px;">http://www.fanchaojian.vicp.nanguowanqiu.com</span>
				</div>
			</div>
			<!--菜单显示位置-->
			<div class="menu_box" style="">
				<div style="padding-left:10px;">
					<div class="top_menu fw fc2" @click="showarea('focus_area')">关注</div>
					<div class="top_menu_split">|</div>
					<div class="top_menu fw fc2" @click="showarea('owner_area')">关于博主</div>
					<div class="top_menu_split">|</div>
					<div class="top_menu fw fc2" @click="showarea('about_site')">本站简介</div>
				</div>
			</div>
			
			<!-- 扩展资料显示区域显示框 -->
			<div style="width:30%; height:250px; padding-left:15px;  float:right; position:relative;">
			
				<!-- "关于博主"显示区域 -->
				<transition>
					<div v-show="owner_area" id="owner_area" class="myarea">
						<div id="" style="display:;">
							<div>
								<p class="title" style="">
									<img src="../../assets/imgs/introduce.png" width="12" height="12"/>
									<span>站长简介</span>
								</p>
								<p class="fs1">昵称：南国晚秋</p>
								<p class="fs1">职业：全栈开发工程师、Salesforce开发工程师</p>
								<p class="fs1">邮箱：1948556024@qq.com</p>
								<p class="fs1">籍贯：四川宜宾</p>
								<p class="fs1">爱好：写字，拍照，IT数码，科技，玩游戏。</p>
								<p class="fs1">格言：若成为一只小鸟，则无法知道雄鹰眼里的的天空。</p>
							</div>
							<div id="showmore" class="fc2" style="padding-top:0;">查看更多...</div>
						</div>
					</div>
				</transition>

				<!-- "本站简介"显示区域 -->
				<transition>
					<div v-show="about_site" id="about_site" class="myarea">
						<p class="title" style="">
							<img src="../../assets/imgs/introduce.png" width="12" height="12"/>
							<span>网站简介</span>
						</p>
						<p class="fs1">前端：CSS+HTML5+VUE</p>
						<p class="fs1">后端：java/Struts2+Hibernate+Spring/MySql</p>
						<div id="showmore" class="fc2" style="padding-top:0;">查看更多...</div>
					</div>
				</transition>
						
				<!-- "关注博主"显示区域 -->
				<transition>
					<div v-show="focus_area" id="focus_area" class="myarea" >
						<div id="" style="display: ; float:left;">
						<div id="focus_box">
							<div id="focus_title_box">
								<span class="title" style="line-height:30px; padding-left:10px;">关注我<span style="color:#bbb;">&nbsp;Focus Me</span></span>
							</div>
							
							<div id="focus_item_box">
								<div class="focus_list">
									<div class="focus_item"><img src="../../assets/imgs/qq.png"  /></div>
									<p class="fs1" style="padding-top:5px;">QQ</p>
								</div>
								<div class="focus_list">
									<div class="focus_item"><img src="../../assets/imgs/weibo.png" /></div>
									<p class="fs1" style="padding-top:5px;">微博</p>
								</div>
								<div class="focus_list">
									<div class="focus_item"><img src="../../assets/imgs/github.png"  /></div>
									<p class="fs1" style="padding-top:5px;">GitHub</p>
								</div>
								<div class="focus_list">
									<div class="focus_item"><img src="../../assets/imgs/weixin.png"/></div>
									<p class="fs1" style="padding-top:5px;">公众号</p>
								</div>
							</div>
							
							<div style="width:120px; height:120px; border:1px solid #ddd; margin-left:10px; box-shadow:0 0 10px 3px #ddd; padding:10px;">
								<img src="../../assets/imgs/qq_QR.png" title="QQ" width="100%" height="100%" style="vertical-align:bottom;" />
							</div>
						</div>
						</div>
					</div>
				</transition>
			</div>
			
		</div>
		
	</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      focus_area:true,  //关注博主
      owner_area:false, //关于博主
      about_site:false, //关于本站
    }
  },methods:{
    showarea(area){
      if(area == "focus_area"){
        this.focus_area = true ;
        this.owner_area = false ; 
        this.about_site = false ; 
      }else if(area == "owner_area"){
        this.owner_area = true ;
        this.focus_area = false ;
        this.about_site = false ;
      }else{
        this.about_site = true ;
        this.focus_area = false ;
        this.owner_area = false ;
      }
      
    },

  }
}
</script>

<style scoped>
  /* vue过场动画 */
  .v-enter {
    opacity:0 ;
		transform:translateX(200px);
  }
	.v-leave-to{
		opacity:0 ;
		transform:translateX(-200px);
	}
	
	.v-enter-active,
	.v-leave-active{
		transition:all 0.4s ease;
  }
  
  p {
    margin:0 0 10px;
  }
	#top {
		width:100%; 
		height:250px;
	}
	.top_box {
		width:1100px; 
		height:100%; 
		margin:0 auto;  
		position:relative; 
		border-bottom:0.5px solid #87CEFA ;  
		background-image:url(../../assets/imgs/topimg15.jpg) ;  
		background-repeat:round;
		
	}
	
	.menu_box {
		top: 54%; left:113px; width: 244px; height: 30px; position: absolute;
	}
	
	.top_menu {
		float:left; color:FF7F50; font-size:14px; font-family:宋体;  line-height:30px; 
		transition:all 0.5s ;
	}
	
	
	.top_menu:hover {
		cursor:pointer ; 
		transform:scale(1.25,1.25 ) ;
		 -moz-transform:scale(1.25,1.25) ;
		color:black ; 
		text-decoration: underline ;
	}

	
	.top_menu_split {
		float:left; font-size:14px; width:20px; text-align:center; line-height:30px;
	}
	
	.fw {
		font-weight:700 ; 
	}
	
	/*关于站点、关于博主 组件样式*/
	
	#showmore {
		padding-top:10px;
		font-size:10px;
	}
	#showmore:hover {
		cursor:pointer;
		text-decoration: underline ;
		color:#aaa ;
	}
	
	.fs0 {
		font-size:10px;
	}
	
	.title {
		color:#337ab7; font-size:12px; font-weight:600; padding-top:5px;
	}
	
	/*关注 组件 部分样式 */ 
	
	#focus_box {
		width:235px; height:250px;  overflow:hidden;
	}
	
	#focus_title_box {
		width:100%; height:30px; 
	}
	
	#focus_item_box {
		width:100%; height:80px; 
	}
	
	.focus_list {
		width:25%; height:100%; float:left; margin-top:5px; text-align:center;
		
	}
	
	.focus_item {
		width:39px; height:39px; border-radius:50%; border:1px solid #ccc; margin:0 auto;
		transition:all 0.25s ;
	}
  .focus_item img {
    width:40px;
    height:40px ;
  }
	.focus_item:hover {
		transform:scale(1.2,1.2) ;
		 -moz-transform:scale(1.2,1.2) ;
	}
  
  .myarea {
    width:100%; 
    height:100%;
    position:absolute; 
    top:0; 
    left:15px;
  }
</style>