<template name="icon-picker">
	<view class="cp1 br-15 bg-999 m-5-10" :style="'width:' + w + 'px;height:' + h + 'px;'">
		<cmd-icon :type="defIcon" :size="w" color="#654321" @click="openPopup" />
		<uni-popup ref="popupIcon" :maskClick="maskClick" type="center">
			<view class="dp-fc fd-c ac-fs ai-c w100" style="overflow:scroll;overflow-y: scroll;" :style="{ height: viewH + 'px' }">
				<view class="dp-fc fd-r fw-w ac-fs w100" style="overflow:auto;overflow-y: scroll;" :style="{ height: viewH * 0.8 + 'px' }">
					<!-- <view-highlight :w="w" :h="h" :bgc="item.color" :text="item.name" @click="getColor" v-for="(item, i) in colorSets[tabIndex].colors" :key="i" /> -->
					<block v-for="(item, i) in iconSets" :key="i">					
						<cmd-icon :type="item" size="50" color="#654321" @click="getIcon(item)"/>						
					</block>

				</view>
				<view>
					<cmd-icon :type="icon" size="50" color="#654321" />
					<view class="dp-fc fs-70 w-200 h-80 br-50 c-000" style="border: 1px solid rgb(146, 148, 248);" @click="submit">
						确定
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniTransition from '@/components/uni-transition/uni-transition.vue';
import viewHighlight from '@/components/view-highlight.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
import cmdIcon from '@/components/cmd-icon/cmd-icon.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';

import { mapState } from 'vuex';

export default {
	components: { uniTransition, viewHighlight, uniSegmentedControl, cmdIcon, uniPopup },
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
		},
		viewH: {
			type: Number,
			default: 600
		}
	},
	data() {
		return {
			e: [],
			maskClick: false,
			showColorPicker: false,
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
				margin: 'auto',
				display: 'flex',
				'justify-content': 'center',
				'background-color': 'black'
			}
		};
	},
	methods: {
		getIcon(icon) {
			// this.e = e;
			// console.log(JSON.stringify(icon));
			this.icon = icon;
			console.log(this.icon);
		},
		onChangeColorSetTabItem: function(e) {
			if (this.tabIndex !== e.currentIndex) {
				this.tabIndex = e.currentIndex;
			}
		},
		transIsDone() {},
		onDone() {},
		submit() {
			this.$refs.popupIcon.close();
			this.$emit('loadIconPicker', this.icon);
		},
		openPopup() {
			this.$refs.popupIcon.open();
		}
	},
	mounted() {
		this.icon = this.defIcon;
		console.log('icon-picker.onLoad' + this.icon);
	}
};
</script>

<style>
.cp1 {
	border: 1px solid #000;
}
</style>
