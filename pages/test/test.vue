<template>
	<view class="body">
		<view class="ruler"><view class="uni-flex">ruler</view></view>
		<view class="main">
			<view class="head"></view>
			<view class="table">
				<view
					class="col-frame"
					v-show="isDayDisplayed(i)"
					:class="[{ emphasis: isEmphasis(i) }]"
					:style="{ height: projs.tableHeight + 'px' }"
					v-for="(item1, i) in projs.days"
					:key="i"
					@click.stop="onNewClass"
					@longpress.stop="onNewClass"
					:data-class="item1"
					:data-x="i"
				>
					<view
						class="item-frame"
						:class="[colorList[item2.colorIdx]]"
						v-for="(item2, j) in item1.classes"
						:key="j"
						:style="[{ 'margin-top': item2.margintop + 'px' }, { height: item2.height + 'px' }]"
						@longpress.stop="onEditClass"
						@click.stop="onEditClass"
						id="class"
						:data-class="item2"
						:data-x="i"
						:data-y="j"
					>
						<!-- 						<view class="tag" style="--font-size: var(--font-size-36)" v-show="cfg.markAllNames || (cfg.markCurrentName && i == today)">{{ item2.name }}</view>
						<view class="" v-show="cfg.markAllNames || (cfg.markCurrentName && i == today)">
							<view class="cu-tag" style="--font-size: var(--font-size-36)">{{ item2.name }}</view>
						</view>
						<view class="cu-capsule round" v-show="cfg.markAllIcons || (cfg.markCurrentIcon && i == today)">
							<view class="cu-tag bg-blue "><text class="cuIcon-likefill"></text></view>
							<view class="cu-tag line-blue">{{ item2.time }}</view>
						</view> -->
						<!-- <view class="badge"></view> -->
						<view class="test" style="background-color: #00897B;" />
						<view class="test" style="background-color: #0066CC;" />
						<view class="test" style="background-color: #00ff00;" />
					</view>
				</view>
			</view>
			<!-- <view class="foot"></view> -->
		</view>

		<uni-drawer :visible="showPop" mode="right" @close="drawerMode = 0">	
		<!-- <uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showPop > 0" @change="transChange"> -->
			<view class="pop-top-view">
				<view class="pop-item-base">
					<view class="pop-title">课程</view>
					<input class="pop-input" @input="onUpdateClassName" :value="currentClass.name" />
				</view>
				<view class="pop-item-base">
					<view class="pop-title">日期</view>
					<radio-group name="week">
						<label class="radio-bg" @click="onChangeWeekday('monday')">
							<radio value="monday" :checked="currentClass.weekday == 'monday'" />
							<text class="pop-text">周一</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('tuesday')">
							<radio value="tuesday" :checked="currentClass.weekday == 'tuesday'" />
							<text class="pop-text">周二</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('wednesday')">
							<radio value="wednesday" :checked="currentClass.weekday == 'wednesday'" />
							<text class="pop-text">周三</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('thursday')">
							<radio value="thursday" :checked="currentClass.weekday == 'thursday'" />
							<text class="pop-text">周四</text>
						</label>
						<label class="radio-bg" @click="onChangeWeekday('friday')">
							<radio value="friday" :checked="currentClass.weekday == 'friday'" />
							<text class="pop-text">周五</text>
						</label>
						<label class="radio-bg" v-show="cfg.daysMode" @click="onChangeWeekday('saterday')">
							<radio value="saterday" :checked="currentClass.weekday == 'saterday'" />
							<text class="pop-text">周六</text>
						</label>
						<label class="radio-bg" v-show="cfg.daysMode" @click="onChangeWeekday('sunday')">
							<radio value="sunday" :checked="currentClass.weekday == 'sunday'" />
							<text class="pop-text">周日</text>
						</label>
					</radio-group>
				</view>
				<view class="pop-item-base">
					<view class="pop-title">开始时间</view>
					<view class="pop-title">{{ formatDate(currentClass.time) }}</view>
					<view class="pop-text-warning" v-show="currentClass.time >= 1200">太晚了吧，救救孩子</view>
					<!-- <input class="pop-input" @input="onUpdateStartTime" :value="formatDate(currentClass.time)" /> -->
				</view>
				<view class="pop-item-base" :style="[{ 'justify-content': 'space-between' }, { 'align-items': center }]">
					<view class="slide-sub-btn pop-title" @click="onSubClassTime">-</view>
					<slider style="flex:1" :value="currentClass.time" @change="sliderClassTimeChange" @changing="sliderClassTimeChange" max="1439" step="5" />
					<view class="slide-add-btn pop-title" @click="onAddClassTime">+</view>
				</view>
				<view class="pop-item-base">
					<view class="pop-title">时长</view>
					<view class="pop-title">{{ formatDate(currentClass.dur) }}</view>
					<view class="pop-text-warning" v-show="currentClass.dur >= 240">时间太长了吧，救救孩子</view>
				</view>
				<view class="pop-item-base" :style="[{ 'justify-content': 'space-between' }, { 'align-items': center }]">
					<view class="slide-sub-btn pop-title" @click="onSubClassDur">-</view>
					<slider style="flex:1" :value="currentClass.dur" @change="sliderClassDurChange" @changing="sliderClassDurChange" :max="durMax" step="5" />
					<view class="slide-add-btn pop-title" @click="onAddClassDur">+</view>
					<view class="radio-1" @click="onExtendClassDurMax" v-show="currentClass.dur >= 240">></view>
				</view>
				<view class="pop-item-base" style="flex-flow:row wrap">
					<view class="pop-title">颜色</view>
					<view
						class="pop-color-block"
						:class="[{ popColorBlockSelected: i == currentClass.colorIdx }, item]"
						v-for="(item, i) in colorList"
						:key="item"
						@click="onSelectColor"
						:data-color="item"
						:data-index="i"
					></view>
				</view>

				<view class="pop-item-base" style="flex-flow:row wrap">
					<button type="primary" @click="submitUpdateClass" v-show="showPop == 1">修改</button>
					<button type="primary" @click="submitAddClass" v-show="showPop == 2">增加</button>
					<button type="default" @click="cancelCreateProj">取消</button>
					<button type="warn" @click="onDeleteCurrClass">删除</button>
				</view>
			</view>
		<!-- </uni-transition> -->
		</uni-drawer>
		

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
var util = require('@/utils/util.js');

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
			key: 'KEY_PROJECT',
			durMax: 240,
			drawerMode: 0, //0:drawer close; 1: createClass drawer; 2: updateClass drawer;
			currentClass: {
				weekday: 'monday',
				name: '语文',
				time: 480,
				dur: 45,
				icon: 'success',
				margintop: 0,
				height: 0,
				color: 'red'
			},
			x: 0,
			y: 0,
			systemInfo: [],
			util1: util,
			timestamp: 'abc',
			colors: colors,
			today: 1,
			showPop: 0,
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
						// uni.showModal({
						// 	title: '存储数据成功',
						// 	content: ' ',
						// 	showCancel: false
						// });
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
				height: 0,
				colorIdx: 0
			};
			// this.drawerMode = 2;
			this.x = e.currentTarget.dataset.x;
			this.showPop = 2;
		},
		onEditClass(e) {
			console.log('onEditClass');
			// console.log(JSON.stringify(e.currentTarget.dataset));
			// this.drawerMode = 1;
			this.showPop = 1;
			this.e = e;
			this.currentClass = e.currentTarget.dataset.class;
			this.x = e.currentTarget.dataset.x;
			this.y = e.currentTarget.dataset.y;
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
			this.showPop = 0;
			// this.setStorage();
		},
		submitAddClass: function() {
			console.log('submitCreateProj');
			this.currentClass.height = this.currentClass.dur * this.projs.rpx;
			this.addClass(this.currentClass);
			this.updateProjs();
			this.showPop = 0;
			// this.setStorage();
		},
		cancelCreateProj: function() {
			this.showPop = 0;
		},
		onDeleteCurrClass: function() {
			console.log('onDeleteCurrClass');
			// console.log(JSON.stringify(this.currentClass));
			this.deleteClass({ currentClass: this.currentClass, x: this.x, y: this.y });
			this.updateProjs();
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
			this.durMax += 10;
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
		isEmphasis: function(day) {
			// console.log('isEmphasis');
			if (this.today == day && this.cfg.hilightCurrentDay) return true;
			else return false;
		},
		transChange: function() {},
		onSelectColor: function(e) {
			this.e = e;
			this.currentClass.colorIdx = e.currentTarget.dataset.index;
		},
		isDayDisplayed: function(day) {
			// console.log('isDayDisplayed' + day);
			// console.log('daysMode:' + this.cfg.daysMode);
			if (!this.cfg.daysMode) {
				if (day > 4) {
					return false;
				}
			}
			return true;
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
		},
		...mapState(['cfg'])
	},
	onLoad() {
		// 获取系统信息
		console.log('getSystemInfo');
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				this.$store.commit('setTableHeight', res.windowHeight * 0.9);
			}
		});
		//this.loadData();
		// this.getStorage();
		this.updateProjs();
		//获取当前日期，1：星期一。。。
		this.today = new Date().getDay() - 1;
	},
	created() {
		// this.timestamp = new Date().getTime();
		// console.log('timestamp:' + this.timestamp);
	}
};
</script>

<style lang="scss">
	@import '../../common/vuecolors.scss';

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
.radio-bg,
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
.radio-bg:nth-of-type(2n + 1) {
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
	padding: 20rpx;

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
	.pop-text-warning {
		margin: 0 15rpx;
		background-color: $red-lighten-1;
		border-radius: 10px;
		// display: inline-block;
		align-items: stretch;
		line-height: 40rpx;
		font-size: 40rpx;
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
	height: 100%;
}
.main {
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 100%;
	background: #f8f8f8;
}
.head {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 10%;
	background: #c0c0c0;
	align-content: flex-start;
}
.table {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 90%;
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
	flex: 1;
	background: $grey-lighten-3;
	display: flex;
	flex-direction: column;
	// border: 1px solid;
	margin: 0 2px;
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
	width: 1px;
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
	display: none;
}
.tag {
	--font-size-18: 18rpx;
	--font-size-36: 36rpx;
	font-size: var(--font-size);
	vertical-align: left;
	// position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0rpx 12rpx;
	height: 36rpx;
	font-family: Helvetica Neue, Helvetica, sans-serif;
	white-space: nowrap;
}
.badge {
	border-radius: 20rpx;
	// position: absolute;
	// top: -10upx;
	// right: -10upx;
	font-size: 2rupx;
	padding: 10rpx 10rpx;
	height: 20rpx;
	width: 20rpx;
	background-color: red;
	margin: 20rpx;
	display: flex;
}
.test {
	width: 10px;
	height: 10px;
	display: flex;
}
.body {
  // background: linear-gradient(rgba(71, 67, 120, 204), rgba(94, 80, 246, 204));
  /* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../static/purple_bg.png) no-repeat center center/cover; */
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: column nowrap;
  justify-content: center;
  align-items: stretch;
  z-index: -99;
}
</style>
