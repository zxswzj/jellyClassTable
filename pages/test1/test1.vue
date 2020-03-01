<template>
	<view>
		<view class="user_top">
			<view class="user_top_two">
				<image style="display:block;" class="user_top_image" :src="userInfo.avatarUrl" />
				<view class="user_mc" bindtap="copyText" :data-text="userInfo.nickName" style="display:block;">
					<view class="c-27">{{ userInfo.nickName }}</view>
				</view>
				<!-- <block wx:else><view class="logins" bindtap="logins">点击登录/注册</view></block> -->
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view v-if="isFirstlogin">
			<view>
				<view class="content">
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
				<button type="primary" class="page-body-button" v-for="(value, key) in providerList" @click="tologin(value)" :key="key">{{ value.name }}</button>
			</view>
		</view>
		<!-- #endif -->
		<button @click="showAd">显示广告</button>
		<view class="main">
			<wInput v-model="phoneData" type="text" maxlength="11" placeholder="手机号"></wInput>
			<wInput v-model="passData" type="password" maxlength="11" placeholder="登录密码" isShowPass></wInput>
			<wInput v-model="verCode" type="number" maxlength="4" placeholder="验证码" isShowCode ref="runCode" @setCode="getVerCode()"></wInput>
		</view>
		<wButton text="登 录" @click.native="startLogin()"></wButton>
		<!-- <wButton text="注 册" :rotate="isRotate" @click.native="startReg()"></wButton> -->
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import wInput from '../../components/watch-login/watch-input.vue'; //input
import wButton from '../../components/watch-login/watch-button.vue'; //button
import uniSection from '@/components/uni-section/uni-section.vue';
import uniCard from '@/components/uni-card/uni-card.vue';
import cmdIcon from '@/components/cmd-icon/cmd-icon.vue';

import authorize from '@/common/authorize.js';

let rewardedVideoAd = null;

export default {
	components: { wInput, wButton },
	data() {
		return {
			providerList: [],
			// userInfo1: {
			// 	nickName: '',
			// 	avatarUrl: ''
			// },
			SessionKey: '',
			OpenId: '',
			nickName: null,
			avatarUrl: null,
			isFirstlogin: uni.getStorageSync('isFirstlogin') || true //默认为true,第一次login需要用户授权登录
		};
	},
	methods: {
		showAd() {
			rewardedVideoAd.show().catch(() => {
				rewardedVideoAd
					.load()
					.then(() => rewardedVideoAd.show())
					.catch(err => {
						console.log('激励视频 广告显示失败');
					});
			});
		},
		//第一授权获取用户信息===》按钮触发
		wxGetUserInfo() {
			console.log('wxGetUserInfo');
			let _this = this;
			uni.getUserInfo({
				provider: 'weixin',
				success: function(infoRes) {
					console.log('getUserInfo success');
					// _this.userInfo = infoRes.userInfo; //昵称
					// _this.avatarUrl = infoRes.userInfo.avatarUrl; //头像
					try {
						// uni.setStorageSync('isCanUse', false); //记录是否第一次授权  false:表示不是第一次授权
						// _this.updateUserInfo();
						_this.$store.commit('setUserInfo', infoRes.userInfo);
						uni.setStorageSync('isFirstlogin', false);
						uni.setStorageSync('userInfo', infoRes.userInfo);
						_this.isFirstlogin = false;
					} catch (e) {}
				},
				fail(res) {
					console.log('getUserInfo fail');
					console.log(JSON.stringify(res));
				}
			});
		},

		//登录
		login() {
			let _this = this;
			console.log('login');
			// uni.showLoading({
			// 	title: '登录中...'
			// });

			// 1.wx获取登录用户code
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log('success' + loginRes.code);
					let code = loginRes.code;
					// 	//非第一次授权获取用户信息
					if (!_this.isFirstlogin) {
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								//获取用户信息后向调用信息更新方法
								console.log(JSON.stringify(infoRes));
								_this.userInfo = infoRes.userInfo; //昵称
								_this.$store.commit('setUserInfo', _this.userInfo);
								uni.hideLoading();
							}
						});
					}
					console.log('code=' + code);
					// this.updateUserInfo();
					// let appId = 'wx3890ce6b9205839a';
					// let secret = '61e9af57504203aed1cd74d3f7ba3926';
					//在小程序规定请求地址通过appId，appSecret，登录时获取的code 来获得json数据
					// var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code';
					// 2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
					// uni.request({
					// 	url: url,
					// 	data: {
					// 		code: code
					// 	},
					// 	method: 'GET',
					// 	header: {
					// 		'content-type': 'application/json'
					// 	},
					// 	success: res => {
					// 		//openId、或SessionKdy存储//隐藏loading
					// 		console.log('wx.request success: ' + JSON.stringify(res));
					// 		uni.hideLoading();
					// 	},
					// 	fail: res => {
					// 		console.log('wx.request fail: ' + JSON.stringify(res));
					// 	}
					// });
				},
				fail: function(res) {
					console.log('login fail: ' + JSON.stringify(res));
				}
			});
		},
		//向后台更新信息
		updateUserInfo() {
			console.log('updateUserInfo');
			let _this = this;
			_this.$store.commit('setUserInfo', _this.userInfo);
			// uni.request({
			// 	url: 'url', //服务器端地址
			// 	data: {
			// 		appKey: this.$store.state.appKey,
			// 		customerId: _this.customerId,
			// 		nickName: _this.nickName,
			// 		headUrl: _this.avatarUrl
			// 	},
			// 	method: 'POST',
			// 	header: {
			// 		'content-type': 'application/json'
			// 	},
			// 	success: res => {
			// 		if (res.data.state == 'success') {
			// 			uni.reLaunch({
			// 				//信息更新成功后跳转到小程序首页
			// 				url: '/pages/index/index'
			// 			});
			// 		}
			// 	}
			// });
		},
		testCloudFunction() {
			wx.cloud.init(); //调用前需先调用init
			wx.cloud
				.callFunction({
					name: 'sum',
					data: {
						a: 3,
						b: 4
					}
				})
				.then(res => {
					console.log(JSON.stringify(res));
				});
		},
		checkLoginExpired() {
			wx.checkSession({
				success() {
					console.log('wx.checkSession success');
				},
				fail() {
					console.log('wx.checkSession fail');
					var that = this;
					//登录
					wx.login({
						success(res) {
							console.log('wx.login success');
							if (res.code) {
								//获取code
								var code = res.code;
								let appId = 'wx3890ce6b9205839a';
								let secret = '0c4a7997ed9d157ddcd87a889333a0b8';
								//在小程序规定请求地址通过appId，appSecret，登录时获取的code 来获得json数据
								var url =
									'https://api.weixin.qq.com/sns/jscode2session?appid=' +
									appId +
									'&secret=' +
									secret +
									'SECRET&js_code=' +
									code +
									'&grant_type=authorization_code';
								//向服务器发起请求获取session_key，openid
								wx.request({
									url: url,
									data: {
										session_key: '',
										openid: ''
									},
									success(res) {
										console.log(JSON.stringify(res));
									},
									fail(res) {
										console.log(JSON.stringify(res));
									}
								});
							} else {
								console.log('登录失败！' + res.errMsg);
							}
						}
					});
				}
			});
		}
		// isLogin() {
		// 	//判断缓存中是否登录过，直接登录
		// 	try {
		// 		const value = uni.getStorageSync('userInfo');
		// 		if (value) {
		// 			//有登录信息
		// 			console.log('已登录用户：', value);
		// 			this.$store.commit('setUserInfo', value); //存入状态
		// 			// uni.reLaunch({
		// 			// 	url: '../../../pages/index',
		// 			// });
		// 		}
		// 	} catch (e) {
		// 		console.log('isLogin().尚未登录：', JSON.stringify(e));
		// 	}
		// }
		// },
	},

	onLoad() {
		//默认加载
		let _this = this;
		wx.checkSession({
			success: function(res) {
				console.log('处于登录态');
				//尝试直接从本地读取userInfo
				//判断缓存中是否登录过，是的话直接登录
				console.log('从本地读取userInfo');
				const value = uni.getStorageSync('userInfo');
				if (value) {
					//有登录信息，更新vuex
					console.log('从本地读取userInfo成功：', JSON.stringify(value));
					_this.$store.commit('setUserInfo', value); //存入状态
					_this.isFirstlogin = false;
					uni.hideLoading();
					console.log('uni.hideLoading');
				} else {
					//由于某种原因，没有去读到userInfo，则需要重新登录
					console.log('从本地读到userInfo失败，重新login');
					//如果是第一次login，就等待用户授权先，否则，直接login
					if (!_this.isFirstlogin) _this.login();
				}
			},
			fail: function(res) {
				console.log('需要重新登录');
				_this.login();
			}
		});
		// this.login();
		//检查用户是否已经login
		// this.isLogin();
		// 	uni.getProvider({
		// 		service: 'oauth',
		// 		success: result => {
		// 			this.providerList = result.provider.map(value => {
		// 				let providerName = '';
		// 				switch (value) {
		// 					case 'weixin':
		// 						providerName = '微信登录';
		// 						break;
		// 					case 'qq':
		// 						providerName = 'QQ登录';
		// 						break;
		// 					case 'sinaweibo':
		// 						providerName = '新浪微博登录';
		// 						break;
		// 					case 'xiaomi':
		// 						providerName = '小米登录';
		// 						break;
		// 					case 'alipay':
		// 						providerName = '支付宝登录';
		// 						break;
		// 					case 'baidu':
		// 						providerName = '百度登录';
		// 						break;
		// 					case 'toutiao':
		// 						providerName = '头条登录';
		// 						break;
		// 					case 'apple':
		// 						providerName = '苹果登录';
		// 						break;
		// 				}
		// 				return {
		// 					name: providerName,
		// 					id: value
		// 				};
		// 			});
		// 		},
		// 		fail: error => {
		// 			console.log('获取登录通道失败', error);
		// 		}
		// 	});
		//
	},
	computed: {
		...mapState(['colors', 'colorSets', 'colorSetNames', 'userInfo'])
	},
	onReady() {
		if (uni.createRewardedVideoAd) {
			rewardedVideoAd = uni.createRewardedVideoAd({ adpid: 'xxxx' });
			rewardedVideoAd.onLoad(() => {
				console.log('onLoad event');
			});
			rewardedVideoAd.onError(err => {
				console.log('onError event', err);
			});
			rewardedVideoAd.onClose(res => {
				console.log('onClose event', res);
			});
		}
	}
};
</script>

<style>
.header {
	margin: 90rpx 0 90rpx 50rpx;
	border-bottom: 1px solid #ccc;
	text-align: center;
	width: 650rpx;
	height: 300rpx;
	line-height: 450rpx;
}

.header image {
	width: 200rpx;
	height: 200rpx;
}

.content {
	margin-left: 50rpx;
	margin-bottom: 90rpx;
}

.content text {
	display: block;
	color: #9d9d9d;
	margin-top: 40rpx;
}

.bottom {
	border-radius: 80rpx;
	margin: 70rpx 50rpx;
	font-size: 35rpx;
}
page {
	background: #eee !important;
	width: 100%;
	height: 100%;
}

.fgx {
	height: 5px;
	width: 100%;
	background: #f0f0f0;
}
text {
	font-size: 16px;
}
.username_font {
	font-size: 13px;
}
.user_mc {
	/* margin-top:-35px; */
	font-size: 32px;
	margin-left: 35px;
	color: #fff;
}
.user_top {
	height: 420rpx;
}
.user_top_two {
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-left: 20px;
	padding-bottom: 20px;
	padding-top: 10px;
}
.user_sz {
	display: flex;
	justify-content: space-between;
	padding-top: 8px;
	padding-bottom: 8px;
}
.user_dd {
	position: absolute;
	width: 90%;
	background: #eee !important;
	margin-left: 19px;
	border-radius: 5px;
}
.dd_stu {
	background: #fff;
	margin-bottom: 10px;
	border-radius: 5px;
}
.user_top_image {
	width: 80px;
	height: 80px;
	border-radius: 100px;
	border: 2px solid #fff;
}

.user_top_name {
	color: #ffffff;
	padding-top: 10px;
}
.user_top_name text {
	font-size: 16px;
}
.user_top_name view {
	font-size: 12px;
	border: 1px solid #ffffff;
	width: 80px;
	line-height: 20px;
	margin: 0px auto;
	border-radius: 10px;
}
.order {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	font-size: 16px;
	border-bottom: 1px solid #eee;
}
.order_right {
	display: flex;
	color: #999;
}
.order_my {
	margin-right: 5px;
	font-size: 14px;
}
.order_list {
	display: flex;
	justify-content: space-around;
	height: 180rpx;
}
.bottom_1 image {
	border: 0;
}
.list {
	text-align: center;
	font-size: 14px;
	width: 20%;
	position: relative;
	padding-top: 35rpx;
	padding-bottom: 35rpx;
	color: #666;
}
.function {
	width: 100%;
	margin: 10px auto;
	border-radius: 5px;
}
.function_list {
	display: flex;
	justify-content: space-between;
	height: 48px;
	line-height: 48px;
	border-bottom: 1px solid #eeeeee;
}
.tishi {
	position: absolute;
	color: #fff;
	background: red;
	border-radius: 50%;
	right: 2px;
	top: 4px;
	font-size: 12px;
	width: 40rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	opacity: 0.8;
}
.function_left {
	display: flex;
	font-size: 16px;
	margin-left: 5px;
	/* padding-top: 3px; */
}
.function .iconfont {
	line-height: 27px;
}
.function_text {
	margin-left: 5px;
}
.hh {
	margin: 10px auto;
	width: 100%;
	background: #fff;
	border-radius: 5px;
}
.qbdd {
	width: 100%;
	font-size: 12px;
	color: #666;
	padding: 4% 0;
	border-bottom: 1px solid #eee;
}
.c3 {
	color: black;
	font-size: 16px;
	padding-left: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 496rpx;
}
.jiantou {
	display: flex;
	justify-content: center;
	align-items: center;
}

.jiantou image {
	width: 10px;
	height: 10px;
}
.icon-msnui-update::before {
	color: #ffffff;
	font-size: 12px;
}
.icon-iconset0424::before {
	color: #ffffff;
	background-color: red;
	font-size: 16px;
	border-radius: 10px;
	line-height: 22px;
}

.icon-weibiaoti2fuzhi08::before {
	color: #0000ff;
	font-size: 24px;
}
.bottom {
	padding: 10px;
	text-align: center;
	font-size: 12px;
	color: #999;
}
.bottom_1 {
	display: flex;
	justify-content: center;
}
.bottom_2 {
	text-align: center;
}
.bottom_2 text {
	font-size: 14px;
}
.bottom_1 image {
	width: 30px;
	height: 30px;
}
.function_right {
	margin-right: 5px;
}
.dd_img image {
	border-radius: 0;
	border: 0;
	width: 30px;
	height: 30px;
}

.plug_ins {
	display: flex;
	justify-content: space-around;
	text-align: center;
	font-size: 12px;
	color: #646464;
	background: #fff;
	margin-top: 90px;
	width: 100%;
	margin: auto;
	border-radius: 5px;
}
.plug_ins_list {
	padding: 20rpx;
}
.plug_ins_list image {
	width: 30px;
	height: 30px;
}

/*功能图片  */
.img image {
	width: 25px;
	height: 25px;
}
/* 
.bottom_1 image{
  border-radius: 0;
} */

.img {
	display: flex;
	align-items: center;
	border-radius: 0;
}

.img image {
	border-radius: 0;
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 23px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: auto;
	color: #666666;
}

.dd_img view {
	font-size: 31px;
}

.mask {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: #000;
	z-index: 9000;
	opacity: 0.7;
}

.modalDlg {
	position: fixed;
	top: 25%;
	left: 2%;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.close {
	position: relative;
	right: -44%;
	top: -550rpx;
}
.swiper-box .wx-swiper-dot {
	display: inline-flex;
	justify-content: space-between;
	border-radius: 50%;
	border: none;
}
.swiper-box .wx-swiper-dot::before {
	content: '';
	flex-grow: 1;
	background: #fff;
	border-radius: 50%;
	border: none;
}
.swiper-box .wx-swiper-dot-active::before {
	background: red;
	border-radius: 50%;
	border: none;
}

.model {
	position: fixed;
	top: 33%;
	background: #fff;
	z-index: 9999;
	width: 80%;
	left: 10%;
	right: 10%;
	border-radius: 10px;
	text-align: center;
}
.modelTitle {
	line-height: 40px;
	border-bottom: 1px solid #eee;
}

.modelBody {
	line-height: 40px;
	padding: 9px;
}
.logins {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 40rpx;
	font-size: 30rpx;
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
}

.text-length {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	width: 96rpx;
}
</style>
