<template name="color-picker">
	<view class="cp1 br-15 bg-999 m-5-10" :style="'width:' + w + 'rpx;height:' + h + 'rpx;'">
		<!-- <view class="br-15 w100 h100" :style="'background:' + defColor + ';'" @click="showColorPicker = true" /> -->
		<view class="br-15 w100 h100" :style="'background:' + defColor + ';'" @click="openPopup" />
		<!-- <uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showColorPicker" @change="transIsDone"> -->
		<uni-popup ref="popupColor" :maskClick="maskClick" type="center" >
			<view class="dp-fc fd-c ac-fs ai-c w100" style="overflow:scroll;overflow-y: scroll;" :style="{height:viewH + 'px'}">
				<uni-segmented-control :current="tabIndex" :values="tabItems" style-type="button" active-color="#007aff" @clickItem="onChangeTabItem" />
				<view class="dp-fc fd-r fw-w ac-fs w100" style="overflow:auto;overflow-y: scroll;" :style="{height:viewH*0.8 + 'px'}">
					<view-highlight :w="w" :h="h" :bgc="item.color" :text="item.name" @click="getColor" v-for="(item, i) in colorSets[tabIndex].colors" :key="i" />
				</view>
				<view class="dp-fc fs-70 w-200 h-80 br-50 c-000" style="border: 1px solid rgb(146, 148, 248);" :style="{ 'background-color': color }" @click="submit">确定</view>
			</view>
			<!-- </uni-transition> -->
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
// import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHighlight from '@/components/view-highlight.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

import { mapState, mapMutations } from 'vuex';

export default {
	components: { uniPopup, viewHighlight, uniSegmentedControl },
	name: 'color-picker',
	props: {
		tabItems: {
			type: Array
		},
		colorSets: {
			type: Array
		},
		defColor: {
			type: String,
			default: 'transparent'
		},
		w: {
			type: Number,
			default: 50
		},
		h: {
			type: Number,
			default: 50
		},
		viewH: {
			type: Number,
			default: 600
		}
	},
	data() {
		return {
			maskClick: false,
			showColorPicker: false,
			color: 'transparent',
			style: '',
			hl: false,
			tabIndex: 0,
			transfromClass: {
				position: 'absolute',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				width: '100%',
				// height: 'auto',
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				// 'align-items': 'center',
				'background-color': 'black' // 'rgba(251, 251, 251, 0.9)'
			}
		};
	},
	methods: {
		getColor(c) {
			this.color = c;
		},
		onChangeColorSetTabItem: function(e) {
			if (this.tabIndex !== e.currentIndex) {
				this.tabIndex = e.currentIndex;
			}
		},
		transIsDone() {},
		onDone() {},
		onChangeTabItem(e) {
			if (this.tabIndex !== e.currentIndex) {
				this.tabIndex = e.currentIndex;
			}
		},
		submit() {
			this.$refs.popupColor.close();
			this.$emit('loadColorPicker', this.color);
		},
		openPopup(){
			this.$refs.popupColor.open();
		}
		
	}
};
</script>

<style>
.cp1 {
	border: 1px solid #000;
}
.mask {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	transition: background 0.3s linear;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	visibility: visible;
	opacity: 1;
	overflow-y: auto;

/* 	&.mask-show {
		visibility: visible;
		opacity: 1;
	} */
}
</style>
