<!--标签分类 快速操作 组件-->
<template>
    <div style="width:100%;">
        <!-- 标签分类 -->
        <div style="width:100%; padding-top:15px; padding-bottom:15px; ">
            <p style=" color:#337ab7; border-bottom:1px solid #ccc;">
                标签分类<span style="color:#aaa; padding-left:5px;">Label Classify</span>
            </p>
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
    </div>
</template>

<script>
export default {
    name:"labelClassify",
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
/*标签分类 -- 快捷栏*/
	#LabelClassify {
        list-style:none ; 
        margin:0 ;
        padding:0 ;
        
	}
	
	#LabelClassify li {
		float:left;
		padding:0px 5px;
		line-height:20px;
		border-radius:4px;
		margin:0px 10px 10px 0px;
		font-size:12px;
		color:white;
		transition:all 0.5s ; 
	}
	
	#LabelClassify li:hover {
		border-radius:0px;
		text-shadow:1px 1px 1px black;
	}
</style>