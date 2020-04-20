<script>
	export default {
		onLaunch: function() {},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onShareAppMessage: function() {
			return {
				title:'转发',
				path:'/pages/index/index.vue'
			}
		},
	}
</script>
*6
<style>
	/*每个页面公共css */
	@import './common/uni.css';
</style>