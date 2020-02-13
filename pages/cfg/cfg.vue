<template>
	<view class="form-top-view z-flex" style="--dir:var(--dir-col);--wrap:var(--wrap-no)">
		<view class="form-item margin-top colors-white-base">
			<view class="iconfont">
				<text class="cuIcon-title text-blue"></text>
				<text class="form-item-text">显示模式</text>
				<text class="form-item-text" v-if="!cfg.daysMode">5天模式</text>
				<text class="form-item-text" v-if="cfg.daysMode">7天模式</text>
			</view>

			<view class="action">
				<switch
					class="switch-sex"
					@change="switchDaysMode"
					:class="cfg.switchDaysMode ? 'checked' : ''"
					color="#39B54A"
					:checked="cfg.switchDaysMode ? true : false"
				></switch>
			</view>
		</view>
		<view class="form-item margin-top colors-white-base">
			<view class="iconfont">
				<text class="cuIcon-title text-blue"></text>
				<text class="form-item-text">高亮当前日期</text>
			</view>

			<view class="action">
				<switch
					class="switch-sex"
					@change="switchHilightCurrentDay"
					:class="cfg.hilightCurrentDay ? 'checked' : ''"
					color="#39B54A"
					:checked="cfg.hilightCurrentDay ? true : false"
				></switch>
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="sysStyleTabIndex" :values="sysStyleTabItems" style-type="button" active-color="#007aff" @clickItem="onChangeSysStyleTabItem" />
		</view>
		<view class="dp-f ai-fs w100 h100" v-if="sysStyleTabIndex == 0">
			<view class="form-item w100 colors-white-base">
				<view class="iconfont">
					<text class="icon-xiuli"></text>
					<text>背景颜色</text>
				</view>
				<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
					<view class="pop-color-block" :style="{ background: cfg.bgc }" @click="showColorPicker = 1" />
					<view class="pop-color-block" :style="{ background: cfg.bgcGradient }" @click="showColorPicker = 2" />
				</view>
			</view>
		</view>
		<view class="dp-f ai-fs w100 h100" v-if="sysStyleTabIndex == 1">
			<view class="form-item w100 colors-white-base">
				<view class="iconfont">
					<text class="icon-xiuli"></text>
					<text class="form-item-text">背景颜色</text>
				</view>
				<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
					<view class="pop-color-block" :style="{ background: cfg.colBgc }" @click="showColorPicker = 3" />
					<view class="pop-color-block" :style="{ background: cfg.colBgcGradient }" @click="showColorPicker = 4" />
				</view>
			</view>
		</view>

		<view class="dp-f fd-c ai-fs w100 h100" v-if="sysStyleTabIndex == 2">
			<view class="form-item w100 colors-white-base">
				<view class="iconfont">
					<text class="icon-xiuli"></text>
					<text class="form-item-text">时间轴颜色</text>
				</view>
				<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
					<view class="pop-color-block" :style="{ background: cfg.axisColor }" @click="showColorPicker = 5" />
					<view class="pop-color-block" :style="{ background: cfg.axisColor1 }" @click="showColorPicker = 6" />
				</view>
			</view>

			<view class="form-item w100 colors-white-base">
				<view class="iconfont">
					<text class="icon-xiuli"></text>
					<text class="form-item-text">时间轴文字颜色/背景颜色</text>
				</view>
				<view class="z-flex" style="--dir:var(--dir-row);--wrap:var(--wrap-no);">
					<view class="pop-color-block" :style="{ background: cfg.axisTextColor }" @click="showColorPicker = 7" />
					<view class="pop-color-block" :style="{ background: cfg.axisTextBgColor }" @click="showColorPicker = 8" />
				</view>
			</view>
		</view>

<!-- 		<view class="dp-fc"><view class="dp-fc btn w-200 h-80 mt-50 c-000" @click="showColorPicker = false">确定</view></view>
 -->
		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showColorPicker > 0" @change="transChange">
			<view class="form-top-view dp-f fd-c w100 h100">
				<view class="uni-padding-wrap uni-common-mt">
					<uni-segmented-control
						:current="colorSetsTabIndex"
						:values="colorSetsTabItems"
						style-type="button"
						active-color="#007aff"
						@clickItem="onChangeColorSetTabItem"
					/>
				</view>
				<view class="pop-item-base" style="flex-flow:row wrap">
					<view class="pop-title">颜色</view>
					<view
						class="pop-color-block"
						:class="[
							{
								popColorBlockSelected:
									(colors[i].color == cfg.bgc && showColorPicker == 1) ||
									(colors[i].color == cfg.bgcGradient && showColorPicker == 2) ||
									(colors[i].color == cfg.colBgc && showColorPicker == 3) ||
									(colors[i].color == cfg.colBgcGradient && showColorPicker == 4) ||
									(colors[i].color == cfg.axisColor && showColorPicker == 5) ||
									(colors[i].color == cfg.axisColor1 && showColorPicker == 6) ||
									(colors[i].color == cfg.axisTextColor && showColorPicker == 7) ||
									(colors[i].color == cfg.axisTextBgColor && showColorPicker == 8)
							}
						]"
						:style="{ background: item.color }"
						v-for="(item, i) in colorSets[colorSetsTabIndex].colors"
						:key="i"
						@click="onSelectColor"
						:data-color="item"
						:data-index="i"
					/>
				</view>

				<view class="dp-fc"><view class="dp-fc btn w-200 h-80 mt-50 c-000" @click="showColorPicker = false">确定</view></view>
			</view>
		</uni-transition>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHilight from '@/components/view-hilight.vue';
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

export default {
	components: {
		uniTransition,
		viewHilight,
		uniBadge,
		uniSegmentedControl
	},
	data() {
		return {
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
				'background-color': 'rgba(0, 0, 0, 0.4)'
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
		...mapState(['colors', 'colorSets'])
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
// .indent {
// 	margin: 5rpx 0 5rpx 40rpx;
// }

.switch-sex::after {
	content: '\e716';
}

.switch-sex::before {
	content: '\e7a9';
}

.switch-music::after {
	content: '\e66a';
}

.switch-music::before {
	content: '\e6db';
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
