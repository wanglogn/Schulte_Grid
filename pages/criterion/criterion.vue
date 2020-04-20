<template>
	<scroll-view class="history" scroll-y='true'>
		<view class="content"  v-for="(item,index) in list" :key="index">
			<view class="title">以{{item.level}}x{{item.level}}方格举例</view>
			<view class="list">
				<view class="list-item">等级</view>
				<view class="list-item">优秀</view>
				<view class="list-item">良好</view>
				<view class="list-item">中等</view>
				<view class="list-item">及格</view>
				<view v-for="(it,ind) in item.arr" :key="ind" class="item_list">
					<view>{{it.age}}</view>
					<view v-for="(i,a) in it.time" :key="a">{{i}}秒</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import grade from '@/static/grade.json';
	export default {
		data() {
			return {
				list:[],
				level:0
			}
		},
		onLoad(e) {
			this.level = e.num;
			this.list = grade.list;
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
		margin:25rpx auto;
		overflow: hidden;
		padding-bottom: 20rpx;
	}
	.title{
		width:685rpx;
		height:73rpx;
		background:rgba(254,210,177,1);
		border-radius:20rpx;
		margin:15rpx auto 0rpx;
		
		font-size:36rpx;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(34,34,34,1);
		text-align: center;
		line-height: 73rpx;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		width: 685rpx;
		margin: 0 auto;
	}
	.list .list-item,.list .item_list>view{
		width: 137rpx;
		text-align: center;
	}
	.list .item_list{
		display: flex;
		flex-direction: row;
	}
</style>
