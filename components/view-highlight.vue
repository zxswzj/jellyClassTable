<template name="view-highlight">
	<view class="w-500 h-500 bc-999 bg-333 highlight"  @click="$emit('click',color)">{{text}}
	</view>
</template>
<script>
	export default {
		name: "view-highlight",
		props: {
			text: {
				type: String,
				default: "aa"
			},
			highlight: {
				type: String
			}
		},
		data() {
			return {
				color: "#00ff00"
			}
		}
	}
</script>

<style>
.highlight {
	border: 2px solid #0081FF;
}
</style>