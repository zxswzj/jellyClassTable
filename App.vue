<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// #ifdef APP-PLUS
		// 检测升级
		uni.request({
			url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
			data: {
				appid: plus.runtime.appid,
				version: plus.runtime.version,
				imei: plus.device.imei
			},
			success: res => {
				if (res.statusCode == 200 && res.data.isUpdate) {
					let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
					// 提醒用户更新
					uni.showModal({
						title: '更新提示',
						content: res.data.note ? res.data.note : '是否选择更新',
						success: showResult => {
							if (showResult.confirm) {
								plus.runtime.openURL(openUrl);
							}
						}
					});
				}
			}
		});
		// #endif

		console.log('App Launch');
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				}
				// #endif

				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif

				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		test: ''
	}
};
</script>

<style lang="scss">
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './common/uni.css';
@import './static/fontface/iconfont.css';
@import './common/zxs.scss';
/* @import './common/z-colors.scss'; */
/* @import "colorui/main.css"; */
/* @import "colorui/icon.css"; */

@import './common/vuecolors.scss';
@import './common/markrgba/font.css';
@import './common/markrgba/layout.css';
@import './common/markrgba/padding.css';
@import './common/markrgba/margin.css';
@import './common/markrgba/other.css';
@import './common/markrgba/border.css';
@import './common/markrgba/color.css';

/* 以下样式用于 hello uni-app 演示所需 */
page {
	background-color: #f4f5f6;
	height: 100%;
	font-size: 28upx;
	line-height: 1.8;
}

.uni-header-logo {
	padding: 30upx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10upx;
}

.uni-header-image {
	width: 100px;
	height: 100px;
}

.uni-hello-text {
	color: #7a7e83;
}

.uni-hello-addfile {
	text-align: center;
	line-height: 300upx;
	background: #fff;
	padding: 50upx;
	margin-top: 10px;
	font-size: 38upx;
	color: #808080;
}

/* #endif */
/*
		全局公共样式和字体图标
	*/
/* 	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_985780_km7mi63cihi.ttf?t=1545807318834') format('truetype'),

	} */

/* 	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	} */
.icon-youyong4:before {
	content: '\e627';
}

.icon-zhuazhualiugou:before {
	content: '\e621';
}

.icon-shuijue:before {
	content: '\e635';
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 40rpx;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* 	margin-right: 14rpx;
 */
}

/* button样式改写 */
uni-button,
button {
	height: 80upx;
	line-height: 80upx;
	font-size: $font-lg + 2upx;
	font-weight: normal;

	/* 		&.no-border:before,
		&.no-border:after {
			border: 0;
		} */
}
.icon-xiatubiao:before {
	content: '\e608';
}

.icon-gouwuche:before {
	content: '\e609';
}

.icon-shoucang:before {
	content: '\e645';
}
uni-button[type='default'],
button[type='default'] {
	color: $font-color-dark;
}

.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
