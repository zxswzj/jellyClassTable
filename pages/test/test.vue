<template>
	<view class="uni-flex uni-row">
		<!-- 				<view class="block">
			直接使用: {{ util1.getTime(2) }}
		</view> -->
		<view class="ruler"><view class="uni-flex">ruler</view></view>
		<view class="main">
			<view class="head"></view>
			<view class="table">
				<view
					class="uni-flex uni-column devide5 col-frame"
					:class="[{ emphasis: isEmphasis(i) }]"
					:style="{ height: systemInfo.windowHeight + 'px' }"
					v-for="(item1, i) in projs.days"
					:key="i"
					@longpress.stop="onNewClass"
					:data-class="item1"
					:data-x="i"
				>
					<view
						class="item-frame"
						:class="[item2.color]"
						v-for="(item2, j) in item1.classes"
						:key="j"
						:style="[{ 'margin-top': item2.margintop + 'px' }, { height: item2.height + 'px' }]"
						@longpress.stop="onEditClass"
						@click="onPopup"
						id="class"
						:data-class="item2"
						:data-x="i"
						:data-y="j"
					></view>
				</view>
			</view>
			<!-- <view class="foot"></view> -->
		</view>

		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showPop" @change="transChange">
			<view class="pop-top-view">
				<view class="pop-item-base">
					<view class="pop-title">课程</view>
					<input class="pop-input" @input="onUpdateClassName" :value="currentClass.name" />
				</view>
				<view class="pop-item-base">
					<view class="pop-title">日期</view>
					<radio-group name="week">
						<label class="radio-1" @click="onChangeWeekday('monday')">
							<radio value="monday" :checked="currentClass.weekday == 'monday'" />
							<text class="pop-text">周一</text>
						</label>
						<label class="radio-1" @click="onChangeWeekday('tuesday')">
							<radio value="tuesday" :checked="currentClass.weekday == 'tuesday'" />
							<text class="pop-text">周二</text>
						</label>
						<label class="radio-1" @click="onChangeWeekday('wednesday')">
							<radio value="wednesday" :checked="currentClass.weekday == 'wednesday'" />
							<text class="pop-text">周三</text>
						</label>
						<label class="radio-1" @click="onChangeWeekday('thursday')">
							<radio value="thursday" :checked="currentClass.weekday == 'thursday'" />
							<text class="pop-text">周四</text>
						</label>
						<label class="radio-1" @click="onChangeWeekday('friday')">
							<radio value="friday" :checked="currentClass.weekday == 'friday'" />
							<text class="pop-text">周五</text>
						</label>
						<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('saterday')">
							<radio value="saterday" :checked="currentClass.weekday == 'saterday'" />
							<text class="pop-text">星期六</text>
						</label>
						<label v-show="tableMode == 7 ? true : false" @click="onChangeWeekday('sunday')">
							<radio value="sunday" :checked="currentClass.weekday == 'sunday'" />
							<text class="pop-text">星期日</text>
						</label>
					</radio-group>
				</view>
				<view class="pop-item-base">
					<view class="pop-title">开始时间</view>
					<view class="pop-title">{{ formatDate(currentClass.time) }}</view>
					<!-- <input class="pop-input" @input="onUpdateStartTime" :value="formatDate(currentClass.time)" /> -->
				</view>
				<view class="pop-item-base" :style="[{ 'justify-content': 'space-between' }, { 'align-items': center }]">
					<view class="slide-sub-btn pop-title" @click="onSubClassTime">-</view>
					<slider style="flex:1" :value="currentClass.time" @changing="sliderClassTimeChange" max="1439" step="5" />
					<view class="slide-add-btn pop-title" @click="onAddClassTime">+</view>
				</view>
				<view class="pop-item-base">
					<view class="pop-title">时长</view>
					<view class="pop-title">{{ formatDate(currentClass.dur) }}</view>
					<view :class="[{ 'radio-1': currentClass.dur >= 240 }]" v-show="currentClass.dur >= 240">时间太长了吧，救救孩子</view>
				</view>
				<view class="pop-item-base" :style="[{ 'justify-content': 'space-between' }, { 'align-items': center }]">
					<view class="slide-sub-btn pop-title" @click="onSubClassDur">-</view>
					<slider style="flex:1" :value="currentClass.dur" @changing="sliderClassDurChange" :max="currentClass.durMax" step="5" />
					<view class="slide-add-btn pop-title" @click="onAddClassDur">+</view>
					<view class="radio-1" @click="onExtendClassDurMax" v-show="currentClass.dur >= 240">></view>
				</view>
				<view class="pop-item-base" style="flex-flow:row wrap">
					<view class="pop-title">颜色</view>
					<view
						class="pop-color-block"
						:class="[{ popColorBlockSelected: i == blockToken }]"
						:style="[{ 'background-color': item }]"
						v-for="(item, i) in colorList"
						:key="item"
						@click="onSelectColor"
						:data-color="item"
						:data-index="i"
					></view>
				</view>

				<view class="pop-item-base" style="flex-flow:row wrap">
					<button type="primary" @click="submitUpdateClass">修改</button>
					<button type="default" @click="cancelCreateProj">取消</button>
					<button type="warn" @click="onDeleteCurrClass">删除</button>
				</view>
			</view>
		</uni-transition>

		<!-- 		<uni-popup class="pop-top-view" ref="popup" type="center">
			<view class="uni-form-item uni-row">
				<view class="pop-title">课程</view>
				<input class="pop-input" @input="onUpdateClassName" :value="currentClass.name" />
			</view>
			<view class="uni-form-item uni-row">
				<view class="pop-title">日期</view>
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
				<view class="title">课程开始时间（分钟）:{{ formatDate(currentClass.time) }}</view>
				<slider :value="currentClass.time" @change="sliderClassTimeChange" max="1439" step="5" show-value />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课时长度（分钟）</view>
				<slider :value="currentClass.dur" max="240" @change="sliderClassDurChange" name="slider" show-value></slider>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="submitAddClass" v-show="drawerMode == 2">提交新课程</button>
				<button type="primary" @click="submitUpdateClass" v-show="drawerMode == 1">修改课程</button>
				<button type="primary" @click="onDeleteCurrClass">删除</button>
				<button type="primary" @click="cancelCreateProj">cancel</button>
			</view>
			<view class="uni-share-btn" @click="cancel('share')">取消分享</view>
		</uni-popup> -->

		<!-- <uni-drawer :visible="drawerMode != 0" mode="right" @close="drawerMode = 0">
			<view class="uni-form-item uni-column">
				<view class="title" v-show="drawMode == 1">create class</view>
				<view class="title" v-show="drawMode == 2">update class</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课程</view>
				<input class="uni-input" @input="onUpdateClassName" :value="currentClass.name" />
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
				<view class="title">课程开始时间（分钟）:{{ formatDate(currentClass.time) }}</view>
				<slider :value="currentClass.time" @change="sliderClassTimeChange" max="1439" step="5" show-value />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">课时长度（分钟）</view>
				<slider :value="currentClass.dur" max="240" @change="sliderClassDurChange" name="slider" show-value></slider>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="submitAddClass" v-show="drawerMode == 2">提交新课程</button>
				<button type="primary" @click="submitUpdateClass" v-show="drawerMode == 1">修改课程</button>
				<button type="primary" @click="onDeleteCurrClass">删除</button>
				<button type="primary" @click="cancelCreateProj">cancel</button>
			</view>
		</uni-drawer> -->
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniTag from '@/components/uni-tag/uni-tag.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniTransition from '@/components/uni-transition/uni-transition.vue';

var util = require('../../common/util.js');
var colors = require('../../common/colors.js');

export default {
	components: {
		uniTag,
		uniDrawer,
		uniPopup,
		uniTransition
	},
	data() {
		return {
			e: [],
			drawerMode: 0, //0:drawer close; 1: createClass drawer; 2: updateClass drawer;
			currentClass: {
				weekday: 'monday',
				name: '语文',
				time: 480,
				dur: 45,
				durMax: 240,
				icon: 'success',
				margintop: 0,
				height: 0,
				color: 'red'
			},
			// show: {
			// 	middle: false,
			// 	top: false,
			// 	bottom: false,
			// 	right: false,
			// 	right2: false
			// },
			// e: [],
			x: 0,
			y: 0,
			systemInfo: [],
			util1: util,
			timestamp: 'abc',
			colors: colors,
			today: 'aaa',
			bottomData: [
				{
					text: '微信',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
					name: 'wx'
				},
				{
					text: '支付宝',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
					name: 'wx'
				},
				{
					text: 'QQ',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
					name: 'qq'
				},
				{
					text: '新浪',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
					name: 'sina'
				},
				{
					text: '百度',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
					name: 'copy'
				},
				{
					text: '其他',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
					name: 'more'
				}
			],
			showPop: false,
			transfromClass: {
				position: 'fixed',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				width: '100%',
				height: '70%',
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center'
			},
			colorList: [
				'#F44336',
				'#e91e63',
				'#9c27b0',
				'#673ab7',
				'#3f51b5',
				'#2196F3',
				'#03a9f4',
				'#00bcd4',
				'#009688',
				'#4CAF50',
				'#8bc34a',
				'#cddc39',
				'#ffeb3b',
				'#ffc107',
				'#ff9800',
				'#ff5722',
				'#795548',
				'#607d8b',
				'#9e9e9e'
			],
			blockToken: 0
		};
	},
	methods: {
		...mapMutations(['increaseCount', 'increaseCountBy', 'decreaseCount', 'updateProjs', 'addClass', 'updateClass', 'deleteClass']),
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
					content: 'key 不能为空',
					showCancel: false
				});
			} else {
				uni.getStorage({
					key: key,
					success: res => {
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
							content: '找不到 key 对应的数据',
							showCancel: false
						});
					}
				});
			}
		},
		setStorage: function() {
			var key = this.key;
			var data = this.projs;
			if (key.length === 0) {
				uni.showModal({
					title: '保存数据失败',
					content: 'key 不能为空',
					showCancel: false
				});
			} else {
				uni.setStorage({
					key: key,
					data: data,
					success: res => {
						uni.showModal({
							title: '存储数据成功',
							content: ' ',
							showCancel: false
						});
					},
					fail: () => {
						uni.showModal({
							title: '储存数据失败!',
							showCancel: false
						});
					}
				});
			}
		},
		clearStorage: function() {
			uni.clearStorageSync();
			(this.key = ''), (this.data = '');
			uni.showModal({
				title: '清除数据成功',
				content: ' ',
				showCancel: false
			});
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
			if (s.length == 1) s = '0' + s;
			return [h, s].join(':');
		},
		onNewClass(e) {
			let weekday = 'monday';
			switch (e.currentTarget.dataset.x) {
				case 0:
					weekday = 'monday';
					break;
				case 1:
					weekday = 'tuesday';
					break;
				case 2:
					weekday = 'wednesday';
					break;
				case 3:
					weekday = 'thursday';
					break;
				case 4:
					weekday = 'friday';
					break;
				case 5:
					weekday = 'saturday';
					break;
				case 6:
					weekday = 'sunday';
					break;
				default:
					weekday = 'monday';
					break;
			}
			this.currentClass = {
				weekday: weekday,
				name: '语文',
				time: 480,
				dur: 45,
				icon: 'success',
				margintop: 0,
				height: 0
			};
			this.drawerMode = 2;
			this.x = e.currentTarget.dataset.x;
		},
		onEditClass(e) {
			console.log('onEditClass');
			// console.log(JSON.stringify(e.currentTarget.dataset));
			this.drawerMode = 1;
			this.e = e;
			this.currentClass = e.currentTarget.dataset.class;
			this.x = e.currentTarget.dataset.x;
			this.y = e.currentTarget.dataset.y;
		},
		onPopup(e) {
			// this.$refs.popup.open();
			this.currentClass = e.currentTarget.dataset.class;
			this.x = e.currentTarget.dataset.x;
			this.y = e.currentTarget.dataset.y;
			this.showPop = !this.showPop;
		},
		toggle(type) {
			// console.log(type);
			this.show[type] = !this.show[type];
		},
		submitUpdateClass: function() {
			console.log('submitUpdateClas');
			// console.log(JSON.stringify(e.currentTarget.dataset))
			this.currentClass.height = this.currentClass.dur * this.projs.rpx;
			this.updateClass({ currentClass: this.currentClass, x: this.x, y: this.y });
			this.updateProjs();
			this.drawerMode = 0;
			this.showPop = false;
			// this.cancelCreateProj();
		},
		submitAddClass: function() {
			console.log('submitCreateProj');
			this.currentClass.height = this.currentClass.dur * this.projs.rpx;
			this.addClass(this.currentClass);
			this.updateProjs();
			this.drawerMode = 0;
		},
		cancelCreateProj: function() {
			this.drawerMode = 0;
			this.showPop = false;
		},
		onDeleteCurrClass: function() {
			console.log('onDeleteCurrClass');
			// console.log(JSON.stringify(this.currentClass));
			this.deleteClass({ currentClass: this.currentClass, x: this.x, y: this.y });
			this.updateProjs();
			this.drawerMode = 0;
			this.showPop = false;
		},
		sliderClassTimeChange: function(e) {
			this.currentClass.time = e.detail.value;
		},
		sliderClassDurChange: function(e) {
			this.currentClass.dur = e.detail.value;
		},
		onSubClassTime: function() {
			this.currentClass.time--;
		},
		onAddClassTime: function() {
			this.currentClass.time++;
		},
		onSubClassDur: function() {
			this.currentClass.dur--;
		},
		onAddClassDur: function() {
			this.currentClass.dur++;
		},
		onExtendClassDurMax: function() {
			this.currentClass.durMax += 10;
			// this.currentClass.dur ++;
		},
		onChangeWeekday: function(day) {
			this.currentClass.weekday = day;
		},
		onUpdateClassName: function(e) {
			this.currentClass.name = e.detail.value;
		},
		onUpdateStartTime: function(e) {
			this.currentClass.time = e.detail.value;
		},
		isEmphasis: function(i) {
			// console.log('isEmphasis');
			let weex = new Date().getDay();
			// console.log(weex);
			if (i == weex - 1) return true;
			else return false;
		},
		transChange: function() {},
		onSelectColor: function(e) {
			this.e = e;
			// console.log(e.currentTarget.dataset.color);
			this.blockToken = e.currentTarget.dataset.index;
		}
	},
	computed: {
		projs: {
			get: function() {
				console.log('projs get');
				return this.$store.state.projs;
			},
			set: function(val) {
				console.log('projs set');
				this.$store.commit('setProjs', val);
			}
		}
	},
	onLoad() {
		// 获取系统信息
		console.log('getSystemInfo');
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				this.$store.commit('setTableHeight', res.windowHeight);
			}
		});
		//this.loadData();
		//this.getStorage();
		this.updateProjs();
		this.today = this.isEmphasis(1);
	},
	created() {
		// this.timestamp = new Date().getTime();
		// console.log('timestamp:' + this.timestamp);
	}
};
</script>

<style lang="scss">
@import '../../common/_colors.scss';

$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;
.slide-sub-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	display: flex;
	justify-content: center;
}
.slide-add-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	display: flex;
	justify-content: center;
}
.radio-1 {
	margin: 0 15rpx;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	display: inline-block;
	align-items: stretch;
	line-height: 40rpx;
	font-size: 40rpx;
}
.radio-1:nth-of-type(2n + 1) {
	background-color: $blue-lighten-1;
}
@mixin pop-title-base($color) {
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 40rpx;
	font-size: 40rpx;
	font-weight: bold;
	padding: 0 15rpx;
	text-align: left;
	color: $color;
}

.pop-top-view {
	--color-red-base: #f44336;
	--color-pink-base: #e91e63;
	--color-purple-base: #9c27b0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: $grey-lighten-3;
	border-radius: 10px;
	padding: 50rpx;

	.pop-item-base {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		background: $grey-lighten-1;
		padding: 5rpx 5rpx;
		margin: 5rpx 5rpx;
		border-radius: 10px;
	}
	.pop-title {
		@include pop-title-base($cyan-base);
	}
	.pop-title-waring {
		@include pop-title-base($red-darken-2);
	}
	.pop-text {
		line-height: 30rpx;
		font-size: 30rpx;
		font-weight: bold;
		padding: 15rpx 0;
		text-align: center;
		color: $cyan-darken-3;
	}
	.pop-input {
		margin: 0 10rpx;
		height: 30rpx;
		padding: 15rpx 25rpx;
		line-height: 30rpx;
		font-size: 30rpx;
		background: $cyan-lighten-4;
		border-radius: 10rpx;
	}
	.pop-color-block {
		margin: 10rpx 10rpx;
		padding: 5rpx;
		width: 40rpx;
		height: 40rpx;
		border-radius: 10rpx;
	}
	.popColorBlockSelected {
		border: 5px solid $blue-lighten-4;
	}
	.pop-color-block:active {
		-webkit-transform: scale(0.9);
		transform: scale(0.9);
	}
}
.ruler {
	display: flex;
	flex-flow: column nowrap;
	background: $grey-lighten-4;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex: 1;
	width: 10%;
	height: auto;
}
.main {
	display: flex;
	flex-direction: column;
	width: 90%;
	height: auto;
	background: #f8f8f8;
}
.head {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 20%;
	background: #c0c0c0;
	align-content: flex-start;
}
.table {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 80%;
	background: $grey-lighten-4;
}
.foot {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 10px;
	background: #ffffff;
	align-content: flex-end;
}
.col-frame {
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-radius: 5px;
	align-items: stretch;
	// background: linear-gradient(#74fff4, #448de0);
	box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
	color: #757575;
	font-size: 13px;
	text-align: center;
	//justify-content: center;
	background-clip: border-box;
	flex-flow: column wrap;
}
.col-frame:nth-of-type(2n + 1) {
	// background: linear-gradient(#aaffff, #b5eeff);
}

.item-frame {
	display: flex;
	flex-direction: column;
	//border: 1px solid;
	border-radius: 10px;
	align-items: stretch;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
	color: #757575;
	font-size: 13px;
	text-align: left;
	justify-content: center;
	background-clip: border-box;
	flex-flow: column wrap;
}
.item-name {
	font-size: 13px;
	color: #ffffff;
	background: #b73615;
	//box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.5);
	border-radius: 5rpx;
}
.item-start-time {
	font-size: 10px;
	color: #ffffff;
	background: #b73a67;
	border-radius: 5rpx;
}
.item-end-time {
	font-size: 10px;
	color: #ffffff;
	background: #ff7e53;
	//box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.5);
	border-radius: 5rpx;
}
.emphasis {
	box-shadow: 2px 2px 5px 4px #0080ff;
	background-color: $grey-lighten-2;
}

.nodisplay {
	display: !important;
}
</style>
