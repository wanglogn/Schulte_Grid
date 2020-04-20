<template>
	<view class="a">
		<uni-grid :column="column_num" :show-border="true" :square="true" @change='change'>
			<uni-grid-item v-for="(item,index) in list" :key="index" data-n="item" :c_index="item" :highlight="a">
				<text class="text">{{item}}</text>
			</uni-grid-item>
		</uni-grid>
		<view class="time">用时: <text>{{ time }}</text> 秒</view>
		<text class="click">请点击:{{nextNum + 1}}</text>
		<view class="btns">
			<image src="../../static/images/sx.png" @tap='again'></image>
			<image src="../../static/images/sdf.png" @tap="random_sort"></image>
		</view>


		<view class="maker" v-show="istip">
			<image src="../../static/images/bgm.png" class="mak_bg"></image>
			<image src="../../static/images/close.png" class="close" @tap="close"></image>
			<view class="center">
				<image src="../../static/images/game.png" class="game"></image>
				<view class="kuang">
					<text>
						用手指按照1，2，3，4.......的顺序点击相应的方格,并口说数字,用时越少说明你越优秀呦!
					</text>

				</view>
				<image src="../../static/images/go.png" class="go" @tap="close"></image>
				<text class="not" @tap="n_remind">不再提醒</text>
			</view>

		</view>
	</view>

</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import grade from '@/static/grade.json';
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				column_num: 3, //设置列数
				list: [],
				timer: null,
				time: '0.000',
				nextNum: 0,
				a: true, //点对背景 true开启，false关闭,
				click_err_num: 0, //点错次数,
				istip: true, //游戏提示
				useragetype: 0, //用户选择的年龄段
				user_star_level: {
					active: [],
					default: []
				}, //用户星级评定
				user_grade: [] //用户成绩
			}
		},
		onLoad(e) {
			var that = this;
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			//读取是否显示游戏提示
			uni.getStorage({
				key: 'n_remind',
				success: function(res) {
					console.log(res);
					that.istip = false;
				}
			});
			uni.getStorage({
				key: 'user_grade',
				success: function(res) {
					console.log(res);
					that.user_grade = res.data;
				}
			});
			// 获取关卡数
			if (e.num && e.userAgeType) {
				this.column_num = Number(e.num);
				this.useragetype = Number(e.userAgeType);
			} else {
				uni.redirectTo({
					url: '../index/index'
				});
			}
			// 设置展示数据
			this.random_sort();
		},
		methods: {
			//点击数字
			change(e) {
				let that = this;
				// 判断点击1开始
				if (e.detail.c_item === 1 && this.timer === null) {
					let olddate = new Date().getTime(),
						nowdate;
					this.timer = setInterval(function() {
						nowdate = new Date().getTime();
						that.time = (nowdate - olddate) / 1000;
					}, 100)
				}
				//判断是否点击正确，按顺序点击
				if (e.detail.c_item === this.nextNum + 1) {
					//确定下一个要点的数字
					this.a = true;
					this.nextNum = e.detail.c_item;
				} else {
					this.a = false;
					this.click_err_num++;
				}

				// 判断点击到最大数字,结束计时
				if (e.detail.c_item === Math.max.apply(null, this.list) && e.detail.c_item === this.nextNum) {
					clearInterval(this.timer);
					
					uni.showModal({
						title: '提示',
						content: '查看成绩',
						success: function(res) {
							if (res.confirm) {
								that.getStar(that.column_num,that.useragetype,that.time);
								let obj = {
									userAgeType: that.useragetype,
									level: that.column_num, //用户所选等级
									time: that.time,
									date: that.getdate(),
									error_num: that.click_err_num,
									star_level: that.user_star_level
								}
								that.user_grade.unshift(obj);
								uni.setStorage({
									key: 'user_grade',
									data: that.user_grade,
									success: function() {
										uni.redirectTo({
											url: "./../grade/grade?num=" + that.column_num
										});
									}
								});

							} else if (res.cancel) {}
						}
					});

				}
			}
			// 关闭游戏提示
			,
			close() {
				this.istip = false;
			}
			// 不在提醒游戏提示窗
			,
			n_remind() {
				let that = this;
				uni.setStorage({
					key: 'n_remind',
					data: that.istip,
					success: function() {
						that.istip = false;
					}
				});
			}
			// 重来
			,
			again() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
				this.time = 0;
				this.nextNum = 0;
				this.click_err_num = 0;
			}
			// 换一张
			// 表格随机排序
			,
			random_sort() {
				this.again();
				this.list = [];
				for (let i = 1; i < Infinity; i++) {
					let num = parseInt(Math.random() * this.column_num * this.column_num + 1);

					if (this.list.indexOf(num) == -1) {
						this.list.push(num);
					}
					if (this.list.length == this.column_num * this.column_num) {
						setTimeout(function() {
							uni.hideLoading();
						}, 1000)

						break;
					}
				}
			}
			//获取当前日期
			,
			getdate() {
				let date = new Date();
				let Y, M, D, h, m;
				Y = date.getFullYear();
				D = date.getDate();
				M = date.getMonth();
				h = date.getHours();
				m = date.getMinutes();

				return {
					date: Y + '-' + M + '-' + D,
					time: h + ':' + m
				}
			},
			getStar(l, a, t) {
				for (let i = 0; i < grade.list.length; i++) {
					if (grade.list[i].level == l) {
						for (let j = 0; j < grade.list[i].arr.length; j++) {
							if (grade.list[i].arr[j].ageType == a) {
								for (let m = 0; m < grade.list[i].arr[j].time.length; m++) {
									if (grade.list[i].arr[j].time[m] >= t) {
										console.log('active', m);
										this.user_star_level.active.push({
											star: true
										});
									} else {
										console.log('default', m);
										this.user_star_level.default.push({
											star: false
										});
									}
								}
							}
						}
					}
				}
				console.log(this.user_grade);
			}
		}
	}
</script>

<style>
	.a {
		width: 100%;
		height: 100%;
	}

	.a .uni-grid-item__box-item {
		font-size: 55rpx;
	}

	.a .time,
	.a .click {
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: rgba(230, 5, 5, 1);
		display: block;
		text-align: center;
	}

	.a .time text {
		width: 135rpx;
		display: inline-block;
		text-align: left;
	}

	.a .btns {
		display: flex;
		justify-content: space-around;
		margin-top: 180rpx;
	}

	.a .btns image {
		width: 271rpx;
		height: 99rpx;
	}

	.maker {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.46);
		position: absolute;
		top: 0;
		z-index: 2;
	}

	.maker .mak_bg {
		width: 626rpx;
		height: 1015rpx;
		position: absolute;
		top: 50rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.maker .close {
		width: 91rpx;
		height: 91rpx;
		position: absolute;
		top: 10rpx;
		right: 10rpx;
	}

	.center {
		position: relative;
		top: 170rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.center .game {
		width: 407rpx;
		height: 107rpx;

	}

	.center .kuang {
		width: 417rpx;
		height: 273rpx;
		background: url('~@/static/images/dfsf.png')center center no-repeat;
		background-size: 100%;
		margin: 67rpx 0rpx 87rpx 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.kuang text {
		width: 362rpx;
		height: 198rpx;
		font-size: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(43, 43, 43, 1);
		line-height: 50rpx;

	}

	.center .go {
		width: 400rpx;
		height: 104rpx;
	}

	.center .not {
		width: 154rpx;
		height: 55rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		border-bottom: 1rpx solid rgba(255, 255, 255, 1);
		padding-bottom: 15rpx;
		color: rgba(255, 255, 255, 1);
		margin-top: 50rpx;
	}
</style>
