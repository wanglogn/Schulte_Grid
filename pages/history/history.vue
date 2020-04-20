<template>
	<view class="history">
		<view class="content">
			<view class="title">{{level}}x{{level}}方格历史成绩</view>
			<view class="list">
				<view class="list_tit">
					<view class="times">日期</view>
					<view class="stars">星级</view>
					<view>错误</view>
					<view>用时</view>
				</view>
				<scroll-view class="scroll_view" scroll-y='true'>
					<view 
					v-for="(item,index) in user_grade" 
					:key="index"  
					>
						<view v-if="level==item.level" class="list_con">
							<view class="times">
								<view>{{item.date.date}}</view>
								<view>{{item.date.time}}</view>
							</view>
							<view class="stars">
								<image src="../../static/images/star.png" v-for="(i,ind) in item.star_level.active" :key="ind"></image>
								<image src="../../static/images/star_f.png" v-for="(i,ind) in item.star_level.default" :key="ind"></image>
							</view>
							<view>{{item.error_num}}</view>
							<view>{{item.time}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_grade: [],
				level:0
			}
		},
		onLoad(e) {
			this.level = e.num;
			let that = this;
			uni.getStorage({
				key: 'user_grade',
				success: function(res) {
					that.user_grade = res.data;
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.history {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, rgba(255, 187, 88, 1), rgba(254, 62, 36, 1));
		overflow: hidden;
	}

	.content {
		width: 717rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20px;
		margin:25rpx auto 0rpx;
		overflow: hidden;
	}
	.title{
		width:685rpx;
		height:73rpx;
		background:rgba(254,210,177,1);
		border-radius:20rpx;
		margin:15rpx auto 0rpx;
		
		font-size:29rpx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(34,34,34,1);
		text-align: center;
		line-height: 73rpx;
	}
	
	
	.list{
		width: 618rpx;
		margin: 0 auto;
	}
	.list_tit{
		display: flex;
		flex-direction:row;
		border-bottom:1rpx dotted rgba(189,189,189,1);
	}
	.list_tit view{
		flex:1;
		text-align: center;
		margin:37rpx auto 30rpx;
		font-size:26rpx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(189,189,189,1);
	}
	.list_con .times,.list_tit .times{
		flex:1.2
	}
	.list_con .stars,.list_con .stars{
		flex:1.5
	}
	.stars image{
		width: 39rpx;
		height: 39rpx;
	}
	.scroll_view{
		max-height: 967rpx;
	}
	.list_con{
		display: flex;
		flex-direction: row;
	}
	.list_con>view{
		flex: 1;
		text-align: center;
		align-self: center;
	}
</style>
