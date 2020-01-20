<template>
	<view>
		<!-- 		<view class="uni-flex uni-column">
			<view class="page-bottom">
				<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
					<text class="yticon icon-xiatubiao--copy"></text>
					<text>首页</text>
				</navigator>
				<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
					<text class="yticon icon-gouwuche"></text>
					<text>购物</text>
				</navigator>
				<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
					<text class="yticon icon-shoucang"></text>
					<text>收藏</text>
				</view>
			</view> -->
		<!-- 			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn">加入购物车</button>
			</view> -->
		<!-- </view> -->
		<!-- 		<uni-tag type="success" text="true1" v-show="true" />
		<uni-tag type="success" text="false2" v-show="rpx >= 2" />
		<button @click="rpx ++">tmp???</button>
		<text>tmp:{{rpx}}</text> -->

		<view class="uni-flex uni-row">
			<view class="uni-flex uni-column devide5 colframe" :class="[{'light':i%2 != 1},{'dark':i%2 != 0}]" v-for="(item1, i) in projs.days"
			 :key="i" @longpress.stop="drawerMode = 2">
				<view class="colframe" :class="[{'dark':j%2 != 1},{'light':j%2 != 0}]" v-for="(item2, j) in item1.classes" :key="j"
				 :style="[{ 'margin-top': item2.margintop + 'px' },{'height': item2.height + 'px' }]" @longpress.stop="onEditClass"
				 id="class" :data-class="item2" :data-x="i" :data-y="j">
					<!-- 					<icon :type="item2.icon" size="23px" v-show="item2.displayMode >= 3" />
					<uni-tag type="primary" :text="item2.name" v-show="item2.displayMode >= 1" />
					<uni-tag type="success" :text="formatDate(item2.time)" v-show="item2.displayMode >= 2" />
					<uni-tag type="primary" :text="formatDate(item2.dur)" v-show="item2.displayMode >= 4" />
 -->
					<text class="yticon icon-xiatubiao--copy"></text>
					<text>{{item2.name}}</text>
					<text :v-model="formatDate(item2.time)">{{formatDate(item2.time)}}</text>
				</view>
			</view>
		</view>

		<button @click="toggle('right')">右侧弹出</button>
		<uni-drawer :visible="drawerMode != 0" mode="right" @close="drawerMode = 0">
			<view class="uni-form-item uni-column">
				<view class="title" v-show="drawMode == 1">create class</view>
				<view class="title" v-show="drawMode == 2">update class</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程</view>
				<input class="uni-input" @input="onUpdateClassName" :placeholder="currentClass.name" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">日期</view>
				<radio-group name="week">
					<label @click="onChangeWeekday('monday')">
						<radio value="monday" :checked="currentClass.weekday == 'monday'" />
						<text>星期一</text>
					</label>
					<label @click="onChangeWeekday('tuesday')">
						<radio value="tuesday" :checked="currentClass.weekday == 'tuesday'" />
						<text>星期二</text>
					</label>
					<label @click="onChangeWeekday('wednesday')">
						<radio value="wednesday" :checked="currentClass.weekday == 'wednesday'" />
						<text>星期三</text>
					</label>
					<label @click="onChangeWeekday('thursday')">
						<radio value="thursday" :checked="currentClass.weekday == 'thursday'" />
						<text>星期四</text>
					</label>
					<label @click="onChangeWeekday('friday')">
						<radio value="friday" :checked="currentClass.weekday == 'friday'" />
						<text>星期五</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('saterday')">
						<radio value="saterday" :checked="currentClass.weekday == 'saterday'" />
						<text>星期六</text>
					</label>
					<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('sunday')">
						<radio value="sunday" :checked="currentClass.weekday == 'sunday'" />
						<text>星期日</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程时间（分钟）:{{formatDate(currentClass.time)}}</view>
				<slider :value="currentClass.time" max="1439" show-value step="5" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课时长度（分钟）</view>
				<slider :value="currentClass.dur" max="240" name="slider" show-value></slider>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="submitAddClass" v-show="drawerMode == 1">提交新课程</button>
				<button type="primary" @click="submitUpdateClass" v-show="drawerMode == 2">修改课程</button>
				<button type="primary" @click="cancelCreateProj">cancel</button>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';

	import uniTag from '@/components/uni-tag/uni-tag.vue';
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'

	export default {
		components: {
			uniTag,
			uniDrawer
		},
		data() {
			return {
				drawerMode: 0, //0:drawer close; 1: createClass drawer; 2: updateClass drawer;
				rpx: 0,
				currentClass: {
					weekday: "monday",
					name: "语文",
					time: 480,
					dur: 45,
					icon: "success",
					margintop: 0
				},
				show: {
					middle: false,
					top: false,
					bottom: false,
					right: false,
					right2: false
				}
			}
		},
		methods: {
			...mapMutations(['increaseCount', 'increaseCountBy', 'decreaseCount', 'updateProjs', 'addClass']),
			// onUpdateClassName: function(e) {
			// 	this.classname = e.detail.value;
			// },
			// onChangeWeekday: function(day) {
			// 	this.weekday = day;
			// },
			// bindTimeChange: function(e) {
			// 	this.cuclassStartTime = e.target.value;
			// },
			getStorage: function() {
				var key = this.key;
				//     data = this.projs;
				if (key.length === 0) {
					uni.showModal({
						title: '读取数据失败',
						content: "key 不能为空",
						showCancel: false
					})
				} else {
					uni.getStorage({
						key: key,
						success: (res) => {
							// console.log(JSON.stringify(res.data));
							// uni.showModal({
							//     title: '读取数据成功',
							//     content: "data: '" + res.data + "'",
							//     showCancel: false
							// })
							this.projs = res.data;
						},
						fail: () => {
							uni.showModal({
								title: '读取数据失败',
								content: "找不到 key 对应的数据",
								showCancel: false
							})
						}
					})
				}
			},
			setStorage: function() {
				var key = this.key
				var data = this.projs
				if (key.length === 0) {
					uni.showModal({
						title: '保存数据失败',
						content: 'key 不能为空',
						showCancel: false
					})
				} else {
					uni.setStorage({
						key: key,
						data: data,
						success: (res) => {
							uni.showModal({
								title: '存储数据成功',
								content: ' ',
								showCancel: false
							})
						},
						fail: () => {
							uni.showModal({
								title: '储存数据失败!',
								showCancel: false
							})
						}
					})
				}
			},
			clearStorage: function() {
				uni.clearStorageSync()
				this.key = '',
					this.data = ''
				uni.showModal({
					title: '清除数据成功',
					content: ' ',
					showCancel: false
				})
			},
			dirto: function() {
				console.log('dirto');
				uni.navigateTo({
					url: '/pages/viewtest/viewtest'
				});
			},
			formatDate: function(date) {
				var h = parseInt(date / 60);
				var s = date % 60;
				s = s + '';
				// console.log('second:' + s + ', second length:' + s.length)
				if (s.length == 1)
					s = '0' + s;
				return [h, s].join(':');
			},
			onEditClass(e) {
				console.log(JSON.stringify(e.currentTarget.dataset));
				this.e = e;
				this.currentClass = e.currentTarget.dataset.class;
				//this.toggle('right');
				this.drawerMode = 1;
			},
			toggle(type) {
				console.log(type);
				this.show[type] = !this.show[type];
			},
			submitUpdateClass: function() {
				console.log('submitUpdateClas');
				this.updateClass(currentClass, x, y);
				this.cancelCreateProj();
			},
			submitAddClass: function() {
				console.log('submitCreateProj');
				this.addClass({
					weekday: this.weekday,
					name: this.classname,
					time: this.classStartTime,
					dur: this.classDur
				});
				this.cancelCreateProj();
			},
			cancelCreateProj: function() {
				this.show['right'] = false;
			},
		},
		computed: {
			projs: {
				get: function() {
					console.log('projs get')
					return this.$store.state.projs
				},
				set: function(val) {
					console.log('projs set')
					this.$store.commit('setProjs', val)
				}
			}
		},
		onLoad() {
			// 获取系统信息
			uni.getSystemInfo({
				success: res => {
					this.systemInfo = res;
					this.rpx = res.windowHeight / 600;
				}
			});
			//this.loadData();
			//this.getStorage();
			this.updateProjs(this.rpx);
		}
	}
</script>

<style lang='scss'>
	.colframe {
		border: 2px solid;
		border-radius: 20px;
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: flex;
		/* 		left: 20rpx;
		top: 20rpx; */
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, .5);
		border-radius: 16rpx;

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $uni-font-size-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 50rpx;
			border-radius: 50px;
			overflow: hidden;
			box-shadow: 0 20rpx 40rpx -16rpx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
			margin-left: 20rpx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255, 255, 255, .5);
			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}

	.icon-xiatubiao--copy:before {
		content: "\e608";
	}

	.icon-gouwuche:before {
		content: "\e609";
	}

	.icon-shoucang:before {
		content: "\e645";
	}
</style>
