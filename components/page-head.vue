<template name="page-head">
	<view class="uni-page-head">
		<view class="uni-page-head-title">aaaa{{title}}</view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>
