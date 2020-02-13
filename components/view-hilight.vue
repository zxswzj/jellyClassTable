<template name="view-hilight">
	<text :class=hilight>{{text}}
	</text>
</template>
<script>
	export default {
		name: "view-hilight",
		props: {
			text: {
				type: String,
				default: "aa"
			},
			hilight: {
				type: String
			}
		}
	}
</script>

<style>
.hilight {
	background-color: #0081FF;
}
</style>