<template>
	<view class="dp-f fd-c w100 h100 ai-s ac-fs">
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-xianshimoshi c-27"></text>
				<text class="fs-32 c-3c">显示模式:</text>
				<text class="fs-32 c-5b pl-10" v-if="!cfg.daysMode">5天模式</text>
				<text class="fs-32 c-5b pl-10" v-if="cfg.daysMode">7天模式</text>
			</view>

			<view class="action">
				<switch
					class="switch-57"
					@change="switchDaysMode"
					:class="cfg.switchDaysMode ? 'checked' : ''"
					color="#39B54A"
					:checked="cfg.switchDaysMode ? true : false"
				></switch>
			</view>
		</view>
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-CombinedShape c-27"></text>
				<text class="fs-32 c-3c">高亮当前日期</text>
			</view>

			<view class="action">
				<switch
					class="switch-hilight"
					@change="switchHilightCurrentDay"
					:class="cfg.hilightCurrentDay ? 'checked' : ''"
					color="#39B54A"
					:checked="cfg.hilightCurrentDay ? true : false"
				></switch>
			</view>
		</view>
		<!-- <uni-segmented-control :current="sysStyleTabIndex" :values="sysStyleTabItems" style-type="button" active-color="#007aff" @clickItem="onChangeSysStyleTabItem" /> -->
		<!-- <view class="dp-f fd-c ai-fs w100 h100" v-if="sysStyleTabIndex == 0"> -->
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-yanse c-27"></text>
				<text class="fs-32 c-3c">表背景颜色</text>
			</view>
			<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
				<color-picker w="60" h="60" :defColor="cfg.bgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetBgc" />
				<color-picker w="60" h="60" :defColor="cfg.bgcGradient" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetBgcGradient" />
			</view>
		</view>
		<!-- 		</view>
		<view class="dp-f fd-c ai-fs w100 h100" v-if="sysStyleTabIndex == 1"> -->
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-yanse c-27"></text>
				<text class="fs-32 c-3c">列背景颜色</text>
			</view>
			<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
				<color-picker w="60" h="60" :defColor="cfg.colBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetColBgc" />
				<color-picker w="60" h="60" :defColor="cfg.colBgcGradient" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetColBgcGradient" />
			</view>
		</view>
		<!-- 		</view>
		<view class="dp-f fd-c ai-fs w100 h100" v-if="sysStyleTabIndex == 2"> -->
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-yanse c-27"></text>
				<text class="fs-32 c-3c">时间轴颜色</text>
			</view>
			<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
				<color-picker w="60" h="60" :defColor="cfg.axisColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetAxisColor" />
				<color-picker w="60" h="60" :defColor="cfg.axisColorGradient" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetAxisColorGradient" />
			</view>
		</view>

		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-yanse c-27"></text>
				<text class="fs-32 c-3c">时间轴文字颜色/背景颜色</text>
			</view>
			<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
				<color-picker w="60" h="60" :defColor="cfg.axisTextColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetAxisTextColor" />
				<color-picker w="60" h="60" :defColor="cfg.axisTextBgc" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetAxisTextBgc" />
			</view>
		</view>
		<!-- </view> -->
		<view class="dp-f fd-r jc-sb ai-c m-10-a p-0-20 w100 c-e0">
			<view class="iconfont dp-f ai-c">
				<text class="icon-yanse c-27"></text>
				<text class="fs-32 c-3c">高亮框颜色</text>
			</view>
			<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
				<color-picker w="60" h="60" :defColor="cfg.highlightBorderColor" :tabItems="colorSetNames" :colorSets="colorSets" @loadColorPicker="cpGetHighlightBorderColor" />
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHighlight from '@/components/view-highlight.vue';
import colorPicker from '@/components/color-picker.vue';
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

export default {
	components: {
		uniTransition,
		viewHighlight,
		uniBadge,
		uniSegmentedControl,
		colorPicker
	},
	data() {
		return {
			tempColor: '#f0f0f0',
			e: [],
			sysStyleTabIndex: 0,
			sysStyleTabItems: ['表', '列', '时间轴'],
			colorSetsTabIndex: 0,
			colorSetsTabItems: ['1c-69bc38', '1-adcd83'],
			transfromClass: {
				position: 'fixed',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				width: '100%',
				height: '100%',
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'background-color': 'rgba(0, 0, 0, 0.99)'
			},
			showColorPicker: 0,
			updated: false,
			key: 'KEY_CFG',
			menuArrow: false
			// colorList: [
			// 	'colors-red-base',
			// 	'colors-pink-base',
			// 	'colors-purple-base',
			// 	'colors-deep-purple-base',
			// 	'colors-indigo-base',
			// 	'colors-blue-base',
			// 	'colors-light-blue-base',
			// 	'colors-cyan-base',
			// 	'colors-teal-base',
			// 	'colors-green-base',
			// 	'colors-light-green-base',
			// 	'colors-lime-base',
			// 	'colors-yellow-base',
			// 	'colors-amber-base',
			// 	'colors-orange-base',
			// 	'colors-deep-orange-base',
			// 	'colors-brown-base',
			// 	'colors-blue-grey-base',
			// 	'colors-grey-base'
			// ]
		};
	},
	methods: {
		cpGetBgc(c) {
			this.cfg.bgc = c;
		},
		cpGetBgcGradient(c) {
			this.cfg.bgcGradient = c;
		},
		cpGetColBgc(c) {
			this.cfg.colBgc = c;
		},
		cpGetColBgcGradient(c) {
			this.cfg.colBgcGradient = c;
		},
		cpGetAxisColor(c) {
			this.cfg.axisColor = c;
		},
		cpGetAxisColorGradient(c) {
			this.cfg.axisColorGradient = c;
		},
		cpGetAxisTextColor(c) {
			this.cfg.axisTextColor = c;
		},
		cpGetAxisTextBgc(c) {
			this.cfg.axisTextBgc = c;
		},
		cpGetHighlightBorderColor(c) {
			this.cfg.highlightBorderColor = c;
		},
		getColor(c) {
			this.tempColor = c;
		},
		onChangeSysStyleTabItem(e) {
			if (this.sysStyleTabIndex !== e.currentIndex) {
				this.sysStyleTabIndex = e.currentIndex;
			}
		},
		onChangeColorSetTabItem: function(e) {
			if (this.colorSetsTabIndex !== e.currentIndex) {
				this.colorSetsTabIndex = e.currentIndex;
			}
		},
		isColerPickerHilight: function(e) {
			if (this.showColorPicker == 1) {
				console.log('showColorPicker:1');
				if (e.currentTarget.dataset.index == this.cfg.bgcIdx) {
					console.log('return true');
					return true;
				}
			} else if (this.showColorPicker == 2) {
				console.log('showColorPicker:2');
				if (e.currentTarget.dataset.index == this.cfg.bgcIdx) {
					console.log('return true');
					return true;
				}
			} else if (this.showColorPicker == 3) {
				console.log('showColorPicker:3');
				if (e.currentTarget.dataset.index == this.cfg.bgcGradientIdx) {
					console.log('return true');
					return true;
				}
			} else {
				console.log('return false');

				return false;
			}
		},
		switchDaysMode: function(e) {
			this.e = e;
			this.updated = true;
			this.cfg.daysMode = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchHilightCurrentDay: function(e) {
			this.updated = true;
			this.cfg.hilightCurrentDay = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkName: function(e) {
			this.updated = true;
			this.cfg.markName = e.detail.value;
			this.cfg.markAllNames = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkCurrentName: function(e) {
			this.updated = true;
			this.cfg.markCurrentName = e.detail.value;
			this.cfg.markAllNames = !e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkAllNames: function(e) {
			this.updated = true;
			this.cfg.markAllNames = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkIcon: function(e) {
			this.updated = true;
			this.cfg.markIcon = e.detail.value;
			this.cfg.markAllIcons = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkCurrentIcon: function(e) {
			this.updated = true;
			this.cfg.markCurrentIcon = e.detail.value;
			this.cfg.markAllIcons = !e.detail.value;
			// this.updateCfg(this.cfg);
		},
		switchMarkAllIcons: function(e) {
			this.updated = true;
			this.cfg.markAllIcons = e.detail.value;
			// this.updateCfg(this.cfg);
		},
		getStorage: function() {
			console.log('getStorage');
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
						this.cfg = res.data;
						this.updateCfg(this.cfg);
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
			console.log('setStorage');
			var key = this.key;
			var data = this.cfg;
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
		transChange: function() {},
		onSelectColor: function(e) {
			console.log(JSON.stringify(e.currentTarget.dataset.color));
			if (this.showColorPicker == 1) this.cfg.bgc = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 2) this.cfg.bgcGradient = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 3) this.cfg.colBgc = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 4) this.cfg.colBgcGradient = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 5) this.cfg.axisColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 6) this.cfg.axisColor1 = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 7) this.cfg.axisTextColor = e.currentTarget.dataset.color.color;
			else if (this.showColorPicker == 8) this.cfg.axisTextBgColor = e.currentTarget.dataset.color.color;
			else {
				console.log('onSelectColor.exception:' + e.currentTarget.dataset.color);
			}
		},

		...mapMutations(['updateCfg'])
	},
	computed: {
		cfg: {
			get: function() {
				console.log('cfg get');
				return this.$store.state.cfg;
			},
			set: function(val) {
				console.log('cfg set');
				this.$store.commit('updateCfg', val);
			}
		},
		...mapState(['colors', 'colorSets', 'colorSetNames'])
	},
	onLoad: function() {
		console.log('onLoad');
		// this.getStorage();
	},
	onUnload: function() {
		console.log('onUnload');
		// this.setStorage();
	},
	onHide: function() {
		console.log('onHide');
		if (this.updated) this.setStorage();
	}
};
</script>

<style lang="scss">
@import '../../common/vuecolors.scss';

.icon-c1:before {
	content: '\e621';
}

/* parameter
--dir: flex方向 */
.form-row {
	margin: 10rpx;
	padding: 10rpx;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	width: auto;
	height: auto;
	min-height: 100rpx;
	border: 1px solid hsl(190, 100%, 41%);
	border-radius: 20rpx;
}

.switch-sex::after {
	content: '\e610';
}

.switch-sex::before {
	content: '\e601';
}

.switch-57::after {
	content: '\e670';
}
.switch-57::before {
	content: '\e658';
}

.switch-hilight:before {
	content: '\e612';
}
.switch-hilight:after {
	content: '\e612';
	color: #0066cc;
}

.indent {
	margin-left: 20rpx;
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

.body {
	background: linear-gradient(rgba(86, 53, 248, 204), rgba(94, 80, 246, 204));
	/* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../../static/purple_bg.png) no-repeat center center/cover; */
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	width: 100%;
	height: auto;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: stretch;
	z-index: -99;
}
.test {
	width: 50rpx;
	height: 50rpx;
	display: flex;
	margin: 10rpx;
	border: 1px solid rgb(146, 148, 248);
}
</style>
