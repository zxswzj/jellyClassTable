import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var colors = require('../common/colors.js');

const store = new Vuex.Store({
	state: {
		count: 0,
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
		projs: {
			// displayFullThres: 100,
			// displayNormalThres: 75,
			// displayLessThres: 50,
			// displayNoneThres: 25,
			tableHeight: 0,
			rpx: 0,
			tableMode: 5, //5day mode
			startLineTime: 480,
			endLineTime: 0,
			timeSpan: 0,
			days: [{
					weekday: 'monday',
					icon: 'chat',
					marginTop: 100,
					classes: [{
							weekday: 'monday',
							icon: 'success',
							name: 'm1',
							time: 480,
							dur: 60,
							margintop: 100,
							height: 100,
							displayMode: 2,
							color: 'colors-red-lighten-1'
						},
						{
							weekday: 'monday',
							icon: 'warn',
							name: 'm2',
							time: 720,
							dur: 120,
							margintop: 50,
							height: 100,
							displayMode: 2,
							color: 'colors-blue-lighten-1'
						}
					]
				},
				{
					weekday: 'tuesday',
					icon: 'like-o',
					classes: [{
							weekday: 'tuesday',
							icon: 'download',
							name: 'm2',
							time: 480,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-pink-lighten-1'
						},
						{
							weekday: 'tuesday',
							icon: 'info',
							name: 'math',
							time: 540,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-purple-lighten-1'
						}
					]
				},
				{
					weekday: 'wednesday',
					icon: 'like-o',
					classes: [{
							weekday: 'wednesday',
							name: 'chinese',
							time: 480,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-deep-purple-lighten-1'
						},
						{
							weekday: 'wednesday',
							name: 'math',
							time: 600,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-indigo-base'
						}
					]
				},
				{
					weekday: 'thuesday',
					icon: 'like-o',
					classes: [{
							weekday: 'thuesday',
							name: 'chinese',
							time: 600,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-light-blue-base'
						},
						{
							weekday: 'thuesday',
							name: 'math',
							time: 700,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-cyan-lighten-1'
						}
					]
				},
				{
					weekday: 'friday',
					icon: 'like-o',
					classes: [{
							weekday: 'friday',
							name: 'chinese',
							time: 800,
							dur: 45,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-teal-darken-1'
						},
						{
							weekday: 'friday',
							name: 'math',
							time: 900,
							dur: 60,
							marginTop: 10,
							height: 100,
							displayMode: 2,
							color: 'colors-green-darken-1'
						}
					]
				}
			]
		}
	},
	mutations: {
		setTableHeight(state, tableHeight) {
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
			
			let pretime = 0;
			let start = 480;
			let stop = 720;

			state.projs.days.forEach(function(item1, i) {
				console.log(JSON.stringify(item1));
				item1.classes.forEach(function(item2, j) {
					console.log(JSON.stringify(item2));
					
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
			state.projs.startLineTime = start;
			state.projs.endLineTime = stop;
			console.log('store.updateProjs: start:' + start)
			console.log('store.updateProjs: stop:' + stop)

			state.projs.timeSpan = stop - start;
			state.projs.rpx = state.projs.tableHeight / state.projs.timeSpan;
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
			state.projs.days[item.x].classes[item.y] = item.currentClass;
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
