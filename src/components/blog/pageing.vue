<!--分页组件-->
<template>
    <div style="width:100%; margin:0 auto;">
		<div style="width:100%; height:50px;">
			<ul class="paging">
				<li><a>首页</a></li>
				<li><a>上一页</a></li>
			</ul>
			<ul class="paging">
				<li class="active"><a>1</a></li>
				<li><a>2</a></li>
				<li><a>3</a></li>
				<li><a>4</a></li>
				<li><a>5</a></li>
			</ul>
			<ul class="paging">
				<li><a>下一页</a></li>
				<li><a>尾页</a></li>
				<li style="float:right;">共115条记录</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    name:"pageing",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.paging {
		list-style:none;
		margin:0;
		padding:0 ;
	}
	
	.paging li {
		float:left;
		font-size:14px;
		padding:5px 15px 5px 15px;
		cursor:pointer;
	}
	.active {
		color:#87CEFA ; 
	}
</style>