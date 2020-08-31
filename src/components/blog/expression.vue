<!--表情  组件-->
<template>
    <div id="expression_box">
		<div style="height:20px; width:100%;">
			<span style="display:inline-block; float:right;" class="icon-close iconfont" title="关闭"></span>
		</div>
		
		<div class="icon_nav_box">
			<div id="default_btn" class="icon_nav">
				<a @click="switchExp('default')" class="emoji_nav" style="line-height:30px;">默认</a>
			</div>
			
			<div id="others_btn" class="icon_nav">
				<a @click="switchExp('others')" class="emoji_nav" style="line-height:30px;">其他</a>
			</div>
		</div>
		
		<div class="box" style="width:100%; height:125px; overflow-y:scroll; overflow-x:hidden; ">
			<ul id="default" class="expression">
				<li><img src="../../assets/emoji/default/tongue.png"/></li>
				<li><img src="../../assets/emoji/default/smile.png"/></li>   
				<li><img src="../../assets/emoji/default/happy.png"/></li>
				<li><img src="../../assets/emoji/default/cool.png"/></li>
				<li><img src="../../assets/emoji/default/cry.png"/></li>
				<li><img src="../../assets/emoji/default/love.png"/></li>
				<li><img src="../../assets/emoji/default/dizzy.png"/></li>
				<li><img src="../../assets/emoji/default/joy.png"/></li>
				<li><img src="../../assets/emoji/default/expressionless.png"/></li>
				<li><img src="../../assets/emoji/default/flushed.png"/></li>
				<li><img src="../../assets/emoji/default/injury.png"/></li>
				<li><img src="../../assets/emoji/default/angel.png"/></li>
				<li><img src="../../assets/emoji/default/mask.png"/></li>
				<li><img src="../../assets/emoji/default/mute.png"/></li>
				<li><img src="../../assets/emoji/default/sad.png"/></li>
				<li><img src="../../assets/emoji/default/scared.png"/></li>
				<li><img src="../../assets/emoji/default/secret.png"/></li>
				<li><img src="../../assets/emoji/default/sick.png"/></li>
				<li><img src="../../assets/emoji/default/sleeping.png"/></li>
				<li><img src="../../assets/emoji/default/smiling.png"/></li>
				<li><img src="../../assets/emoji/default/smirking.png"/></li>
				<li><img src="../../assets/emoji/default/surprised.png"/></li>
				<li><img src="../../assets/emoji/default/sweat.png"/></li>
				<li><img src="../../assets/emoji/default/thinking.png"/></li>
				<li><img src="../../assets/emoji/default/tired.png"/></li>
				<li><img src="../../assets/emoji/default/kiss.png"/></li>
				<li><img src="../../assets/emoji/default/unamused.png"/></li>
				<li><img src="../../assets/emoji/default/vomiting.png"/></li>
				<li><img src="../../assets/emoji/default/wink.png"/></li>
				<li><img src="../../assets/emoji/default/angry.png"/></li>
				<li><img src="../../assets/emoji/default/confused.png"/></li>
				<li><img src="../../assets/emoji/default/astonished.png"/></li>
			</ul>
			
			<ul id="others" class="expression" style="display:none;">
				<li><img src="../../assets/emoji/others/aini.png"/></li>
				<li><img src="../../assets/emoji/others/aixin.png"/></li>
				<li><img src="../../assets/emoji/others/bianbian.png"/></li>
				<li><img src="../../assets/emoji/others/dianzan.png"/></li>
				<li><img src="../../assets/emoji/others/kulou.png"/></li>
				<li><img src="../../assets/emoji/others/qie.png"/></li>
				<li><img src="../../assets/emoji/others/xinsui.png"/></li>
				<li><img src="../../assets/emoji/others/youling.png"/></li>
				<li><img src="../../assets/emoji/others/zhadan.png"/></li>
				<li><img src="../../assets/emoji/others/zhutou.png"/></li>
				
			</ul>
		</div>
		
	</div>
</template>

<script>
export default {
    name:"expression",
    data() {
        return {
        }
    },methods:{
        init(){
            $("#default_btn").addClass("active") ; 
            $("#default").show() ; 
        },
        switchExp(type){
            if(type == "default"){
                $("#default_btn").addClass("active") ;
                $("#default").show() ; 

                $("#others_btn").removeClass("active") ;
                $("#others").hide() ;
            }
            if(type == "others"){
                $("#default_btn").removeClass("active") ;
                $("#default").hide() ; 

                $("#others_btn").addClass("active") ;
                $("#others").show() ;
            }
        }
    },
    mounted(){
        this.init() 
    },
}
</script>

<style scoped>
    #expression_box {
        width:288px; height:200px; border:1px solid #ddd; padding:0px 15px 15px 15px; box-shadow:0 0 2px 2px #eee;
    }
    .expression {
		margin:0 ;
		padding:0 ;
		list-style:none ;
	}
	
	.expression li {
		float:left;
		border:1px solid #f2f2f5;
		text-align:center;
		padding:4px;
	}
	.expression li:hover {
		background-color:#FFFAF0;
		border:1px solid #FF7F50 ;
	}
	.expression li img {
		width:22px;
		height:22px;
		vertical-align:middle ;
    }
    
    .icon_nav {
        width:35px; height:30px; float:left; font-size:14px; text-align:center;
    }
    .icon_nav_box {
        height:30px;background-color:#f2f2f5; border:1px solid #ddd;margin-bottom:5px;
    }
	
	/*自定义导航条样式*/
	.box::-webkit-scrollbar {
		display:none;
	}
	
	/*定义滚动条轨道 内阴影+圆角*/
	.box::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color:#FFFAFA;
	}

	/*定义滑块 内阴影+圆角*/
	.box::-webkit-scrollbar-thumb
	{
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color:#aaa;
	}
	
	.emoji_nav:hover {
		cursor:pointer;
		color:#FF7F50 ;
	}
	.icon-close:hover {
		cursor:pointer;
		color:#FF7F50 ;
    }
    
    .active {
        border-bottom:2px solid #FF7F50;
        background-color: #ffffff;
    }
</style>