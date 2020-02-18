<template name="icon-picker">
	<view class="c-0ff" :style="'width:' + w + 'rpx;height:' + h + 'rpx;'">
		<text class="iconfont br-15 w100 h100" :class="defIcon" :style="'background:' + defColor + ';'" @click="showPicker = true" />
		<uni-transition :mode-class="['fade']" :styles="transfromClass" :show="showPicker" @change="transIsDone">
			<view class="dp-f fd-c ac-fs bg-e5 p-20-0 w100 h100" style="z-index: 9999;">
				<uni-segmented-control :current="tabIndex" :values="tabItems" style-type="button" active-color="#007aff" @clickItem="onChangeTabItem" />
				<view class="dp-fc fd-r ac-fs p-20-0 w100" style="flex-flow:row wrap">
					<text class="iconfont c-4f fs40" :class="item" :data-icon="item" @click="getIcon" v-for="(item, i) in iconSets" :key="i" />
				</view>

				<view class="dp-fc fd-r ai-c br-100" style="border:2px solid #0066CC" @click="showPicker = false;$emit('loadIconPicker', icon);">
					<text class="dp-fc iconfont " :class="icon" style="font-size:80px;color:#2196F3"/>
					<view class="dp-fc fs-70 w-200 h-80 c-000">确定</view>
				</view>
			</view>
		</uni-transition>
		<!-- </uni-popup> -->
	</view>
</template>

<script>
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHighlight from '@/components/view-highlight.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

import { mapState } from 'vuex';

export default {
	components: { uniTransition, viewHighlight, uniSegmentedControl },
	name: 'icon-picker',
	props: {
		tabItems: {
			type: Array
		},
		iconSets: {
			type: Array
		},
		defIcon: {
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
			showPicker: false,
			icon: '',
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
		getIcon(e) {
			// console.log(JSON.stringify(e));
			this.icon = e.currentTarget.dataset.icon;
			console.log(this.icon);
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
		}
	},
	mounted() {
		this.icon = this.defIcon;
		console.log('icon-picker.onLoad' + this.icon)
	}
};
</script>

<style>
.cp1 {
	border: 1px solid #000;
}
</style>
