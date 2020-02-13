import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var {colors, colorSets} = require('../common/colors.js');

const store = new Vuex.Store({
	state: {
		sysInfo: [],
		cfg: {
			bgc: '#cccccc',
			bgcGradient: '#cccccc',
			colBgc: 'transparent',
			colBgcGradient: 'transparent',
			hilightCurrentDay: true,
			daysMode: false, //false: day5; true: day7
			axisColor: '#00ff00',
			axisColor1: '#ff0000',
			axisTextColor: '#ffffff',
			axisTextBgColor: '#000000'
		},
		colors: colors,
		colorSets: colorSets,
		count: 0,
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
		icons:[
			'icon-youyong4',
			'icon-zhuazhualiugou',
			'icon-shuijue',
			'icon-38464',
			'icon-kafeicoffee61',
			'icon-yuehuiqipao',
			'icon-guangjie',
			'icon-zhengzhi:before',
			'icon-2',
			'icon-fendoumubiao',
			'icon-kezuofan',
			'icon-pashan',
			'icon-xuexi',
			'icon-weibiaoti--',
			'icon-kezuofan1',
			'icon-yinle',
			'icon-xizao',
			'icon-youxi',
			'icon-yingyushuiping',
			'icon-sanbu',
			'icon-xiyifuwu',
			'icon-xinaixin',
			'icon-shijian',
			'icon-xiuli',
			'icon-xiuxi',
			'icon-paobu',
			'icon-wuli',
			'icon-xizaomuyu',
			'icon-beer',
			'icon-baijiu_',
			'icon-shaokao',
			'icon-weibiaoti',
			'icon-icon-test',
			'icon-icon-test1',
			'icon-kandianying-weijihuo',
			'icon--huihua',
			'icon-yuwen',
			'icon-shuxue',
			'icon-huaxue',
			'icon-shaokao1',
			'icon-youyong',
			'icon-paobu1',
			'icon-rest',
			'icon-ziyuan',
			'icon-guzhang',
			'icon-wanfatubiao-daochu-',
			'icon-yule',
			'icon-fendou',
			'icon-jisuanji',
			'icon-pinpaishangou',
			'icon-yuehui',
			'icon-quntidajia',
			'icon-getidajia',
			'icon-chifancopy-',
			'icon-xiyifuwu1',
			'icon-shengwu'
			
		],
		projs: {
			tableHeight: 600,
			rpx: 0,
			startLineTime: 480,
			endLineTime: 600,
			timeSpan: 0,
			days: [{
					weekday: 'monday',
					icon: 'chat',
					marginTop: 100,
					classes: [{
							weekday: 'monday',
							icon: 'icon-youyong4',
							name: '语文',
							time: 480,
							dur: 60,
							margintop: 100,
							height: 100,
							displayMode: 2,

							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 20, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 20, //文字边框弧度

							showIcon: true, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 40, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 20, //图标边框颜色
							
							showTime: false,
							timeBgColor: "00ff00",
							timeSize: 10,
							timeShowBorder: false,
							showDur: false,
							durBgColor: "00ff00",
							durSize: 10,
							durShowBorder: false	
						},
						{
							weekday: 'monday',
							icon: 'icon-yingyushuiping',
							name: 'm2',
							time: 720,
							dur: 120,
							margintop: 50,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 20, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 20, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#9943ff', //图标边框颜色
							iconBorderRadio: 20, //图标边框颜色
							showTime: false,
							timeBgColor: "00ff00",
							timeSize: 10,
							timeShowBorder: false,
							showDur: false,
							durBgColor: "00ff00",
							durSize: 10,
							durShowBorder: false	
						}
					]
				},
				{
					weekday: 'tuesday',
					icon: 'like-o',
					classes: [{
							weekday: 'tuesday',
							icon: 'icon-yingyushuiping',
							name: 'm2',
							time: 480,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'tuesday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 540,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				},
				{
					weekday: 'wednesday',
					icon: 'like-o',
					classes: [{
							weekday: 'wednesday',
							icon: 'icon-yingyushuiping',
							name: 'chinese',
							time: 480,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'wednesday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 600,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				},
				{
					weekday: 'thursday',
					icon: 'like-o',
					classes: [{
							weekday: 'thursday',
							icon: 'icon-yingyushuiping',
							name: 'chinese',
							time: 600,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'thursday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 700,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				},
				{
					weekday: 'friday',
					icon: 'like-o',
					classes: [{
							weekday: 'friday',
							icon: 'icon-yingyushuiping',
							name: 'chinese',
							time: 800,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'friday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 900,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				},
				{
					weekday: 'saturday',
					icon: 'like-o',
					classes: [{
							weekday: 'saturday',
							icon: 'icon-yingyushuiping',
							name: 'chinese',
							time: 800,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'saturday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 900,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				}, {
					weekday: 'sunday',
					icon: 'like-o',
					classes: [{
							weekday: 'sunday',
							icon: 'icon-yingyushuiping',
							name: 'chinese',
							time: 800,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						},
						{
							weekday: 'sunday',
							icon: 'icon-yingyushuiping',
							name: 'math',
							time: 900,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							bgc: 'transparent', //课程背景颜色
							bgcGradient: 'transparent', //课程背景渐变色

							showBorder: false, //是否显示课程外框
							borderColor: '#123456', //课程外框颜色
							borderRadio: 5, //课程边框弧度

							showName: false, //是否显示课程名称
							textColor: '#FFFFFF', //名称颜色
							textBgColor: 'transparent', //名称背景颜色
							textSize: 20, //文字尺寸
							textShowBorder: false, //是否显示文字边框
							textBorderColor: '#F44336', //文字边框颜色
							textBorderRadio: 5, //文字边框弧度

							showIcon: false, //是否显示图标
							iconColor: '#ff0000', //图标颜色
							iconBgColor: 'transparent', //图标背景颜色
							iconSize: 20, //图标尺寸
							iconShowBorder: false, //是否显示图标边框
							iconBorderCorlor: '#0000ff', //图标边框颜色
							iconBorderRadio: 5, //图标边框颜色
						}
					]
				}
			]
		}
	},
	mutations: {
		setSysInfo(state, sysInfo) {
			state.sysInfo = sysInfo;
		},
		setTableHeight(state, tableHeight) {
			console.log('setTableHeight: ' + tableHeight);
			state.projs.tableHeight = tableHeight;
			state.projs.rpx = state.projs.tableHeight / state.projs.timeSpan;
		},
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state) {
			state.testvuex = true
		},
		setTestFalse(state) {
			state.testvuex = false
		},
		increaseCountBy(state, cnt) {
			state.count += cnt;
		},
		increaseCount(state) {
			console.log('increaseCount:')
			state.count += 2;
		},
		decreaseCount(state) {
			state.count--;
		},
		setProjs(state, item) {
			state.projs = item;
		},
		updateProjs(state) {
			console.log('store.updateProjs');
			// console.log(JSON.stringify(state.projs));

			let pretime = 0;
			let start = 480;
			let stop = 720;

			state.projs.days.forEach(function(item1, i) {
				// console.log('x:' + i + JSON.stringify(item1));
				item1.classes.forEach(function(item2, j) {
					// console.log('xy:' + i + j + JSON.stringify(item2));

					if (item2.time < start) {
						start = item2.time;
						console.log('i:' + i + '; j:' + j + ';start:' + start);
					}
					if ((item2.time + item2.dur) > stop) {
						stop = item2.time + item2.dur;
						console.log('i:' + i + '; j:' + j + ';stop:' + stop);
					}
				})
			})
			state.projs.startLineTime = Math.floor(start);
			state.projs.endLineTime = Math.ceil(stop);
			console.log('store.updateProjs: start:' + start)
			console.log('store.updateProjs: stop:' + stop)

			state.projs.timeSpan = (state.projs.endLineTime - state.projs.startLineTime) / 60;
			state.projs.rpx = state.projs.tableHeight / state.projs.timeSpan / 60;
			state.projs.days.forEach(function(item1) {
				item1.classes.forEach(function(item2, index2) {
					if (index2 == 0) {
						item2.margintop = (item2.time - state.projs.startLineTime) * state.projs.rpx;
						pretime = item2.time + item2.dur;
					} else {
						item2.margintop = (item2.time - pretime) * state.projs.rpx;
						pretime = item2.time + item2.dur;
					}

					item2.height = item2.dur * state.projs.rpx;
					if (item2.height > 77)
						item2.displayMode = 4;
					else if (item2.height > 59)
						item2.displayMode = 3;
					else if (item2.height > 41)
						item2.displayMode = 2;
					else if (item2.height > 23)
						item2.displayMode = 1;
					else
						item2.displayMode = 0;
				})
			})
		},
		addClass(state, item) {
			console.log('addClass');
			// console.log(JSON.stringify(item));
			state.projs.days.forEach(function(i1) {
				if (i1.weekday == item.weekday) {
					i1.classes.push(item);
				}
			})
		},
		updateClass(state, item) {
			console.log('store:updateClass');
			// console.log(JSON.stringify(item));
			// console.log(JSON.stringify(state.projs.days[x].classes[y]))
			state.projs.days[item.x].classes[item.y] = item.cfgt;
			//  state.projs.days.forEach(function(i1) {
			//      if (i1.weekday == item.weekday) {
			//          i1.classes.forEach(function(i2) {
			// 	if
			// })
			//      }
			//  })
		},
		deleteClass(state, item) {
			console.log('store:deleteClass');
			// console.log(JSON.stringify(item));
			state.projs.days[item.x].classes.splice(item.y, 1);
		},
		updateCfg(state, item) {
			state.cfg = item;
		},
		addNewIcon(state,item) {
			state.icons = item;
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function() { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log(
									'uni.request mock openid[' +
									openid +
									']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务',
								err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store
