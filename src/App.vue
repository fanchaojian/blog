<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App'
}


</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin:0 ;
  padding:0 ;
}

	html,body {
		margin:0 ;
		padding:0 ;
		font-size:14px;
	}
	body {
		width:100%; 
		height:100%; 
		background-color:white ; 
	}
	.ftf1 {
		font-family: 宋体;
	}	

	.ftf2 {
		font-family:Verdana,宋体,sans-serif ;
	}
	.ftf3 {
		font-family:楷体 ; 
	}
	.ftf4 {
		font-family:微软雅黑,黑体;
	}
	.fs1 {
		font-size:12px;
	}
	.fs2 {
		font-size:14px;
	}
	.fs3 {
		font-size:16px;
	}
	
	.fc1 {
		color:black ; 
	}
	.fc2 {
		color:#FF7F50 ;
	}
	.fc3 {
		color:#87CEFA ; 
  }
  p {
    margin:0 0 10px;
  } 

  
</style>
