import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var {
	colors,
	colorSets,
	colorSetNames
} = require('../common/colors.js');

let {
	projs,
	icons
} = require('../common/app-data.js')

const store = new Vuex.Store({
	state: {
		weeks: [],
		date: [],
		sysInfo: [],
		userInfo: {},
		cfg: {
			bgc: '#cccccc',
			bgcGradient: '#cccccc',
			colBgc: 'transparent',
			colBgcGradient: 'transparent',
			colBorderShow: false,
			colBorderColor: 'transparent',
			hilightCurrentDay: true,
			daysMode: false, //false: day5; true: day7
			axisColor: '#69bc38',
			axisColorGradient: '#f34598',
			axisTextColor: '#ffffff',
			axisTextBgc: '#000000',
			highlightBorderColor: '#00ff00'
		},
		colors: colors,
		colorSets: colorSets,
		colorSetNames: colorSetNames,
		projs: projs,
		icons: icons,
		count: 0,
		hasLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
	},
	mutations: {
		setSysInfo(state, sysInfo) {
			state.sysInfo = sysInfo;
		},
		setTableHeight(state, tableHeight) {
			console.log('setTableHeight: ' + tableHeight);
			state.projs.tableHeight = tableHeight;
			state.projs.rpx = state.projs.tableHeight / state.projs.timeSpan / 60;
		},
		setDate(state, date) {
			state.date = date;
		},
		// logout(state) {
		// 	state.hasLogin = false
		// 	state.openid = null
		// },
		setUserInfo(state, userInfo) {
			console.log('setUserInfo' + JSON.stringify(userInfo));
			state.userInfo = userInfo;
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

			state.projs.timeSpan = Math.ceil((state.projs.endLineTime - state.projs.startLineTime) / 60);
			state.projs.rpx = state.projs.tableHeight / state.projs.timeSpan / 60;
			console.log('store.updateProjs: timeSpan:' + state.projs.timeSpan);
			// console.log('store.updateProjs: rpx:' + state.projs.rpx);
			state.projs.days.forEach(function(item1) {
				// console.log('store.updateProjs: days:' + JSON.stringify(item1));
				item1.classes.forEach(function(item2, index2) {
					// console.log('store.updateProjs: class:' + JSON.stringify(item2));
					// console.log('index2:'+index2);
					if (index2 == 0) {
						item2.margintop = (item2.time - state.projs.startLineTime) * state.projs.rpx;
						pretime = item2.time + item2.dur;
						console.log('item2.margintop:'+item2.margintop);
						console.log('pretime:'+pretime);
					} else {
						item2.margintop = (item2.time - pretime) * state.projs.rpx;
						pretime = item2.time + item2.dur;
					}
					item2.height = item2.dur * state.projs.rpx;
				})
			})
		},
		addClass(state, c) {
			c.weekdayPrevious = c.weekday;
			let day = c.weekday;
			let data = Object.assign({}, JSON.parse(JSON.stringify(c)));
			state.projs.days[day].classes.push(data);
			state.projs.days[day].classes.sort(function(a,b){
				return a.time - b.time;
			})
			// console.log('store:addClass:');
			// state.projs.days[day].classes.forEach(function(i1, i) {
			// 	if (i1.weekday == c.weekday) {
			// 		if (i1.time == c.time) {
			// 			console.log('addClass.exception: class duplicated')
			// 			return { errorCode:"addClassFail"}
			// 		}
			// 	}
			// })
			// return { errorCode:"addClassSuccess"};
		},
		updateClass(state, item) {
			// console.log('store:updateClass.showNane:' + item.cfgt.showName + ' x:' + item.x + ' y:' + item.y);
			// console.log('item.cfgt:' + JSON.stringify(item.cfgt));
			// console.log('state.projs.days before:' + JSON.stringify(state.projs.days[item.x].classes[item.y]));
			//如果day没有变,只是当前日期的class替换
			let previousDay = item.classTmp.weekdayPrevious;
			let newDay = item.classTmp.weekday;
			if (previousDay == newDay) {
				state.projs.days[item.x].classes.splice([item.y], 1, item.classTmp);
				// console.log('state.projs.days after:' + JSON.stringify(state.projs.days[item.x].classes[item.y]));

				// state.projs.days.forEach(function(i1, i) {
				// 	if (i == item.x) {
				// 		i1.classes.forEach(function(i2, j) {
				// 			if (j == item.y) {
				// 				i1.classes.splice(j, 1, item.classTmp);
				// 			}
				// 		})
				// 	}
				// })
			} else {
				//删除当前记录,并增加新的记录
				item.classTmp.weekdayPrevious = item.classTmp.weekday;
				state.projs.days[previousDay].classes.splice(item.y, 1);
				state.projs.days[newDay].classes.push(item.classTmp);
				state.projs.days[newDay].classes.sort(function(a,b){
					return a.time - b.time;
				})
			}
		},
		deleteClass(state, item) {
			console.log('store:deleteClass');
			// console.log(JSON.stringify(item));
			state.projs.days[item.x].classes.splice(item.y, 1);
		},
		updateCfg(state, item) {
			state.cfg = item;
		},
		addNewIcon(state, item) {
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
