<template>
	<view class="login">
		<image src="../../static/images/fg01.jpg" mode="" class="bg"></image>
		<!-- <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" class="login">登录</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			setTimeout(function(){
				uni.redirectTo({
					url: '../index/index'
				});
			},1000)
		},
		methods: {
			// getUserInfo(res) {
			// 	console.log(res);
			// 	if (res.detail.userInfo) {
			// 		uni.setStorage({
			// 			key: 'userInfo',
			// 			data: res.detail.userInfo,
			// 			success: function() {
			// 				uni.redirectTo({
			// 					url: '../index/index'
			// 				});
			// 			}
			// 		});
			// 	}

			// }
		}
	}
</script>

<style>
	.login{
		width:100%;
		height: 100%;
	}
	.bg{
		display: block;
		width:100%;
		height:100%;
	}
	/* .login {
		width: 50%;
		margin: 0 auto;
	} */
</style>
