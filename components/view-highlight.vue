<template name="view-highlight">
	<view class="dp-fc fd-c ai-c">
		<view class="br-15 m-10" :class="hl ? 'highlight' : ''" :style="'width:' + w + 'px;height:' + h + 'px;background-color:' + bgc" @click="getColor"></view>
		<text class="c-3c">{{ text }}</text>
	</view>
</template>
<script>
// 自定义Person构造器k
function dimen(w, h) {
	this.w = w;
	this.h = h;
}
//<view-highlight w="66" :h="h" bgc="#987654" @click="getColor"/>
export default {
	name: 'view-highlight',
	props: {
		w: {
			type: Number,
			default: 50
		},
		h: {
			type: Number,
			default: 50
		},
		bgc: {
			type: String,
			default: '#666666'
		},
		text: {
			type: String,
			default: ''
		}
		// hl: {
		// 	type: Boolean,
		// 	default: false
		// }
	},
	data() {
		return {
			color: '#00ff00',
			style: '',
			hl: false
		};
	},
	computed: {},
	mounted() {
		// this.setStyle()
	},
	methods: {
		setStyle() {
			// this.style = `width: ${w}px; height: ${h}px;`
		},
		getColor() {
			// this.hl = !this.hl;
			// if(this.hl)
			this.$emit('click', this.bgc);
		}
	}
};
</script>

<style>
.m-10 {
	margin: 10rpx;
}
</style>
