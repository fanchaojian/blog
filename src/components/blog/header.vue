<template>
    <div id="header" class="header_box">
		<div style="width:1100px; height:100%; margin:0 auto;">
			<div id="tag">
				<div style="height:32px; float:left ;"><span>南国晚秋</span></div>
				<div style="width:32px; height:32px; float:left; padding-top:4px;">
					<img id="logo" src="../../assets/imgs/headimg.jpg" /> 
				</div>
				<div style="height:32px; float:right ; width:180px;">
					<input  type="text" id="search" name="search" />
					
					<div id="search_img">
						<img src="../../assets/imgs/search.png" width="25px" heigh="25px"/>
					</div>
					
				</div>
					
				
			</div>
			
			<div id="menu">
				<ul>
					<li><span>首页</span></li>
					<li><span>程序人生</span></li>
					<li><span>心情随笔</span></li>
					<li><span>生活细闻</span></li>
					<li><span>旧时光</span></li>
					<li><span>标签夹</span></li>
					<li><span>留言板</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
        msg:"这是我的top组件"
    }
  }
}
</script>

<style scoped>
  /*头部*/
	#header {
		z-index:1000 ;
		width:100%;
		height:32px ;
		
	}
	.header_box {
		background-color:white ; 
		border-bottom:0.5px solid #87CEFA ; 
	}
	
	
	#tag {
		float:left; width:40%; height:32px;
	}
	
	#tag  span {
		line-height:32px;
		font-family:楷体 ;
		font-size:16px;  
		color:balck; 
		font-weight: 700; 
	}
	#search {
		width:150px; 
		height:20px; 
		border:1px solid #ccc; 
		border-radius:5px;
		display:block; float:left; 
		margin-top:5px;
		transition:all 1s ;
	}
	#search:hover {
		border:1px solid #00BFFF; 
		box-shadow:0 0 1px #00BFFF; 
	}
	
	#search:focus {
		background:none;
		outline:none;
		border:0px;
		border:1px solid #00BFFF; 
		border-radius:2px;
		box-shadow:0 0 1px #00BFFF; 
	}
	#search_img {
		width:25px; height:32px; float:right;
		margin-top:4px;
	}

	#logo {
		border-radius:50%; 
		width:20px; 
		height:20px; 
		padding-top:px;
		
	}
	
	
	
	#menu {
		float:right; 
		width:60%; 
		height:32px;
	}
	
	#menu > ul {
		list-style:none ;
		float:right;
		margin-block-start: 0em;
		margin-block-end:0em ;
	}
	#menu > ul >li {
		margin:0px; padding:0 ;
		font-size:13px; 
		width:80px;
		line-height:32px;
		padding-top:0px;
		font-family:宋体;
		display:inline-block ;
		text-align:center;
		color:#FF7F50 ;
		font-weight: 700; 
		transition:all 0.5s ;
		
	}
	
	#menu > ul >li:hover {
		cursor:pointer;
		transform:scale(1.2,1.2 ) ;
		 -moz-transform:scale(1.25,1.25) ;
		color:black ;
		text-decoration: underline ;
		
	}
	
	#menu span{
		height:32px;
		line-height:32px;
		display:inlin-black;
	}
	
</style>