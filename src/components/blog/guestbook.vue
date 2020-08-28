<!--留言板  组件-->
<template>
    <div style="width:100%;" >
        <p style="color:#337ab7; font-size:14px;">留言板
            <span style="color:#aaa; padding-left:5px;">Guestbook</span>
        </p>
        
        <!--留言模板-->
        <div id="" style="margin-top:10px;">
            <p class="title" style="">
                <span class="icon-edit-fill iconfont color_red font_14"></span>
                <span class="font_14">来都来了，给个留言再走吧 ^~^。</span>
            </p>
            <div class="input_item">
                <input class="myinput" type="text" placeholder="邮箱" style="height:35px; width:250px;">
                <span style="color:#FF7F50;line-height:35px; ">(必填)</span>
            </div>
            
            <div class="input_item">
                <input class="myinput" type="text"  placeholder="你的昵称" style="height:35px; width:250px;">
                <span style="color:#FF7F50;line-height:35px; ">(必填)</span>
            </div>
            
            <div class="input_item">
                <textarea class="myinput box"  placeholder="说点什么吧" rows="5" style="width:400px;"></textarea>
                
            </div>
            
            <div class="input_item">
                <p style="">证明你不是机器人，谢谢。</p>
                <span>12+9=</span> 
                <input class="myinput" type="text" />
            </div>
            
            <span><input style="vertical-align:middle; height:12px; width:12px;" type="checkbox" name="checkbox" checked="checked" /><label style="vertical-align:middle; ">邮件回复</label></span>&nbsp;&nbsp;&nbsp;
            
            <span><input style="vertical-align:middle; height:12px; width:12px;" type="checkbox" name="checkbox" checked="checked" /><label style="vertical-align:middle; ">保存信息</label></span>
            
            <br />
            <p>填写邮箱和昵称并点击按钮将自动注册为站点用户，评论和回复时将不用再注册。</p>
            <div type="button" class="mybtn discuss_btn" style="margin-top:10px;"><span>提交留言/注册账户</span></div>
            
        </div>
        
        <!--热门评论-->
        <!--=========================================热门评论开始==========================================-->
        <div style="width:100%; margin-top:50px;">
            <div style="width:100%; height:32px; border-bottom:2px solid #87CEFA;">
                <span class="iconfont icon-fire-fill color_red font_14"></span>
                <span class="discuss_tag">热门评论</span>
                <span class="discuss_tag fl_right">
                    123人参与，16条评论
                </span>
            </div>
        
            <!--===========================评论与回复开始==============================-->
            <!--评论与回复-->
            <div style="width:100%; margin-top:20px">
                <div style="width:100%;">
                    <div style="width:7%; float:left; ">
                        <!--头像显示区域-->
                        <div class="fl_left user_icon_box">
                            <img width="40" height="40" style="border-radius:50%;" src="../../assets/imgs/ggg.jpg" />
                        </div>
                    </div>
                    <div style="float:left; width:92%; padding-bottom:40px;">
                        <!--这是父评论-->
                        <div class="parent">
                            <!--这是评论的基本信息-->
                            <div>
                                <span class="discuss_content">
                                    <span class="color_red">南国晚秋：</span>
                                    <span>
                                        这是评论内容，这儿的内容可能会很长很长，比如，哇哦，博主好厉害我也想要一个个人博客，可惜不会做，馆长能不能教教我。我们现在来看看拉长的样式会是怎么样的，嗯~不错，看样子还可以。
                                    </span>
                                </span>
                            </div>
                            
                            <!--时间，点赞，回复区域-->
                            <div style="margin-top:10px;">
                                <span class="icon-time-circle iconfont color_gary font_12"></span>
                                <span class="color_gary">2020-8-26 10:07:43</span>
                                
                                <span style="display:inline-black; color:#aaa; line-height:12px;" class="fl_right">
                                    <span class="reply">回复</span>
                                    <span class="icon-like iconfont reply"></span>
                                    <span>12</span>
                                </span>
                            </div>
                            <!--回复输入框-->
                            <div style="width:100%; background-color:white; text-align:right;">
                                <textarea class="myinput box" rows="4" style="width:100%;"></textarea>
                                <div style="width:100%; height:25px;">
                                    <div class="fl_left" style="margin-top:5px;">
                                        <span class="icon-smile iconfont file_exp_img" title="表情"></span>
                                        <span style="padding-left:10px;" title="图片" class="icon-image iconfont file_exp_img"></span>
                                    </div>
                                    <div type="button" class="btn_post discuss_btn fl_right"><span>发送</span></div>
                                    <div type="button" class="btn_cancel discuss_btn fl_right"><span>取消</span></div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <!--这儿显示所有的回复-->
                        <div class="reply_box_outer">
                            <div class="reply_box_inner">
                                <!--这是评论的基本信息-->
                                <div>
                                    <span style="font-size:13px;">
                                        <span class="color_red">爱睡觉的滚滚：</span>
                                        <span>这是第一条评论回复。</span>
                                    </span>
                                </div>
                                
                                <!--时间，点赞，回复区域-->
                                <div style="padding-top:10px;">
                                    <span class="icon-time-circle iconfont color_gary font_12"></span>
                                    <span class="color_gary">2020-8-26 10:07:34</span>
                                    
                                    <span style="display:inline-black; color:#aaa;" class="fl_right">
                                        <span class="reply">回复</span>
                                        <span class="icon-like iconfont reply"></span>
                                        <span>12</span>
                                    </span>
                                </div>
                            </div>
                            <div class="reply_box_inner">
                                <!--这是评论的基本信息-->
                                <div>
                                    <span class="discuss_content">
                                        <span class="color_red">南国晚秋：</span>
                                        <span style="padding-left:0 5px; color:#aaa;">回复</span>
                                        <span class="color_red">爱睡觉的滚滚：</span>
                                        <span>这是评论中评论的回复，这儿的内容可能会很长很长，这儿的数据测试数据多的情况下样式如何表现，看来没问题。</span>
                                    </span>
                                </div>
                                
                                <!--时间，点赞，回复区域-->
                                <div style="padding-top:10px;">
                                    <span class="icon-time-circle iconfont color_gary font_12"></span>
                                    <span class="color_gary">2020-8-26 10:07:34</span>
                                    
                                    <span style="display:inline-black; color:#aaa;" class="fl_right">
                                        <span class="reply">回复</span>
                                        <span class="icon-like iconfont reply"></span>
                                        <span>12</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <!--===========================评论与回复结束==============================-->
            <!--===========================评论与回复开始==============================-->
            <!--评论与回复-->
            <div style="width:100%; margin-top:20px">
                <div style="width:100%;">
                    <div style="width:7%; float:left; ">
                        <!--头像显示区域-->
                        <div class="fl_left user_icon_box">
                            <img width="40" height="40" style="border-radius:50%;" src="../../assets/imgs/headimg.jpg" />
                        </div>
                    </div>
                    <div style="float:left; width:92%; padding-bottom:40px;">
                        <!--这是父评论-->
                        <div class="parent">
                            <!--这是评论的基本信息-->
                            <div>
                                <span class="discuss_content">
                                    <span class="color_red">我不是男神：</span>
                                    <span>这是第二条主评论，我的评论功能基本模板好像完成
                                    </span>
                                </span>
                            </div>
                            
                            <!--时间，点赞，回复区域-->
                            <div style="margin-top:10px;">
                                <span class="icon-time-circle iconfont color_gary font_12"></span>
                                <span class="color_gary">2020-8-26 10:07:43</span>
                                
                                <span style="display:inline-black; color:#aaa; line-height:12px;" class="fl_right">
                                    <span class="reply">回复</span>
                                    <span class="icon-like iconfont reply"></span>
                                        <span>12</span>
                                </span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <!--===========================评论与回复结束==============================-->
            
            
            
        </div>
        <!--================================================热门评论结束=================================================-->
        

        
    </div>
</template>


<script>
export default {
    name:"guestbook",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
/*公共样式*/
	* {
		font: 12px/1.3 Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	}
	p {
		margin:0 ;
		padding:0;
	}

	.fl_left {
		float:left;
	}
	.fl_right {
		float:right;
	}
	.font_12 {
		font-size:12px;
	}
	.font_14 {
		font-size:14px;
	}
	.font_16 {
		font-size:16px; 
	}
	.font_18 {
		font_size:18px;
	}
	
	
	.color_red {
		color:#FF4500 ; 
	}
	.color_gary {
		color:#5E5E5E ; 
	}
	
	/*自定义导航条样式*/
	.box::-webkit-scrollbar {
		width: 4px;
	}
	
	/*定义滚动条轨道 内阴影+圆角*/
	.box::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		border-radius: 10px;
		background-color: #ffffff;
	}

	/*定义滑块 内阴影+圆角*/
	.box::-webkit-scrollbar-thumb
	{
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #aaa;
	}
	/************************/
	
	
	.myinput {
		outline:0 ;
		border:1px solid #ccc;
		border-radius:5px;
		caret-color:#FF7F50;
	}
	.myinput:focus{
       outline:0; 
	   border:1px solid #00BFFF;
	   box-shadow:0 0 1px 2px #F0FFFF;
    }

	input::-webkit-input-placeholder {
		font-size:10px;
		padding-left:10px;
		color:#333;
    }

	textarea::-webkit-input-placeholder { 
		padding-left:8px;
		font-size:10px;
		color:#333;
    }
	
	.title {
		 font-size:14px; 
		 padding-top:5px;
		 
	}
	
	.discuss_btn {
		margin-top:5px; 
		height:25px;
		background-color:#ffffff;
		border-radius:5px;
		border:1px solid #ccc;
		text-align:center;
		margin-left:10px;
	}
	.discuss_btn:hover {
		cursor:pointer ; 
		background-color:#f9f9f9;
		box-shadow:0 0 1px 1px #eee;
	}
	
	.discuss_btn span {
		line-height:25px;
	}
	.mybtn {
		width:200px;
		color:#FF7F50; 
	}
	.mybtn:hover {
		color:#333;
		box-shadow:0 0 1px 1px #ddd;
	}
	.btn_post {
		width:60px;
		color:#FF7F50; 
	}
	
	.btn_cancel {
		width:60px;
		height:25px;
		color:black; 
	}
	
	
	.input_item {
		padding-top:10px; padding-bottom:10px;
	}
	.discuss_tag {
		line-height:32px; font-size:14px; display:inline-black;
	}
	
	.reply {
		padding-left:15px; 
	}
	.reply:hover {
		cursor:pointer;
		color:#FF4500 ; 
	}
	
	.user_icon_box {
		width:40; height:40px; 
	}
	
	.file_exp_img{
		line-height:25px; font-size:20px; color:orange;;
	}
	.file_exp_img:hover {
		color:#FF7F50 ;
	}
	.reply_box_outer {
		width:100%;  margin-top:10px; padding-left:10px; padding-bottom:15px;
	}
	
	.reply_box_inner {
		border-bottom:1px solid #ccc; padding-bottom:10px; padding-top:10px;
	}
	.discuss_content {
		font-size:13px;
	}
</style>
