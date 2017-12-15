<template>
  <div id="app">
    <header class="mint-header is-fixed">
      <h1 class="mint-header-title">某某商城</h1> 
    </header>
		<router-view>
		</router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item mui-active" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/xiaoxi" class="mui-tab-item">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link >
			<router-link to="/tongxun" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link >
			<router-link to="/shezhi" class="mui-tab-item" >
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link >
		</nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
