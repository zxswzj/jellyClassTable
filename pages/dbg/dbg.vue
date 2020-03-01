<template>
	<view>
		<view class="dp-f fw-w">
			<view class="w-100 h-100 bg-333"></view>
			<view class="w-100 h-100 bg-666" style="flex-basis: 100%;"></view>
			<view class="dp-fc w-200 h-300 bc-f0f b-2">
				<view class="w-50 h-50 bg-333"></view>
			</view>
			<view class="dp-fc w-200 h-300 bc-f0f b-2">
				<view class="w-50 h-50 bg-333"></view>
			</view>
			<view class="w-100 h-100 bg-f0f"></view>
			<view class="w-100 h-100 bg-f1"></view>
		</view>
		<button type="primary" @click="showme++">{{showme}}></button>
		<view class="itemlist list-animation mb-4 px-4 pb-4 bg-light" style="margin-top:55px">
			<view class="item" onclick="popup('blur-in')" :style="{animation: showme > 0 ? tmpTest[showme] + ' 5s' : ''}">
				<view class="ldx infinite ldx-blur-in"></view>
				<view>blur-in</view>
			</view> 
			<view class="item" onclick="popup('blur-out')">
				<view class="ldx infinite ldx-blur-out"></view>
				<view>blur-out</view>
			</view>
			<view class="item" onclick="popup('bounce-alt-in')">
				<view class="ldx infinite ldx-bounce-alt-in"></view>
				<view>bounce-alt-in</view>
			</view>
			<view class="item" onclick="popup('bounce-alt-out')">
				<view class="ldx infinite ldx-bounce-alt-out"></view>
				<view>bounce-alt-out</view>
			</view>
			<view class="item" onclick="popup('bounce-in')">
				<view class="ldx infinite ldx-bounce-in"></view>
				<view>bounce-in</view>
			</view>
			<view class="item" onclick="popup('bounce-out')">
				<view class="ldx infinite ldx-bounce-out"></view>
				<view>bounce-out</view>
			</view>
			<view class="item" onclick="popup('fade-in')">
				<view class="ldx infinite ldx-fade-in"></view>
				<view>fade-in</view>
			</view>
			<view class="item" onclick="popup('fade-out')">
				<view class="ldx infinite ldx-fade-out"></view>
				<view>fade-out</view>
			</view>
			<view class="item" onclick="popup('fall-btt-in')">
				<view class="ldx infinite ldx-fall-btt-in"></view>
				<view>fall-btt-in</view>
			</view>
			<view class="item" onclick="popup('fall-ltr-in')">
				<view class="ldx infinite ldx-fall-ltr-in"></view>
				<view>fall-ltr-in</view>
			</view>
			<view class="item" onclick="popup('fall-rtl-in')">
				<view class="ldx infinite ldx-fall-rtl-in"></view>
				<view>fall-rtl-in</view>
			</view>
			<view class="item" onclick="popup('fall-ttb-in')">
				<view class="ldx infinite ldx-fall-ttb-in"></view>
				<view>fall-ttb-in</view>
			</view>
			<view class="item" onclick="popup('flip-h-in')">
				<view class="ldx infinite ldx-flip-h-in"></view>
				<view>flip-h-in</view>
			</view>
			<view class="item" onclick="popup('flip-h-out')">
				<view class="ldx infinite ldx-flip-h-out"></view>
				<view>flip-h-out</view>
			</view>
			<view class="item" onclick="popup('flip-v-in')">
				<view class="ldx infinite ldx-flip-v-in"></view>
				<view>flip-v-in</view>
			</view>
			<view class="item" onclick="popup('flip-v-out')">
				<view class="ldx infinite ldx-flip-v-out"></view>
				<view>flip-v-out</view>
			</view>
			<view class="item" onclick="popup('float-btt-in')">
				<view class="ldx infinite ldx-float-btt-in"></view>
				<view>float-btt-in</view>
			</view>
			<view class="item" onclick="popup('float-btt-out')">
				<view class="ldx infinite ldx-float-btt-out"></view>
				<view>float-btt-out</view>
			</view>
			<view class="item" onclick="popup('float-ltr-in')">
				<view class="ldx infinite ldx-float-ltr-in"></view>
				<view>float-ltr-in</view>
			</view>
			<view class="item" onclick="popup('float-ltr-out')">
				<view class="ldx infinite ldx-float-ltr-out"></view>
				<view>float-ltr-out</view>
			</view>
			<view class="item" onclick="popup('float-rtl-in')">
				<view class="ldx infinite ldx-float-rtl-in"></view>
				<view>float-rtl-in</view>
			</view>
			<view class="item" onclick="popup('float-rtl-out')">
				<view class="ldx infinite ldx-float-rtl-out"></view>
				<view>float-rtl-out</view>
			</view>
			<view class="item" onclick="popup('float-ttb-in')">
				<view class="ldx infinite ldx-float-ttb-in"></view>
				<view>float-ttb-in</view>
			</view>
			<view class="item" onclick="popup('float-ttb-out')">
				<view class="ldx infinite ldx-float-ttb-out"></view>
				<view>float-ttb-out</view>
			</view>
			<view class="item" onclick="popup('grow-btt-in')">
				<view class="ldx infinite ldx-grow-btt-in"></view>
				<view>grow-btt-in</view>
			</view>
			<view class="item" onclick="popup('grow-btt-out')">
				<view class="ldx infinite ldx-grow-btt-out"></view>
				<view>grow-btt-out</view>
			</view>
			<view class="item" onclick="popup('grow-ltr-in')">
				<view class="ldx infinite ldx-grow-ltr-in"></view>
				<view>grow-ltr-in</view>
			</view>
			<view class="item" onclick="popup('grow-ltr-out')">
				<view class="ldx infinite ldx-grow-ltr-out"></view>
				<view>grow-ltr-out</view>
			</view>
			<view class="item" onclick="popup('grow-rtl-in')">
				<view class="ldx infinite ldx-grow-rtl-in"></view>
				<view>grow-rtl-in</view>
			</view>
			<view class="item" onclick="popup('grow-rtl-out')">
				<view class="ldx infinite ldx-grow-rtl-out"></view>
				<view>grow-rtl-out</view>
			</view>
			<view class="item" onclick="popup('grow-ttb-in')">
				<view class="ldx infinite ldx-grow-ttb-in"></view>
				<view>grow-ttb-in</view>
			</view>
			<view class="item" onclick="popup('grow-ttb-out')">
				<view class="ldx infinite ldx-grow-ttb-out"></view>
				<view>grow-ttb-out</view>
			</view>
			<view class="item" onclick="popup('jump-alt-in')">
				<view class="ldx infinite ldx-jump-alt-in"></view>
				<view>jump-alt-in</view>
			</view>
			<view class="item" onclick="popup('jump-alt-out')">
				<view class="ldx infinite ldx-jump-alt-out"></view>
				<view>jump-alt-out</view>
			</view>
			<view class="item" onclick="popup('jump-in')">
				<view class="ldx infinite ldx-jump-in"></view>
				<view>jump-in</view>
			</view>
			<view class="item" onclick="popup('jump-out')">
				<view class="ldx infinite ldx-jump-out"></view>
				<view>jump-out</view>
			</view>
			<view class="item" onclick="popup('power-off')">
				<view class="ldx infinite ldx-power-off"></view>
				<view>power-off</view>
			</view>
			<view class="item" onclick="popup('power-on')">
				<view class="ldx infinite ldx-power-on"></view>
				<view>power-on</view>
			</view>
			<view class="item" onclick="popup('rush-btt-in')">
				<view class="ldx infinite ldx-rush-btt-in"></view>
				<view>rush-btt-in</view>
			</view>
			<view class="item" onclick="popup('rush-ltr-in')">
				<view class="ldx infinite ldx-rush-ltr-in"></view>
				<view>rush-ltr-in</view>
			</view>
			<view class="item" onclick="popup('rush-rtl-in')">
				<view class="ldx infinite ldx-rush-rtl-in"></view>
				<view>rush-rtl-in</view>
			</view>
			<view class="item" onclick="popup('rush-ttb-in')">
				<view class="ldx infinite ldx-rush-ttb-in"></view>
				<view>rush-ttb-in</view>
			</view>
			<view class="item" onclick="popup('slide-btt-in')">
				<view class="ldx infinite ldx-slide-btt-in"></view>
				<view>slide-btt-in</view>
			</view>
			<view class="item" onclick="popup('slide-btt-out')">
				<view class="ldx infinite ldx-slide-btt-out"></view>
				<view>slide-btt-out</view>
			</view>
			<view class="item" onclick="popup('slide-ltr-in')">
				<view class="ldx infinite ldx-slide-ltr-in"></view>
				<view>slide-ltr-in</view>
			</view>
			<view class="item" onclick="popup('slide-ltr-out')">
				<view class="ldx infinite ldx-slide-ltr-out"></view>
				<view>slide-ltr-out</view>
			</view>
			<view class="item" onclick="popup('slide-rtl-in')">
				<view class="ldx infinite ldx-slide-rtl-in"></view>
				<view>slide-rtl-in</view>
			</view>
			<view class="item" onclick="popup('slide-rtl-out')">
				<view class="ldx infinite ldx-slide-rtl-out"></view>
				<view>slide-rtl-out</view>
			</view>
			<view class="item" onclick="popup('slide-ttb-in')">
				<view class="ldx infinite ldx-slide-ttb-in"></view>
				<view>slide-ttb-in</view>
			</view>
			<view class="item" onclick="popup('slide-ttb-out')">
				<view class="ldx infinite ldx-slide-ttb-out"></view>
				<view>slide-ttb-out</view>
			</view>
			<view class="item" onclick="popup('spring-btt-in')">
				<view class="ldx infinite ldx-spring-btt-in"></view>
				<view>spring-btt-in</view>
			</view>
			<view class="item" onclick="popup('spring-ltr-in')">
				<view class="ldx infinite ldx-spring-ltr-in"></view>
				<view>spring-ltr-in</view>
			</view>
			<view class="item" onclick="popup('spring-rtl-in')">
				<view class="ldx infinite ldx-spring-rtl-in"></view>
				<view>spring-rtl-in</view>
			</view>
			<view class="item" onclick="popup('spring-ttb-in')">
				<view class="ldx infinite ldx-spring-ttb-in"></view>
				<view>spring-ttb-in</view>
			</view>
			<view class="item" onclick="popup('throw-btt-in')">
				<view class="ldx infinite ldx-throw-btt-in"></view>
				<view>throw-btt-in</view>
			</view>
			<view class="item" onclick="popup('throw-ltr-in')">
				<view class="ldx infinite ldx-throw-ltr-in"></view>
				<view>throw-ltr-in</view>
			</view>
			<view class="item" onclick="popup('throw-rtl-in')">
				<view class="ldx infinite ldx-throw-rtl-in"></view>
				<view>throw-rtl-in</view>
			</view>
			<view class="item" onclick="popup('throw-ttb-in')">
				<view class="ldx infinite ldx-throw-ttb-in"></view>
				<view>throw-ttb-in</view>
			</view>
			<view class="item" onclick="popup('vortex-alt-in')">
				<view class="ldx infinite ldx-vortex-alt-in"></view>
				<view>vortex-alt-in</view>
			</view>
			<view class="item" onclick="popup('vortex-alt-out')">
				<view class="ldx infinite ldx-vortex-alt-out"></view>
				<view>vortex-alt-out</view>
			</view>
			<view class="item" onclick="popup('vortex-in')">
				<view class="ldx infinite ldx-vortex-in"></view>
				<view>vortex-in</view>
			</view>
			<view class="item" onclick="popup('vortex-out')">
				<view class="ldx infinite ldx-vortex-out"></view>
				<view>vortex-out</view>
			</view>
			<view class="item" onclick="popup('zoom-in')">
				<view class="ldx infinite ldx-zoom-in"></view>
				<view>zoom-in</view>
			</view>
			<view class="item" onclick="popup('zoom-out')">
				<view class="ldx infinite ldx-zoom-out"></view>
				<view>zoom-out</view>
			</view>
		</view>
		
		
		
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
			<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
			<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
		</view>
		<uni-section title="Style" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list " @change="styleChange">
				<view v-for="(item, index) in styles" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra"><radio :value="item.value" :checked="item.checked" /></view>
					</view>
				</view>
			</radio-group>
		</view>
		<uni-section title="Color" type="line"></uni-section>
		<view class="example-body">
			<radio-group class="uni-list" @change="colorChange">
				<view v-for="(item, index) in colors" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content"><view :style="{ backgroundColor: item }" class="color-tag" /></view>
						<view class="uni-list-item__extra"><radio :value="item" :checked="index === colorIndex" /></view>
					</view>
				</view>
			</radio-group>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniTag from '@/components/uni-tag/uni-tag.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
import uniSection from '@/components/uni-section/uni-section.vue';
var util = require('../../utils/util.js');

export default {
	components: {
		uniTag,
		uniDrawer,
		uniPopup,
		uniTransition,
		uniSection,
		uniSegmentedControl
	},
	data() {
		return {
			showme: 0,
			items: ['选项卡1', '选项卡2', '选项卡3'],
			styles: [
				{
					value: 'button',
					text: '按钮',
					checked: true
				},
				{
					value: 'text',
					text: '文字'
				}
			],
			colors: ['#007aff', '#4cd964', '#dd524d'],
			current: 0,
			colorIndex: 0,
			activeColor: '#007aff',
			styleType: 'button',
			tmpTest: ['ldx-blur-in', 'ldx-blur-out', 'ldx-bounce-alt-out', 'ldx-bounce-alt-in']
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
		onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex;
			}
		},
		styleChange(e) {
			if (this.styleType !== e.detail.value) {
				this.styleType = e.detail.value;
			}
		},
		colorChange(e) {
			if (this.styleType !== e.detail.value) {
				console.log(e.detail.value);
				this.activeColor = e.detail.value;
			}
		},
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
			(this.cfgt = {
				weekday: weekday,
				icon: 'success',
				name: 'm1',
				time: 480,
				dur: 60,
				margintop: 100,
				height: 100,
				displayMode: 2,
				showName: false,
				showIcon: false,
				bgc: 'transparent',
				bgcGradient: 'transparent',
				textShowBorder: true,
				textBorderColor: '#F44336',
				textBorderRadio: 5,
				textColor: '#FFFFFF',
				textSize: 20
			}),
				// this.drawerMode = 2;
				(this.x = e.currentTarget.dataset.x);
			this.showPop = 2;
		},
		onEditClass(e) {
			console.log('onEditClass');
			// console.log(JSON.stringify(e.currentTarget.dataset));
			// this.drawerMode = 1;
			this.showPop = 1;
			this.e = e;
			this.cfgt = e.currentTarget.dataset.class;
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
			this.cfgt.height = this.cfgt.dur * this.projs.rpx;
			this.updateClass({ cfgt: this.cfgt, x: this.x, y: this.y });
			this.updateProjs();
			this.showPop = 0;
			// this.setStorage();
		},
		submitAddClass: function() {
			console.log('submitCreateProj');
			this.cfgt.height = this.cfgt.dur * this.projs.rpx;
			this.addClass(this.cfgt);
			this.updateProjs();
			this.showPop = 0;
			// this.setStorage();
		},
		cancelCreateProj: function() {
			this.showPop = 0;
		},
		onDeleteCurrClass: function() {
			console.log('onDeleteCurrClass');
			// console.log(JSON.stringify(this.cfgt));
			this.deleteClass({ cfgt: this.cfgt, x: this.x, y: this.y });
			this.updateProjs();
			this.showPop = false;
		},
		sliderClassTimeChange: function(e) {
			this.cfgt.time = e.detail.value;
		},
		sliderClassDurChange: function(e) {
			this.cfgt.dur = e.detail.value;
		},
		sliderBorderRadio: function(e) {
			this.cfgt.borderRadio = e.detail.value;
		},
		sliderTextSize: function(e) {
			this.cfgt.textSize = e.detail.value;
		},
		sliderTextBorderRadio: function(e) {
			this.cfgt.textBorderRadio = e.detail.value;
		},
		sliderIconSize: function(e) {
			this.cfgt.iconSize = e.detail.value;
		},
		sliderIconBorderRadio: function(e) {
			this.cfgt.iconBorderRadio = e.detail.value;
		},
		onSubClassTime: function() {
			this.cfgt.time--;
		},
		onAddClassTime: function() {
			this.cfgt.time++;
		},
		onSubClassDur: function() {
			this.cfgt.dur--;
		},
		onAddClassDur: function() {
			this.cfgt.dur++;
		},
		onExtendClassDurMax: function() {
			this.durMax += 10;
			// this.cfgt.dur ++;
		},
		onChangeWeekday: function(day) {
			this.cfgt.weekday = day;
		},
		onUpdateClassName: function(e) {
			this.cfgt.name = e.detail.value;
		},
		onUpdateStartTime: function(e) {
			this.cfgt.time = e.detail.value;
		},
		isEmphasis: function(day) {
			// console.log('isEmphasis');
			if (this.today == day && this.cfg.hilightCurrentDay) return true;
			else return false;
		},
		transChange: function() {},
		onSelectColor: function(e) {
			//双色模式
			this.e = e;
			if (this.showColorPicker == 1) this.cfgt.bgc = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 2) this.cfgt.bgcGradient = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 3) this.cfgt.borderColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 4) this.cfgt.textColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 5) this.cfgt.textBgColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 6) this.cfgt.textBorderColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 7) this.cfgt.iconColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 8) this.cfgt.iconBgColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 9) this.cfgt.iconBorderCorlor = e.currentTarget.dataset.color.color;
			else {
				console.log('onSelectColor.exception');
			}
		},
		onSelectIcon: function(e) {
			this.cfgt.icon = e.currentTarget.dataset.icon;
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
		}
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
@import '../../components/transition-min/transition.min.css';
  .restart {
    animation: 'ldx-blur-in' 5s infinite ease;
  }
.item { 
	width: 250rpx;
	height: 250rpx;
	display: inline-block;
	text-align: center;
	font-size: 28rpx;
}
.list-animation .item view:first-child {
	margin: 32px auto;
	width: 32px;
	height: 32px;
	border-radius: 3px;
	background: linear-gradient(45deg, #444 0%, #444 15%, transparent 15%, transparent 18%, #444 10%);
}
.devide5 {
	flex-grow: 1;
	-webkit-flex-grow: 1;
	flex-shrink: 1;
	-webkit-flex-shrink: 1;
	flex-basis: 20%;
	-webkit-flex-basis: 20%;
	width: 1px;
}

.devide7 {
	flex-grow: 1;
	-webkit-flex-grow: 1;
	flex-shrink: 1;
	-webkit-flex-shrink: 1;
	flex-basis: 14%;
	-webkit-flex-basis: 14%;
	width: 1px;
}
.slide-sub-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	margin: 0 auto;
	text-align: center;
}
.slide-add-btn {
	width: 20px;
	height: 20px;
	background-color: $blue-lighten-3;
	border-radius: 10px;
	margin: 0 auto;
	text-align: center;
}
.radio-bg,
.radio-1 {
	margin: 0 10rpx;
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
	// background: $grey-lighten-3;
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
	width: 100%;
	overflow: hidden;
}
.col-frame:nth-of-type(2n + 1) {
	// background: linear-gradient(#aaffff, #b5eeff);
}

.item-frame {
	display: flex;
	// flex-direction: column;
	//border: 1px solid;
	// border-radius: 10px;
	align-items: stretch;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
	color: #757575;
	font-size: 13px;
	text-align: left;
	justify-content: center;
	// background-clip: border-box;
	flex-flow: column wrap;
	overflow: hidden;
}
.item-name {
	font-size: 13px;
	color: #ffffff;
	// background: #b73615;
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
	// background-color: $grey-lighten-2;
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
	width: 50rpx;
	height: 50rpx;
	display: flex;
	margin: 10rpx;
	border: 1px solid rgb(146, 148, 248);
}
.body {
	// background: linear-gradient(rgba(86, 53, 248, 204), rgba(94, 80, 246, 204));
	/* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../static/purple_bg.png) no-repeat center center/cover; */
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	width: 100%;
	height: 100%;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	z-index: -99;
}
.ruler {
	display: flex;
	flex-flow: column nowrap;
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
}
.head {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 10%;
	align-content: flex-start;
}
.table {
	display: flex;
	flex-direction: row;
	width: auto;
	height: 90%;
}

.atom {
	text-decoration: none;
	// border: 1px solid rgb(146, 148, 248);
	position: relative;
	overflow: hidden;
	// border-radius: 100px;
	// color: #ffffff;
	// padding: 0 10rpx;
}

.atom:hover {
	box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
}

.atom:before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent);
	transition: all 650ms;
}

.atom:hover:before {
	left: 100%;
}

.classText {
	font-size: 50px;
}
.icon-block {
	width: 40px;
	height: 40px;
}
</style>
