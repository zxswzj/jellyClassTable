<template name="color-picker">
	<view class="cp1 br-15 bg-999 m-5-10" :style="'width:' + w + 'rpx;height:'+ h + 'rpx;'">
		<view class="br-15 w100 h100" :style="'background:' + defColor +';' " @click="showColorPicker = true"/>
		<!-- <uni-popup ref="popupIcon" type="center"> -->
		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showColorPicker" @change="transIsDone">
			<view class="dp-f fd-c ai-c ac-fs bg-ff p-20-0 w100">
				<!-- <view class="dp-fc fd-r"> -->
				<uni-segmented-control :current="tabIndex" :values="tabItems" style-type="button" active-color="#007aff" @clickItem="onChangeTabItem" />
				<!-- </view> -->
				<view class="dp-fc fd-r ac-fs p-20-0" style="flex-flow:row wrap">
					<view-highlight :bgc="item.color" :text="item.name" @click="getColor" v-for="(item, i) in colorSets[tabIndex].colors" :key="i" />
				</view>

				<view class="dp-fc btn w-200 h-80 mt-50 c-000" :style="{'background-color':color}" @click="showColorPicker = false;$emit('loadColorPicker', color);">确定</view>
			</view>
		</uni-transition>
		<!-- </uni-popup> -->
	</view>
</template>

<script>
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHighlight from '@/components/view-highlight.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

import { mapState, mapMutations } from 'vuex';

export default {
	components: { uniTransition, viewHighlight,uniSegmentedControl },
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
		}
	},
	data() {
		return {
			// tabItems:['a','b','c'],
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
				height: '100%',
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'background-color': 'rgba(251, 251, 251, 0.9)'
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
		transIsDone() {
			
		},
		onDone() {
			
		},
		onChangeTabItem(e) {
		if (this.tabIndex !== e.currentIndex) {
			this.tabIndex = e.currentIndex;
		}		
		}
	}
};
</script>

<style>
	.cp1{
		border: 1px solid #000;
	}
</style>
