<!--心情随笔 组件-->
<template>
    <div>
		<div style="width:100%; ">
            <p style=" color:#337ab7; padding-top:15px;">
                心情随笔<span style="color:#aaa; padding-left:5px;">essay</span>
            </p>
			
			<!--随笔列表-->
			<div style="background-color:white ;" class="essay_box">
				<p>
					<span class="icon-calendar-check iconfont essay_icon"></span>
					<time>2020-06-11</time>
				</p>
				<p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
			</div>
			<div style="background-color:white ;" class="essay_box">
				<p>
					<span class="icon-calendar-check iconfont essay_icon"></span>
					<time>2020-06-11</time>
				</p>
				<p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
			</div>
			<div style="background-color:white ;" class="essay_box">
				<p>
					<span class="icon-calendar-check iconfont essay_icon"></span>
					<time>2020-06-11</time>
				</p>
				<p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
			</div>
			<div style="background-color:white ;" class="essay_box">
				<p>
					<span class="icon-calendar-check iconfont essay_icon"></span>
					<time>2020-06-11</time>
				</p>
				<p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
			</div>
			<div style="background-color:white ;" class="essay_box">
				<p>
					<span class="icon-calendar-check iconfont essay_icon"></span>
					<time>2020-06-11</time>
				</p>
				<p class="essay_content">今天是个好日子，开始大幅就是浪费瑞尔特海内外，我家人物入围IoT热帖</p>
			</div>
			

		</div>
	</div>
</template>


<script>
export default {
    name:"essay",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .essay_icon {
		font-size:14px;
		color:#FF4500;
		padding-right:5px;
	}
	.essay_box {
		width:100%; height:100px; margin-bottom:30px; padding:10px 20px 20px 10px; border:1px solid #AFEEEE; border-radius:8px;
	}
	.essay_box:hover {
		border:1px solid #87CEFA;
		box-shadow: 0 0 2px 2px #F0F8FF;
	}
	.essay_content {
		font-size:12px;
    }
    time {
        font-size:12px;margin-bottom:10px;
    }
</style>